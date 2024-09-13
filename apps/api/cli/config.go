package cli

import (
	"api/cli/ui/mainMenu"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/spf13/cobra"
)

func init() {
	rootCmd.AddCommand(configCmd)
}

var configCmd = &cobra.Command{
	Use:   "config",
	Short: "Edit flexroster configuration" + "\n" + mainMenu.Logo + "\n",
	Long:  "Edit various configuration options for flexroster such as user exclusions, semester name, and more",

	Run: func(cmd *cobra.Command, args []string) {

		tprogram := tea.NewProgram(mainMenu.RootScreen(), tea.WithAltScreen())
		if _, err := tprogram.Run(); err != nil {
			cobra.CheckErr(err)
		}

	},
}
