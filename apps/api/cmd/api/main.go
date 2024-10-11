package main

import (
	"context"
	"flag"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"api/internal/lib/logger"
	"api/internal/service"

	"api/internal/config"
	"api/internal/core/classrooms"

	// "api/internal/core/requests"
	repository "api/internal/db/repository"

	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/render"
	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/redis/go-redis/v9"
)

func main() {
	log := logger.New()

	configPath := flag.String("config", "./config.yaml", "path to config file")
	flag.Parse()

	config, err := config.LoadConfig(*configPath)
	if err != nil {
		log.Fatal("failed to load config", "err", err)
	}

	cache := initRedis(config, log)
	defer cache.Close()

	db := initPostgres(config, log)
	defer db.Close()

	router := chi.NewRouter()

	// middleware
	router.Use(middleware.Timeout(60 * time.Second))
	router.Use(middleware.RequestID)
	router.Use(middleware.RealIP)
	router.Use(middleware.Recoverer)
	router.Use(middleware.URLFormat)
	router.Use(render.SetContentType(render.ContentTypeJSON))
	// requetsRepo := repository.NewRequestDBService(db).WithLogs(log)
	// requestService := requests.NewAdapter(requetsRepo).WithLogger(log)

	classroomRepo := repository.NewClassroomDBService(db).WithLogs(log)

	classroomService := classrooms.NewAdapter(classroomRepo).WithLogger(log)
	rpcClassroomHandler := service.NewClassroomServiceServer(classroomService)
	router.Handle("/*", rpcClassroomHandler)
	address := "localhost" + ":" + config.ServerPort
	server := newServer(address, router, log)

	go func() {
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatal("Could not listen on", "addr", address, "err", err)
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
