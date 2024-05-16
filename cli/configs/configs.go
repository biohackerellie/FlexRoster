/* Parse the Typescript config file to get the server apps config constant values*/

package configs

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"
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
	content := fmt.Sprintf(`export const secretaries = %s;
export const preferredNames = %s;
export const excludedTeachers = %s;
export const semesterClassName = "%s";
export const isRedisCluster: boolean = %v;
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

func GetConfig() *FlexConfig {
	return readJSONFile("config.json")

}

// update the config based on passed in args
func WriteConfig(args *FlexConfig) {
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
	writeJSONFile("config.json", config)
	updateTypeScriptFile(config, "config.ts")
	fmt.Println("Config updated successfully!")
}
