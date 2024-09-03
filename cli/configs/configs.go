/* Parse the Typescript config file to get the server apps config constant values*/

package configs

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/joho/godotenv"
)

type PreferredNames struct {
	GivenName     string `json:"givenName"`
	PreferredName string `json:"preferredName"`
}

type FlexConfig struct {
	Secretaries       []string         `json:"secretaries"`
	PreferredNames    []PreferredNames `json:"preferredNames"`
	ExcludedTeachers  []string         `json:"excludedTeachers"`
	SemesterClassName string           `json:"semesterClassName"`
	IsRedisCluster    bool             `json:"isRedisCluster"`
	TechDepartment    []string         `json:"techDepartment"`
}

const (
	envFilePath          = ".env.config"
	secretariesKey       = "SECRETARIES"
	preferredNamesKey    = "PREFERRED_NAMES"
	excludedTeachersKey  = "EXCLUDED_TEACHERS"
	semesterClassNameKey = "SEMESTER_CLASS_NAME"
	isRedisClusterKey    = "IS_REDIS_CLUSTER"
	techDepartmentKey    = "TECH_DEPARTMENT_EMAILS"
)

func readEnvFile(filePath string) map[string]string {
	envMap, err := godotenv.Read(filePath)
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return envMap
}

func writeEnvFile(filePath string, envMap map[string]string) error {
	var lines []string
	for k, v := range envMap {
		lines = append(lines, fmt.Sprintf("%s=%s", k, v))
	}
	content := strings.Join(lines, "\n")
	err := os.WriteFile(filePath, []byte(content), 0644)
	if err != nil {
		return fmt.Errorf("error writing file: %v", err)
	}
	return nil
}

func envToFlexConfig(envMap map[string]string) *FlexConfig {
	var config FlexConfig

	if secretaries, ok := envMap[secretariesKey]; ok {
		if err := json.Unmarshal([]byte(secretaries), &config.Secretaries); err != nil {
			log.Fatalf("Error parsing %s: %v", secretariesKey, err)
		}
	}
	if techDepartment, ok := envMap[techDepartmentKey]; ok {
		if err := json.Unmarshal([]byte(techDepartment), &config.TechDepartment); err != nil {
			log.Fatalf("Error parsing %s: %v", techDepartmentKey, err)
		}
	}
	if preferredNames, ok := envMap[preferredNamesKey]; ok {
		if err := json.Unmarshal([]byte(preferredNames), &config.PreferredNames); err != nil {
			log.Fatalf("Error parsing %s: %v", preferredNamesKey, err)
		}
	}

	if excludedTeachers, ok := envMap[excludedTeachersKey]; ok {
		if err := json.Unmarshal([]byte(excludedTeachers), &config.ExcludedTeachers); err != nil {
			log.Fatalf("Error parsing %s: %v", excludedTeachersKey, err)
		}
	}

	if semesterClassName, ok := envMap[semesterClassNameKey]; ok {
		config.SemesterClassName = semesterClassName
	}

	if isRedisCluster, ok := envMap[isRedisClusterKey]; ok {
		config.IsRedisCluster = strings.ToLower(isRedisCluster) == "true"
	}

	return &config
}

func GetConfig() *FlexConfig {
	configPath, err := SetWorkingDirectory()
	if err != nil {
		log.Fatal(err)
	}
	return envToFlexConfig(readEnvFile(filepath.Join(configPath, envFilePath)))
}

// update the config based on passed in args
func WriteConfig(args *FlexConfig) error {
	configPath, err := SetWorkingDirectory()
	if err != nil {
		return fmt.Errorf("error setting working directory: %v", err)
	}
	configMap := readEnvFile(filepath.Join(configPath, envFilePath))
	config := envToFlexConfig(configMap)

	updateConfigFields(config, args)

	for k, v := range envMapFromFlexConfig(config) {
		configMap[k] = v
	}
	err = writeEnvFile(filepath.Join(configPath, envFilePath), configMap)
	if err != nil {
		return fmt.Errorf("error writing to env file: %v", err)
	}
	fmt.Println("Config updated successfully!")
	return nil
}

func SetWorkingDirectory() (string, error) {

	rootDir := os.Getenv("FLEXROOT")
	if rootDir == "" {
		return "", fmt.Errorf("FLEXROOT environment variable not set")
	}
	err := os.Chdir(rootDir)
	if err != nil {
		return "", fmt.Errorf("error changing directory: %v", err)
	}
	return rootDir, nil
}

func updateConfigFields(config, args *FlexConfig) {
	if len(args.Secretaries) > 0 {
		config.Secretaries = args.Secretaries
	}
	if len(args.TechDepartment) > 0 {
		config.TechDepartment = args.TechDepartment
	}
	if len(args.PreferredNames) > 0 {
		config.PreferredNames = args.PreferredNames
	}
	if len(args.ExcludedTeachers) > 0 {
		config.ExcludedTeachers = args.ExcludedTeachers
	}
	if args.SemesterClassName != "" {
		config.SemesterClassName = args.SemesterClassName
	}
	if args.IsRedisCluster {
		config.IsRedisCluster = args.IsRedisCluster
	}
}

func envMapFromFlexConfig(config *FlexConfig) map[string]string {
	envMap := make(map[string]string)

	if len(config.Secretaries) > 0 {
		secretaries, err := json.Marshal(config.Secretaries)
		if err != nil {
			log.Fatalf("Error marshalling secretaries: %v", err)
		}
		envMap[secretariesKey] = string(secretaries)
	}
	if len(config.TechDepartment) > 0 {
		techDepartment, err := json.Marshal(config.TechDepartment)
		if err != nil {
			log.Fatalf("Error marshalling techDepartment: %v", err)
		}
		envMap[techDepartmentKey] = string(techDepartment)
	}

	if len(config.PreferredNames) > 0 {
		preferredNames, err := json.Marshal(config.PreferredNames)
		if err != nil {
			log.Fatalf("Error marshalling preferredNames: %v", err)
		}
		envMap[preferredNamesKey] = string(preferredNames)
	}

	if len(config.ExcludedTeachers) > 0 {
		excludedTeachers, err := json.Marshal(config.ExcludedTeachers)
		if err != nil {
			log.Fatalf("Error marshalling excludedTeachers: %v", err)
		}
		envMap[excludedTeachersKey] = string(excludedTeachers)
	}

	if config.SemesterClassName != "" {
		envMap[semesterClassNameKey] = config.SemesterClassName
	}

	envMap[isRedisClusterKey] = fmt.Sprintf("%v", config.IsRedisCluster)

	return envMap
}
