package main

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"api/internal/lib/logger"

	"api/internal/config"
	"api/internal/core/classrooms"
	repository "api/internal/db/repository"
	"api/internal/handler"

	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

func main() {
	log := logger.New()

	config := config.GetEnv()
	// db connection
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

	router := chi.NewRouter()

	// middleware
	router.Use(middleware.Timeout(60 * time.Second))
	router.Use(middleware.RequestID)
	router.Use(middleware.RealIP)
	router.Use(middleware.Recoverer)

	classroomRepo := repository.NewClassroomDBService(db).WithLogs(log)
	classroomService := classrooms.NewAdapter(classroomRepo).WithLogger(log)

	handler.NewClassroomHandler(router, classroomService, log)
	address := "localhost" + ":" + config.SERVER_PORT
	server := newServer(address, router, log)

	go func() {
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatal("Could not listen on", address, ":", err)
		}
	}()
	log.Info("Server started ", "addr", address)
	waitForShutdown(log, server)
}

func waitForShutdown(log *logger.Logger, server *http.Server) {
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt, syscall.SIGTERM)
	<-sig

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Fatal("Failed to gracefully shutdown the server", "err", err)
	}
}

func newServer(addr string, r *chi.Mux, log *logger.Logger) *http.Server {
	return &http.Server{
		Addr:     addr,
		ErrorLog: log.StdLogger(),
		Handler:  r,
	}
}
