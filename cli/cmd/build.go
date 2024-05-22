package cmd

import (
	"github.com/biohackerellie/FlexRoster/cli/cmd/ui/build"
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

		tprogram := tea.NewProgram(build.Builder(), tea.WithAltScreen())
		if _, err := tprogram.Run(); err != nil {
			cobra.CheckErr(err)
		}

	},
}
