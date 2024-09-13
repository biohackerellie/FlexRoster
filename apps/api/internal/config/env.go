package config

import (
	"fmt"

	"github.com/spf13/viper"
)

type Env struct {
	ClientHost          string `mapstructure:"client_host"`
	AzureADClientID     string `mapstructure:"azure_ad_client_id"`
	AzureADClientSecret string `mapstructure:"azure_ad_client_secret"`
	AzureADTenantID     string `mapstructure:"azure_ad_tenant_id"`

	ServerPort            string           `mapstructure:"server_port"`
	ServerHost            string           `mapstructure:"server_host"`
	OnerosterClientID     string           `mapstructure:"oneroster_client_id"`
	OnerosterClientSecret string           `mapstructure:"oneroster_client_secret"`
	OnerosterAppName      string           `mapstructure:"oneroster_appname"`
	OnerosterBaseURL      string           `mapstructure:"oneroster_base_url"`
	DSN                   string           `mapstructure:"dsn"`
	XSRFToken             string           `mapstructure:"xsrf_token"`
	RedisHost             string           `mapstructure:"redis_host"`
	RedisPort             string           `mapstructure:"redis_port"`
	SourceID              string           `mapstructure:"source_id"`
	AzureStudentGroup     string           `mapstructure:"azure_student_group"`
	AzureTeacherGroup     string           `mapstructure:"azure_teacher_group"`
	AzureHelpdeskGroup    string           `mapstructure:"azure_helpdesk_group"`
	AzureOtherUsersGroup  string           `mapstructure:"azure_otherusers_group"`
	EmailAPI              string           `mapstructure:"email_api"`
	EmailAPIKey           string           `mapstructure:"email_api_key"`
	SemesterClassName     string           `mapstructure:"semester_class_name"`
	Secretaries           []string         `mapstructure:"secretaries"`
	PreferredNames        []PreferredNames `mapstructure:"preferred_names"`
	ExcludedTeachers      []string         `mapstructure:"excluded_teachers"`
	TechDepartmentEmails  []string         `mapstructure:"tech_department_emails"`
}

type PreferredNames struct {
	GivenName     string `mapstructure:"givenName"`
	PreferredName string `mapstructure:"preferredName"`
}

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

	env, err := loadEnv(path)
	if err != nil {
		fmt.Println("Error loading env")
	}
	return env
}
