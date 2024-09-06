package config

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type Env struct {
	SERVER_HOST             string           `env:"SERVER_HOST"`
	SERVER_PORT             string           `env:"SERVER_PORT"`
	DSN                     string           `env:"DSN"`
	REDIS_HOST1             string           `env:"REDIS_HOST1"`
	REDIS_HOST2             string           `env:"REDIS_HOST2"`
	REDIS_HOST3             string           `env:"REDIS_HOST3"`
	REDIS_PORT              string           `env:"REDIS_PORT"`
	ONEROSTER_CLIENT_ID     string           `env:"ONEROSTER_CLIENT_ID"`
	ONEROSTER_CLIENT_SECRET string           `env:"ONEROSTER_CLIENT_SECRET"`
	LHS_SOURCE_ID           string           `env:"LHS_SOURCE_ID"`
	XSRF_TOKEN              string           `env:"XSRF_TOKEN"`
	REDIS_URL               string           `env:"REDIS_URL"`
	REDIS_PASSWORD          string           `env:"REDIS_PASSWORD"`
	AZURE_TEACHER_GROUP     string           `env:"AZURE_TEACHER_GROUP"`
	SECRETARIES             []string         `env:"SECRETARIES"`
	AZURE_HELPDESK_GROUP    string           `env:"AZURE_HELPDESK_GROUP"`
	AZURE_OTHERUSERS_GROUP  string           `env:"AZURE_OTHERUSERS_GROUP"`
	AZURE_AD_CLIENT_ID      string           `env:"AZURE_AD_CLIENT_ID"`
	AZURE_AD_CLIENT_SECRET  string           `env:"AZURE_AD_CLIENT_SECRET"`
	AZURE_AD_TENANT_ID      string           `env:"AZURE_AD_TENANT_ID"`
	ONEROSTER_APPNAME       string           `env:"ONEROSTER_APPNAME"`
	SEMESTER_CLASS_NAME     string           `env:"SEMESTER_CLASS_NAME"`
	PREFERRED_NAMES         []PreferredNames `env:"PREFERRED_NAMES"`
}
type PreferredNames struct {
	GivenName     string `json:"givenName"`
	PreferredName string `json:"preferredName"`
}

func loadEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
	}
}

func GetEnv() *Env {
	loadEnv()
	SecArray := os.Getenv("SECRETARIES")
	secretaries := []string{}
	if SecArray != "" {
		secretaries = append(secretaries, SecArray)
	}

	prefNamesArray := os.Getenv("PREFERRED_NAMES")
	preferredNames := make([]PreferredNames, 0)
	if prefNamesArray != "" {
		err := json.Unmarshal([]byte(prefNamesArray), &preferredNames)
		if err != nil {
			fmt.Println("Error parsing PREFERRED_NAMES:", err)
		}
	}
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
		AZURE_TEACHER_GROUP:     os.Getenv("AZURE_TEACHER_GROUP"),
		SECRETARIES:             secretaries,
		AZURE_HELPDESK_GROUP:    os.Getenv("AZURE_HELPDESK_GROUP"),
		AZURE_OTHERUSERS_GROUP:  os.Getenv("AZURE_OTHERUSERS_GROUP"),
		ONEROSTER_APPNAME:       os.Getenv("ONEROSTER_APPNAME"),
		SEMESTER_CLASS_NAME:     os.Getenv("SEMESTER_CLASS_NAME"),
		PREFERRED_NAMES:         preferredNames,
	}
}
