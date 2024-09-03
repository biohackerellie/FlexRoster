package currentConfig

import (
	"fmt"

	"github.com/biohackerellie/FlexRoster/cli/configs"
	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/glamour"
	"github.com/charmbracelet/lipgloss"
)

// get the current configuration of the server app
var CurrentConfig = configs.GetConfig()

const ConfigDisplayStringTemplate = `
# Current Configuration 

## Secretaries

%v			

## Preferred Names

%v

## Excluded Teachers: 

%v

## Semester Class Name: 
%v

## Tech Department

%v


`

var helpStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("241")).Render

type configView struct {
	viewport viewport.Model
}

func formatPreferredNames(preferredNames []configs.PreferredNames) string {
	var result string
	for _, pn := range preferredNames {
		result += fmt.Sprintf("|Given Name: %s, Preferred Name: %s |\n", pn.GivenName, pn.PreferredName)
	}
	return result
}

// format comma separated string array to a string

func ViewConfiguration() (*configView, error) {
	const width = 78

	vp := viewport.New(width, 20)
	vp.Style = lipgloss.NewStyle().
		BorderStyle(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("#53DDF6")).
		PaddingRight(2)

	secretaries := fmt.Sprintf("%v", CurrentConfig.Secretaries)
	preferredNames := formatPreferredNames(CurrentConfig.PreferredNames)
	excludedTeachers := fmt.Sprintf("%v", CurrentConfig.ExcludedTeachers)
	semesterClassName := CurrentConfig.SemesterClassName
	techDepartment := fmt.Sprintf("%v", CurrentConfig.TechDepartment)
	configDisplayString := fmt.Sprintf(
		ConfigDisplayStringTemplate,
		secretaries,
		preferredNames,
		excludedTeachers,
		semesterClassName,
		techDepartment
	)
	renderer, err := glamour.NewTermRenderer(
		glamour.WithAutoStyle(),
		glamour.WithWordWrap(width),
		glamour.WithPreservedNewLines(),
	)
	if err != nil {
		return nil, err
	}
	str, err := renderer.Render(configDisplayString)
	if err != nil {
		return nil, err
	}
	vp.SetContent(str)

	return &configView{
		viewport: vp,
	}, nil
}

func (e configView) Init() tea.Cmd {
	return nil
}

func (e configView) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "q", "ctrl+c", "esc":
			return e, tea.Quit
		default:
			var cmd tea.Cmd
			e.viewport, cmd = e.viewport.Update(msg)
			return e, cmd
		}
	default:
		return e, nil
	}
}

func (e configView) View() string {
	return e.viewport.View() + e.helpView()
}

func (e configView) helpView() string {
	return helpStyle("\n ↑/↓: Navigate • q: Quit\n")
}
