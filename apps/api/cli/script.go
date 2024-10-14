package cli

import (
	"context"
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
	"github.com/spf13/cobra"
)

var (
	scriptCmd = &cobra.Command{
		Use:   "script",
		Short: "Run maintenance scripts",
		Long:  "Run server maintenance scripts, useful for cron jobs",
		Run: func(cmd *cobra.Command, args []string) {
			log = logger.New()
			db = initPostgres(Config, log)
			defer db.Close()
			cache = initRedis(Config, log)
			defer cache.Close()

			userRepo := repository.NewUsersDBService(db).WithLogs(log)
			classroomRepo := repository.NewClassroomDBService(db).WithLogs(log)
			studentRepo := repository.NewStudentDBService(db).WithLogs(log)
			logsRepo := repository.NewLoggingBService(db).WithLogs(log)
			requestRepo := repository.NewRequestDBService(db).WithLogs(log)
			redisClient := rclient.NewRedis(cache)
			scriptRunner = scripts.NewScript(redisClient, classroomRepo, studentRepo, userRepo, requestRepo, logsRepo, Config).WithLogger(log)

			switch {
			case seedFlag:
				runWithTimeout(log, 5*time.Minute, func(ctx context.Context) error {
					return scriptRunner.SeedDatabase(ctx)
				}, "error seeding database", "Database seeding completed successfully.")
			case logFlag:
				runWithTimeout(log, 5*time.Minute, func(ctx context.Context) error {
					return scriptRunner.ProcessLogs(ctx)
				}, "error processing logs", "Logs processed successfully.")
			case nightlyFlag:
				runWithTimeout(log, 5*time.Minute, func(ctx context.Context) error {
					return scriptRunner.Nightly(ctx)
				}, "error running nightly script", "Nightly script completed successfully.")
			default:
			}

			waitForShutdown()
		},
	}
	seedFlag     bool
	logFlag      bool
	nightlyFlag  bool
	db           *pgxpool.Pool
	cache        *redis.Client
	log          *logger.Logger
	scriptRunner *scripts.Scripts
)

func init() {
	rootCmd.AddCommand(scriptCmd)
	scriptCmd.Flags().BoolVar(&seedFlag, "s", false, "Seed the database")
	scriptCmd.Flags().BoolVar(&logFlag, "l", false, "Process logs")
	scriptCmd.Flags().BoolVar(&nightlyFlag, "n", false, "Run nightly script")
}

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

func initAllVars() {
}
