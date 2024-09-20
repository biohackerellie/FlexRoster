package cli

import (
	"api/internal/config"
	"fmt"

	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(initCmd)
}

var initCmd = &cobra.Command{
	Use:   "init",
	Short: "Initialize FlexRoster configuration",
	Long:  "Initialize FlexRoster configuration file with default values",
	Run: func(cmd *cobra.Command, args []string) {
		err := config.GenerateSampleConfig()
		if err != nil {
			cobra.CheckErr(err)
		}
		fmt.Println("Sample config generated successfully. \n Enter your values in the config file and run flex config with the -cfg flag and the path to the config file or place the config file in $HOME/.config/flexroster/config.yaml")
	},
}
