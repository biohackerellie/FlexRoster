package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type Env struct {
	SERVER_HOST string `env:"SERVER_HOST"`
	SERVER_PORT string `env:"SERVER_PORT"`

	DSN                     string `env:"DSN"`
	REDIS_HOST1             string `env:"REDIS_HOST1"`
	REDIS_HOST2             string `env:"REDIS_HOST2"`
	REDIS_HOST3             string `env:"REDIS_HOST3"`
	REDIS_PORT              string `env:"REDIS_PORT"`
	ONEROSTER_CLIENT_ID     string `env:"ONEROSTER_CLIENT_ID"`
	ONEROSTER_CLIENT_SECRET string `env:"ONEROSTER_CLIENT_SECRET"`
	LHS_SOURCE_ID           string `env:"LHS_SOURCE_ID"`
	XSRF_TOKEN              string `env:"XSRF_TOKEN"`
	REDIS_URL               string `env:"REDIS_URL"`
	REDIS_PASSWORD          string `env:"REDIS_PASSWORD"`
}

func loadEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
	}
}

func GetEnv() *Env {
	loadEnv()

	return &Env{
		SERVER_HOST:             os.Getenv("SERVER_HOST"),
		SERVER_PORT:             os.Getenv("SERVER_PORT"),
		DSN:                     os.Getenv("DSN"),
		REDIS_URL:               os.Getenv("REDIS_URL"),
		REDIS_HOST1:             os.Getenv("REDIS_HOST1"),
		REDIS_HOST2:             os.Getenv("REDIS_HOST2"),
		REDIS_HOST3:             os.Getenv("REDIS_HOST3"),
		REDIS_PORT:              os.Getenv("REDIS_PORT"),
		ONEROSTER_CLIENT_ID:     os.Getenv("ONEROSTER_CLIENT_ID"),
		ONEROSTER_CLIENT_SECRET: os.Getenv("ONEROSTER_CLIENT_SECRET"),
		LHS_SOURCE_ID:           os.Getenv("LHS_SOURCE_ID"),
		XSRF_TOKEN:              os.Getenv("XSRF_TOKEN"),
		REDIS_PASSWORD:          os.Getenv("REDIS_PASSWORD"),
	}
}
