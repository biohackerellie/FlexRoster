package main

import (
	"context"
	"flag"
	"os"
	"os/signal"
	"syscall"
	"time"

	"api/internal/lib/logger"

	"api/internal/config"

	repository "api/internal/db/repository"
	"api/internal/scripts"

	"github.com/jackc/pgx/v5/pgxpool"
)

func main() {
	log := logger.New()

	config := config.GetEnv()

	dbconfig, err := pgxpool.ParseConfig(config.DSN)
	if err != nil {
		log.Fatal(err)
	}
	db, err := pgxpool.NewWithConfig(context.Background(), dbconfig)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	timeout, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	if err := db.Ping(timeout); err != nil {
		log.Fatal(err)
	}
	cancel()

	userRepo := repository.NewUsersDBService(db).WithLogs(log)
	classroomRepo := repository.NewClassroomDBService(db).WithLogs(log)
	studentRepo := repository.NewStudentDBService(db).WithLogs(log)

	scriptRunner := scripts.NewScript(classroomRepo, studentRepo, userRepo).WithLogger(log)

	seedFlag := flag.Bool("seed", false, "seed the database")

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
