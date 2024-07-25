package config

import (
	"fmt"
	"os"
	"reflect"

	"github.com/joho/godotenv"
)

type Env struct {
	User                    string `env:"EMAIL_USER"`
	Pass                    string `env:"EMAIL_PASSWORD"`
	APIKey                  string `env:"API_KEY"`
	DSN                     string `env:"DSN"`
	REDIS_HOST1             string `env:"REDIS_HOST1"`
	REDIS_HOST2             string `env:"REDIS_HOST2"`
	REDIS_HOST3             string `env:"REDIS_HOST3"`
	REDIS_PORT              string `env:"REDIS_PORT"`
	ONEROSTER_CLIENT_ID     string `env:"ONEROSTER_CLIENT_ID"`
	ONEROSTER_CLIENT_SECRET string `env:"ONEROSTER_CLIENT_SECRET"`
	LHS_SOURCE_ID           string `env:"LHS_SOURCE_ID"`
	XSRF_TOKEN              string `env:"XSRF_TOKEN"`
}

func loadEnv() {
	env := os.Getenv("GO_ENV")
	if env == "development" {
		err := godotenv.Load("../../.env")
		if err != nil {
			fmt.Println("Error loading .env file")
		}
	}
}

func GetEnv() *Env {
	loadEnv()
	var config Env
	val := reflect.ValueOf(&config).Elem()
	typeOfConfig := val.Type()
	for i := 0; i < val.NumField(); i++ {
		field := val.Field(i)
		envKey := typeOfConfig.Field(i).Tag.Get("env")
		if envKey == "" {
			continue
		}
		envVal, ok := os.LookupEnv(envKey)
		if !ok {
			panic(fmt.Sprintf("Environment variable %s not set", envKey))
		}
		field.SetString(envVal)
	}
	return &config
}
