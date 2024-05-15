package cmd

import (
	"github.com/biohackerellie/FlexRoster/cli/cmd/ui/currentConfig"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(showCmd)
}

var showCmd = &cobra.Command{
	Use:     "show",
	Short:   "Show the current configuration",
	Long:    "Show the current configuration of flexroster",
	Aliases: []string{"sh"},
	Run: func(cmd *cobra.Command, args []string) {
		model, err := currentConfig.ViewConfiguration()
		if err != nil {
			cobra.CheckErr(err)

		}
		p := tea.NewProgram(model)
		if _, err := p.Run(); err != nil {
			cobra.CheckErr(err)
		}
	},
}
