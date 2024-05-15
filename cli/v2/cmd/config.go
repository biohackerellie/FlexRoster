package cmd

import (
	"github.com/biohackerellie/FlexRoster/cli/v2/cmd/ui/multiInput"
	"github.com/biohackerellie/FlexRoster/cli/v2/cmd/ui/textInput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/spf13/cobra"
)

var (
	logoStyle      = lipgloss.NewStyle().Foreground(lipgloss.Color("#53DDF6")).Bold(true)
	timMsgStyle    = lipgloss.NewStyle().PaddingLeft(1).Foreground(lipgloss.Color("190")).Italic(true)
	endingMsgStyle = lipgloss.NewStyle().PaddingLeft(1).Foreground(lipgloss.Color("170")).Bold(true)
)

func init() {
	rootCmd.AddCommand(configCmd)
}

type listOptions struct {
	options []string
}

type Options struct {
	MenuOptions *multiInput.Selection
	ProjectName *textInput.Output
}

var configCmd = &cobra.Command{
	Use:   "config",
	Short: "Edit flexroster configuration",
	Long:  "Edit various configuration options for flexroster such as user exclusions, semester name, and more",

	Run: func(cmd *cobra.Command, args []string) {
		options := Options{
			MenuOptions: &multiInput.Selection{},
			ProjectName: &textInput.Output{},
		}

		listOfStuff := listOptions{
			options: []string{
				"",
				"Option 2",
				"Option 3",
			},
		}

		tprogram := tea.NewProgram(multiInput.InitialModelMulti(listOfStuff.options, options.MenuOptions, "What is your project Type"))
		if _, err := tprogram.Run(); err != nil {
			cobra.CheckErr(err)
		}

		tprogram = tea.NewProgram(textInput.InitialTextInputModel(options.ProjectName, "What is your project Name"))
		if _, err := tprogram.Run(); err != nil {
			cobra.CheckErr(err)
		}

	},
}
