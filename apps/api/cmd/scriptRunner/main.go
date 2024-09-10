package main

import (
	"api/internal/config"
	repository "api/internal/db/repository"
	"api/internal/lib/logger"
	rclient "api/internal/redis"
	"api/internal/scripts"
	"context"
	"flag"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/redis/go-redis/v9"
)

func main() {

	// Initialize logger, config, cache,  and database
	log := logger.New()
	config := config.GetEnv()

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
	scriptRunner := scripts.NewScript(redisClient, classroomRepo, studentRepo, userRepo, requestRepo, logsRepo).WithLogger(log)

	// Parse flags
	seedFlag := flag.Bool("seed", false, "seed the database")
	logFlag := flag.Bool("logs", false, "process logs")
	nightlyFlag := flag.Bool("nightly", false, "run nightly script")
	flag.Parse()

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

	waitForShutdown(log)
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
	dbconfig, err := pgxpool.ParseConfig(config.DSN)
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
	case sig := <-waitForShutdown(log):
		log.Warn("Received signal", "signal", sig, "Shutting down.")
		cancel()
	}
}

// Handle shutdown signals
func waitForShutdown(log *logger.Logger) <-chan os.Signal {
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt, syscall.SIGTERM)

	return sig
}
