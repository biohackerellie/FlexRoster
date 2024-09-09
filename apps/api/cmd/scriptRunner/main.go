package main

import (
	"context"
	"flag"
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
	log := logger.New()

	config := config.GetEnv()
	log.Info(config)
	redisHost1 := config.REDIS_HOST1 + ":" + config.REDIS_PORT
	log.Info("Connecting to Redis", "host", redisHost1)
	cache := redis.NewClient(&redis.Options{
		Addr: redisHost1,
	})
	defer cache.Close()

	dbconfig, err := pgxpool.ParseConfig(config.DSN)
	if err != nil {
		log.Fatal("error parsing db config", "err", err)
	}
	db, err := pgxpool.NewWithConfig(context.Background(), dbconfig)
	if err != nil {
		log.Fatal("error connecting to database", "err", err)
	}
	defer db.Close()
	timeout, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	if err := db.Ping(timeout); err != nil {
		log.Fatal(err)
	}
	if err := cache.Ping(timeout).Err(); err != nil {
		log.Fatal(err)
	}
	cancel()

	userRepo := repository.NewUsersDBService(db).WithLogs(log)
	classroomRepo := repository.NewClassroomDBService(db).WithLogs(log)
	studentRepo := repository.NewStudentDBService(db).WithLogs(log)
	logsRepo := repository.NewLoggingBService(db).WithLogs(log)
	redisClient := rclient.NewRedis(cache)
	scriptRunner := scripts.NewScript(redisClient, classroomRepo, studentRepo, userRepo, logsRepo).WithLogger(log)
	seedFlag := flag.Bool("seed", false, "seed the database")
	logFlag := flag.Bool("logs", false, "process logs")
	nightlyFlag := flag.Bool("nightly", false, "run nightly script")

	flag.Parse()

	if *seedFlag {
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()
		done := make(chan error, 1)
		go func() {
			done <- scriptRunner.SeedDatabase(ctx)
		}()

		select {
		case err := <-done:
			if err != nil {
				log.Fatal("error seeding database", "err", err)
			} else {
				log.Info("Database seeding completed successfully.")
			}
		case sig := <-waitForShutdown(log):
			log.Warn("Received signal:", sig, "Shutting down.")
			cancel()
		}
	} else if *logFlag {
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()
		done := make(chan error, 1)
		go func() {
			done <- scriptRunner.ProcessLogs(ctx)
		}()

		select {
		case err := <-done:
			if err != nil {
				log.Fatal("error processing logs", "err", err)
			} else {
				log.Info("Logs processed successfully.")
			}
		case sig := <-waitForShutdown(log):
			log.Warn("Received signal:", sig, "Shutting down.")
			cancel()
		}

	} else if *nightlyFlag {
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()
		done := make(chan error, 1)
		go func() {
			done <- scriptRunner.Nightly(ctx)
		}()
		select {
		case err := <-done:
			if err != nil {
				log.Fatal("error running nightly script", "err", err)
			} else {
				log.Info("Nightly script completed successfully.")
			}
		case sig := <-waitForShutdown(log):
			log.Warn("Received signal:", sig, "Shutting down.")
			cancel()
		}
	} else {

		flag.Usage()
	}
	waitForShutdown(log)
}

func waitForShutdown(log *logger.Logger) <-chan os.Signal {
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt, syscall.SIGTERM)

	return sig
}
