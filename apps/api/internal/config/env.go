package config

import (
	"fmt"

	"github.com/spf13/viper"
)

type Env struct {
	SERVER_HOST             string           `mapstructure:"SERVER_HOST"`
	SERVER_PORT             string           `mapstructure:"SERVER_PORT"`
	DSN                     string           `mapstructure:"DSN"`
	REDIS_HOST1             string           `mapstructure:"REDIS_HOST1"`
	REDIS_HOST2             string           `mapstructure:"REDIS_HOST2"`
	REDIS_HOST3             string           `mapstructure:"REDIS_HOST3"`
	REDIS_PORT              string           `mapstructure:"REDIS_PORT"`
	ONEROSTER_CLIENT_ID     string           `mapstructure:"ONEROSTER_CLIENT_ID"`
	ONEROSTER_CLIENT_SECRET string           `mapstructure:"ONEROSTER_CLIENT_SECRET"`
	LHS_SOURCE_ID           string           `mapstructure:"LHS_SOURCE_ID"`
	XSRF_TOKEN              string           `mapstructure:"XSRF_TOKEN"`
	REDIS_URL               string           `mapstructure:"REDIS_URL"`
	REDIS_PASSWORD          string           `mapstructure:"REDIS_PASSWORD"`
	AZURE_TEACHER_GROUP     string           `mapstructure:"AZURE_TEACHER_GROUP"`
	SECRETARIES             []string         `json:"SECRETARIES"`
	AZURE_HELPDESK_GROUP    string           `mapstructure:"AZURE_HELPDESK_GROUP"`
	AZURE_OTHERUSERS_GROUP  string           `mapstructure:"AZURE_OTHERUSERS_GROUP"`
	AZURE_AD_CLIENT_ID      string           `mapstructure:"AZURE_AD_CLIENT_ID"`
	AZURE_AD_CLIENT_SECRET  string           `mapstructure:"AZURE_AD_CLIENT_SECRET"`
	AZURE_AD_TENANT_ID      string           `mapstructure:"AZURE_AD_TENANT_ID"`
	ONEROSTER_APPNAME       string           `mapstructure:"ONEROSTER_APPNAME"`
	SEMESTER_CLASS_NAME     string           `mapstructure:"SEMESTER_CLASS_NAME"`
	PREFERRED_NAMES         []PreferredNames `json:"PREFERRED_NAMES"`
}
type PreferredNames struct {
	GivenName     string `json:"givenName"`
	PreferredName string `json:"preferredName"`
}

func loadEnv() (env *Env, err error) {
	viper.AddConfigPath(".")
	viper.AddConfigPath("../../")
	viper.AddConfigPath("$HOME/github/FlexRoster/apps/api")
	viper.SetConfigFile(".env")
	viper.AutomaticEnv()
	err = viper.ReadInConfig()
	if err != nil {
		fmt.Println("Error reading config file")
	}
	err = viper.Unmarshal(&env)
	return
}

func GetEnv() *Env {
	env, err := loadEnv()
	if err != nil {
		fmt.Println("Error loading env")
	}
	return env
}

// func GetEnv() *Env {
// 	loadEnv()
// 	SecArray := os.Getenv("SECRETARIES")
// 	secretaries := []string{}
// 	if SecArray != "" {
// 		secretaries = append(secretaries, SecArray)
// 	}

// 	prefNamesArray := os.Getenv("PREFERRED_NAMES")
// 	preferredNames := make([]PreferredNames, 0)
// 	if prefNamesArray != "" {
// 		err := json.Unmarshal([]byte(prefNamesArray), &preferredNames)
// 		if err != nil {
// 			fmt.Println("Error parsing PREFERRED_NAMES:", err)
// 		}
// 	}
// 	return &Env{
// 		SERVER_HOST:             os.Getenv("SERVER_HOST"),
// 		SERVER_PORT:             os.Getenv("SERVER_PORT"),
// 		DSN:                     os.Getenv("DSN"),
// 		REDIS_URL:               os.Getenv("REDIS_URL"),
// 		REDIS_HOST1:             os.Getenv("REDIS_HOST1"),
// 		REDIS_HOST2:             os.Getenv("REDIS_HOST2"),
// 		REDIS_HOST3:             os.Getenv("REDIS_HOST3"),
// 		REDIS_PORT:              os.Getenv("REDIS_PORT"),
// 		ONEROSTER_CLIENT_ID:     os.Getenv("ONEROSTER_CLIENT_ID"),
// 		ONEROSTER_CLIENT_SECRET: os.Getenv("ONEROSTER_CLIENT_SECRET"),
// 		LHS_SOURCE_ID:           os.Getenv("LHS_SOURCE_ID"),
// 		XSRF_TOKEN:              os.Getenv("XSRF_TOKEN"),
// 		REDIS_PASSWORD:          os.Getenv("REDIS_PASSWORD"),
// 		AZURE_TEACHER_GROUP:     os.Getenv("AZURE_TEACHER_GROUP"),
// 		SECRETARIES:             secretaries,
// 		AZURE_HELPDESK_GROUP:    os.Getenv("AZURE_HELPDESK_GROUP"),
// 		AZURE_OTHERUSERS_GROUP:  os.Getenv("AZURE_OTHERUSERS_GROUP"),
// 		ONEROSTER_APPNAME:       os.Getenv("ONEROSTER_APPNAME"),
// 		SEMESTER_CLASS_NAME:     os.Getenv("SEMESTER_CLASS_NAME"),
// 		PREFERRED_NAMES:         preferredNames,
// 	}
// }
