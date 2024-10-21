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
	EmailService            bool             `mapstructure:"email_service"`
	EmailAPI                string           `mapstructure:"email_api"`
	EmailAPIKey             string           `mapstructure:"email_api_key"`
	EmailSMTPHost           string           `mapstructure:"email_smtp_host"`
	EmailUser               string           `mapstructure:"email_user"`
	EmailPassword           string           `mapstructure:"email_password"`
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
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.SetConfigFile(path)

	viper.AutomaticEnv()
	err = viper.ReadInConfig()
	if err != nil {
		fmt.Println("Error reading config file")
		return nil, err
	}
	err = viper.Unmarshal(&env)
	if err != nil {
		fmt.Println("Error unmarshalling config file")
		return nil, err
	}
	return env, nil
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

func LoadConfig(path string) (*Env, error) {
	home, err := os.UserHomeDir()
	if err != nil {
		home = "."
	}
	brewPath := filepath.Join(os.Getenv("HOMEBREW_PREFIX"), "etc", "flexroster", "config.yaml")
	paths := []string{
		path,
		brewPath,
		filepath.Join(".", "config.yaml"),
		filepath.Join(home, ".config", "flexroster", "config.yaml"),
		"/etc/flexroster/config.yaml",
		"/apps/flexroster/config.yaml",
	}
	for _, p := range paths {
		if p != "" && fileExists(p) {
			return loadEnv(p)
		}
	}
	return nil, fmt.Errorf("configuration file not found")
}

func fileExists(path string) bool {
	_, err := os.Stat(path)
	if err == nil {
		return true
	}
	if os.IsNotExist(err) {
		return false
	}
	return false
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

func GenerateSampleConfig() error {
	sampleConfig := `azure_ad_client_id: 00000000-0000-0000-0000-000000000000
azure_ad_client_secret: your-azure-ad-client-secret
azure_ad_tenant_id: 00000000-0000-0000-0000-000000000000
azure_helpdesk_group: 00000000-0000-0000-0000-000000000000
azure_otherusers_group: 00000000-0000-0000-0000-000000000000
azure_student_group: 00000000-0000-0000-0000-000000000000
azure_teacher_group: 00000000-0000-0000-0000-000000000000
pgport: "5432"
pguser: postgres
pgpassword: postgres
pgdatabase: postgres
pghost: localhost
email_api: https://api.example.com/email
email_api_key: your-email-api-key
oneroster_appname: example_appname
oneroster_base_url: https://example.com/api/oneroster/v1p2/ims/oneroster
oneroster_client_id: your-oneroster-client-id
oneroster_client_secret: your-oneroster-client-secret
redis_host: sample.redis.host
redis_port: "6379"
semester_class_name: Sample-Semester
server_host: http://sample.server.host
server_port: "3030"
source_id: 00000000-0000-0000-0000-000000000000
tech_department_emails:
  - example_email@example.com
xsrf_token: your-xsrf-token
excluded_teachers:
  - Teacher One
  - Teacher Two
preferred_names:
  - givenname: Firstname Lastname
    preferredname: Preferred Name
  - givenname: Another Name
    preferredname: Preferred Name
secretaries:
  - secretary1@example.com
  - secretary2@example.com
  - secretary3@example.com
`
	cwd, err := os.Getwd()
	if err != nil {
		return err
	}
	configPath := filepath.Join(cwd, "config.yaml")
	return os.WriteFile(configPath, []byte(sampleConfig), 0o644)
}
