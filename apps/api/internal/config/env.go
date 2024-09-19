package config

import (
	"fmt"
	"os"
	"path/filepath"
	"reflect"
	"strings"

	"github.com/spf13/viper"
)

type Env struct {
	AzureADClientID         string           `mapstructure:"azure_ad_client_id"`
	AzureADClientSecret     string           `mapstructure:"azure_ad_client_secret"`
	AzureADTenantID         string           `mapstructure:"azure_ad_tenant_id"`
	PgPort                  string           `mapstructure:"pgport"`
	PgUser                  string           `mapstructure:"pguser"`
	PgPassword              string           `mapstructure:"pgpassword"`
	PgHost                  string           `mapstructure:"pghost"`
	PgDatabase              string           `mapstructure:"pgdatabase"`
	ServerPort              string           `mapstructure:"server_port"`
	ServerHost              string           `mapstructure:"server_host"`
	OnerosterClientID       string           `mapstructure:"oneroster_client_id"`
	OnerosterClientSecret   string           `mapstructure:"oneroster_client_secret"`
	OnerosterAppName        string           `mapstructure:"oneroster_appname"`
	OnerosterBaseURL        string           `mapstructure:"oneroster_base_url"`
	XSRFToken               string           `mapstructure:"xsrf_token"`
	RedisHost               string           `mapstructure:"redis_host"`
	RedisPort               string           `mapstructure:"redis_port"`
	SourceID                string           `mapstructure:"source_id"`
	AzureStudentGroup       string           `mapstructure:"azure_student_group"`
	AzureTeacherGroup       string           `mapstructure:"azure_teacher_group"`
	AzureHelpdeskGroup      string           `mapstructure:"azure_helpdesk_group"`
	AzureOtherUsersGroup    string           `mapstructure:"azure_otherusers_group"`
	EmailAPI                string           `mapstructure:"email_api"`
	EmailAPIKey             string           `mapstructure:"email_api_key"`
	SemesterClassName       string           `mapstructure:"semester_class_name"`
	Secretaries             []string         `mapstructure:"secretaries"`
	PreferredNames          []PreferredNames `mapstructure:"preferred_names"`
	ExcludedTeachers        []string         `mapstructure:"excluded_teachers"`
	TechDepartmentEmails    []string         `mapstructure:"tech_department_emails"`
	NextauthSecret          string           `mapstructure:"nextauth_secret"`
	AuthUrl                 string           `mapstructure:"auth_url"`
	NextPublicPusherAppHost string           `mapstructure:"next_public_pusher_app_host"`
	NextPublicPusherAppPort string           `mapstructure:"next_public_pusher_app_port"`
	TurboToken              string           `mapstructure:"turbo_token"`
	NextPublicApiUrl        string           `mapstructure:"next_public_api_url"`
	NextPublicApiPort       string           `mapstructure:"next_public_api_port"`
}

type PreferredNames struct {
	GivenName     string `mapstructure:"givenName"`
	PreferredName string `mapstructure:"preferredName"`
}

var envPath = "./config.yaml"

func loadEnv(path string) (env *Env, err error) {
	viper.SetConfigFile(path)
	viper.AutomaticEnv()
	err = viper.ReadInConfig()
	if err != nil {
		fmt.Println("Error reading config file")
	}
	err = viper.Unmarshal(&env)
	return
}

func GetEnv(path string) *Env {
	cwd, err := os.Getwd()
	if err != nil {
		fmt.Errorf("Error getting current working directory")
	}
	configPath := filepath.Join(cwd, "config.yaml")
	if path != "" {
		envPath = path
	} else {
		envPath = configPath
	}
	env, err := loadEnv(envPath)
	if err != nil {
		fmt.Println("Error loading env")
	}
	return env
}

func WriteConfig(e *Env) error {
	v := reflect.ValueOf(*e)
	t := v.Type()

	for i := 0; i < v.NumField(); i++ {
		field := t.Field(i)
		mapstructureTag := field.Tag.Get("mapstructure")
		if mapstructureTag == "" {
			continue
		}
		value := v.Field(i).Interface()
		viper.Set(mapstructureTag, value)
	}
	cwd, err := os.Getwd()
	if err != nil {
		fmt.Errorf("Error getting current working directory")
	}
	configPath := filepath.Join(cwd, "config.yaml")
	err = viper.WriteConfigAs(configPath)
	if err != nil {
		return err
	}
	return nil
}

func WriteEnvFile(e *Env) error {
	viper.SetConfigType("env")
	cwd, err := os.Getwd()
	if err != nil {
		return err
	}
	configPath := filepath.Join(cwd, ".env")
	viper.SetConfigFile(configPath)

	// Set all keys in Viper
	v := reflect.ValueOf(*e)
	t := v.Type()

	for i := 0; i < v.NumField(); i++ {
		field := t.Field(i)
		mapstructureTag := field.Tag.Get("mapstructure")
		if mapstructureTag == "" {
			continue
		}

		value := v.Field(i).Interface()
		key := strings.ToUpper(mapstructureTag)
		viper.Set(key, value)
	}

	// Write the .env file
	err = viper.WriteConfig()
	if err != nil {
		fmt.Println("Error writing .env file:", err)
	}
	return nil
}
