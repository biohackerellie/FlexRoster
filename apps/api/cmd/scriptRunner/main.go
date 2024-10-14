package main

import (
	"context"
	"flag"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"api/internal/config"
	repository "api/internal/db/repository"
	"api/internal/lib/logger"
	rclient "api/internal/redis"
	"api/internal/scripts"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/redis/go-redis/v9"
)

func main() {
	// Parse flags
	configPathFlag := flag.String("config", "", "path to config file")
	initConfigFlag := flag.Bool("init-config", false, "initialize config file")
	seedFlag := flag.Bool("seed", false, "seed the database")
	logFlag := flag.Bool("logs", false, "process logs")
	nightlyFlag := flag.Bool("nightly", false, "run nightly script")
	flag.Parse()

	log := logger.New()
	if *initConfigFlag {
		err := config.GenerateSampleConfig()
		if err != nil {
			log.Fatal("error generating sample config", "err", err)
		}
		log.Info("Sample config generated successfully. \n Enter your values in the config file and run the script with the -config flag and the path to the config file.")
		os.Exit(0)
	}

	// Initialize logger, config, cache,  and database
	config, err := config.LoadConfig(*configPathFlag)
	if err != nil {
		log.Fatal("error loading config. Use '--init-config' to generate a sample config file", "err", err)
	}
	cache := initRedis(config, log)
	defer cache.Close()

	db := initPostgres(config, log)
	defer db.Close()

	// Initialize repositories and services
	userRepo := repository.NewUsersDBService(db).WithLogs(log)
	classroomRepo := repository.NewClassroomDBService(db).WithLogs(log)
	studentRepo := repository.NewStudentDBService(db).WithLogs(log)
	logsRepo := repository.NewLoggingBService(db).WithLogs(log)
	requestRepo := repository.NewRequestDBService(db).WithLogs(log)
	redisClient := rclient.NewRedis(cache)
	scriptRunner := scripts.NewScript(redisClient, classroomRepo, studentRepo, userRepo, requestRepo, logsRepo, config).WithLogger(log)

	// Handle flags
	switch {
	case *seedFlag:
		runWithTimeout(log, 5*time.Minute, func(ctx context.Context) error {
			return scriptRunner.SeedDatabase(ctx)
		}, "error seeding database", "Database seeding completed successfully.")
	case *logFlag:
		runWithTimeout(log, 5*time.Minute, func(ctx context.Context) error {
			return scriptRunner.ProcessLogs(ctx)
		}, "error processing logs", "Logs processed successfully.")
	case *nightlyFlag:
		runWithTimeout(log, 5*time.Minute, func(ctx context.Context) error {
			return scriptRunner.Nightly(ctx)
		}, "error running nightly script", "Nightly script completed successfully.")
	default:
		flag.Usage()
	}

	waitForShutdown()
}

// Helper to initialize Redis
func initRedis(config *config.Env, log *logger.Logger) *redis.Client {
	redisHost := config.RedisHost + ":" + config.RedisPort
	log.Info("Connecting to Redis", "host", redisHost)
	cache := redis.NewClient(&redis.Options{Addr: redisHost})
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)
	defer cancel()
	if err := cache.Ping(ctx).Err(); err != nil {
		log.Fatal("error connecting to Redis", "err", err)
	}

	return cache
}

// Helper to initialize Postgres
func initPostgres(config *config.Env, log *logger.Logger) *pgxpool.Pool {
	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", config.PgHost, config.PgPort, config.PgUser, config.PgPassword, config.PgDatabase)
	dbconfig, err := pgxpool.ParseConfig(dsn)
	if err != nil {
		log.Fatal("error parsing db config", "err", err)
	}

	db, err := pgxpool.NewWithConfig(context.Background(), dbconfig)
	if err != nil {
		log.Fatal("error connecting to database", "err", err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)
	defer cancel()
	if err := db.Ping(ctx); err != nil {
		log.Fatal(err)
	}

	return db
}

// Helper to run a function with a timeout
func runWithTimeout(log *logger.Logger, timeout time.Duration, f func(ctx context.Context) error, errMsg, successMsg string) {
	ctx, cancel := context.WithTimeout(context.Background(), timeout)
	defer cancel()

	done := make(chan error, 1)
	go func() {
		done <- f(ctx)
	}()

	select {
	case err := <-done:
		if err != nil {
			log.Fatal(errMsg, "err", err)
		} else {
			log.Info(successMsg)
		}
	case sig := <-waitForShutdown():
		log.Warn("Received signal", "signal", sig, "Shutting down.")
		cancel()
	}
}

// Handle shutdown signals
func waitForShutdown() <-chan os.Signal {
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt, syscall.SIGTERM)

	return sig
}
