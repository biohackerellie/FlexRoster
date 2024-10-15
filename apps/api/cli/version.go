package cli

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(versionCmd)
}

var version = getVersion()

var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Print the version of the flexroster CLI",
	Long:  "Print the version of the flexroster CLI",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("FlexRoster CLI version: " + version)
	},
}

type GitResponse struct {
	Name       string `json:"name"`
	ZipballURL string `json:"zipball_url"`
	TarballURL string `json:"tarball_url"`
	Commit     struct {
		Sha string `json:"sha"`
		URL string `json:"url"`
	} `json:"commit"`
	NodeID string `json:"node_id"`
}

func getVersion() string {
	resp, err := http.Get("https://api.github.com/repos/biohackerellie/FlexRoster/tags")
	if err != nil {
		return "unknown"
	}
	defer resp.Body.Close()
	var data []GitResponse
	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return "unknown"
	}
	return data[0].Name
}
