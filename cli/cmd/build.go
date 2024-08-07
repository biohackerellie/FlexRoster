package cmd

import (
	"fmt"
	"os"

	"github.com/biohackerellie/FlexRoster/cli/cmd/ui/mainMenu"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(buildCmd)
}

var buildCmd = &cobra.Command{
	Use:   "build",
	Short: "Build flexroster for docker",
	Long:  "Builds the flexroster application for docker deployment. This is the preferred method for running flexroster.",

	Run: func(cmd *cobra.Command, args []string) {
		tprogram := tea.NewProgram(mainMenu.Builder())
		if _, err := tprogram.Run(); err != nil {
			fmt.Println("The script has terminated ", err)
			os.Exit(1)
		}
	},
}
