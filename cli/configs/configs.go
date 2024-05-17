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
}

// same as FlexConfig but with the env variables instead of json
type FlexConfigEnv struct {
	Secretaries       []string         `env:"SECRETARIES"`
	PreferredNames    []PreferredNames `env:"PREFERRED_NAMES"`
	ExcludedTeachers  []string         `env:"EXCLUDED_TEACHERS"`
	SemesterClassName string           `env:"SEMESTER_CLASS_NAME"`
	IsRedisCluster    bool             `env:"IS_REDIS_CLUSTER"`
}

func readEnvFile(filePath string) map[string]string {
	envMap, err := godotenv.Read(filePath)
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return envMap
}

// var currentPath, _ = os.Getwd()
// fmt.Println(currentPath)
func readJSONFile(filePath string) *FlexConfig {
	var config FlexConfig
	content, err := os.ReadFile(filePath)
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(content, &config)
	if err != nil {
		log.Fatal(err)
	}
	return &config
}

func writeJSONFile(filePath string, config *FlexConfig) {
	content, err := json.MarshalIndent(config, "", "	")
	if err != nil {
		log.Fatal(err)
	}
	err = os.WriteFile(filePath, content, 0644)
	if err != nil {
		log.Fatal(err)
	}

}

func updateTypeScriptFile(config *FlexConfig, filePath string) {
	content := fmt.Sprintf(`export const secretaries = %s
export const preferredNames = %s
export const excludedTeachers = %s
export const semesterClassName = "%s"
export const isRedisCluster: boolean = %v
`,
		toJSONArray(config.Secretaries),
		toPreferredNamesJSONArray(config.PreferredNames),
		toJSONArray(config.ExcludedTeachers),
		config.SemesterClassName,
		config.IsRedisCluster)

	err := os.WriteFile(filePath, []byte(content), 0644)
	if err != nil {
		log.Fatal(err)
	}
}

func toJSONArray(data []string) string {
	result := make([]string, len(data))
	for i, v := range data {
		result[i] = fmt.Sprintf(`"%s"`, v)
	}
	return fmt.Sprintf("[%s]", strings.Join(result, ", "))
}

func toPreferredNamesJSONArray(data []PreferredNames) string {
	result := make([]string, len(data))
	for i, v := range data {
		result[i] = fmt.Sprintf(`{ givenName: "%s", preferredName: "%s" }`, v.GivenName, v.PreferredName)
	}
	return fmt.Sprintf("[%s]", strings.Join(result, ", "))
}

func envToFlexConfig(envMap map[string]string) *FlexConfig {
	var config FlexConfig

	if secretaries, ok := envMap["SECRETARIES"]; ok {
		if err := json.Unmarshal([]byte(secretaries), &config.Secretaries); err != nil {
			log.Fatalf("Error parsing REACT_APP_SECRETARIES: %v", err)
		}
	}

	if preferredNames, ok := envMap["PREFERRED_NAMES"]; ok {
		if err := json.Unmarshal([]byte(preferredNames), &config.PreferredNames); err != nil {
			log.Fatalf("Error parsing REACT_APP_PREFERRED_NAMES: %v", err)
		}
	}

	if excludedTeachers, ok := envMap["EXCLUDED_TEACHERS"]; ok {
		if err := json.Unmarshal([]byte(excludedTeachers), &config.ExcludedTeachers); err != nil {
			log.Fatalf("Error parsing REACT_APP_EXCLUDED_TEACHERS: %v", err)
		}
	}

	if semesterClassName, ok := envMap["SEMESTER_CLASS_NAME"]; ok {
		config.SemesterClassName = semesterClassName
	}

	if isRedisCluster, ok := envMap["IS_REDIS_CLUSTER"]; ok {
		config.IsRedisCluster = strings.ToLower(isRedisCluster) == "true"
	}

	return &config
}

func GetConfig() *FlexConfig {
	configPath, err := setWorkingDirectory()
	if err != nil {
		log.Fatal(err)
	}
	return envToFlexConfig(readEnvFile(filepath.Join(configPath, ".env.config")))
	// return readJSONFile(filepath.Join(configPath, "config.json"))

}

// update the config based on passed in args
func WriteConfig(args *FlexConfig) {
	configPath, err := setWorkingDirectory()
	if err != nil {
		log.Fatal(err)
	}
	config := GetConfig()

	if len(args.Secretaries) > 0 {
		config.Secretaries = args.Secretaries
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

	writeJSONFile(filepath.Join(configPath, "config.json"), config)
	updateTypeScriptFile(config, filepath.Join(configPath, "config.ts"))
	fmt.Println("Config updated successfully!")
}

func setWorkingDirectory() (string, error) {
	exe, err := os.Executable()
	if err != nil {
		return "", err
	}
	rootDir := filepath.Dir(filepath.Dir(exe))
	err = os.Chdir(rootDir)
	if err != nil {
		return "", err
	}
	return rootDir, nil
}
