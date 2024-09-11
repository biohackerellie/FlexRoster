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
	WorkingDir            string           `mapstructure:"working_dir"`
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
