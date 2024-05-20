package mainMenu

import (
	"fmt"

	"github.com/biohackerellie/FlexRoster/cli/configs"
	"github.com/charmbracelet/bubbles/spinner"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

const dotChar = "•"

var (
	subtleStyle   = lipgloss.NewStyle().Foreground(lipgloss.Color("241"))
	checkboxStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("39")).Bold(true)
	dotStyle      = lipgloss.NewStyle().Foreground(lipgloss.Color("236")).Render(dotChar)

	mainStyle = lipgloss.NewStyle().MarginLeft(2)
	config    *configs.FlexConfig
)

type MenuModel struct {
	Choice   int
	Chosen   bool
	Quitting bool
	Frames   int
	Progress float64
	Loaded   bool
	spinner  spinner.Model
	Config   *configs.FlexConfig
}

func (m MenuModel) Init() tea.Cmd {
	return tea.Batch(m.spinner.Tick, tea.SetWindowTitle("Be Gay, Do Crime 🏳️‍🌈🏴‍☠️"))
}

func MainMenuModel() MenuModel {
	config = configs.GetConfig()
	s := spinner.New()
	s.Spinner = spinner.Dot
	s.Style = lipgloss.NewStyle().Foreground(lipgloss.Color("205"))
	return MenuModel{
		Choice:   0,
		Chosen:   false,
		Quitting: false,
		Config:   config,
		spinner:  s,
	}
}

func (m *MenuModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {

	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "q", "esc", "ctrl+c":
			m.Quitting = true
			return m, tea.Quit
		case "j", "down":
			m.Choice++
			if m.Choice > 3 {
				m.Choice = 0
			}
		case "k", "up":
			m.Choice--
			if m.Choice < 0 {
				m.Choice = 3
			}
		case "enter":
			switch m.Choice {
			case 0:
				secretariesScreen := InitialSecModel()
				return RootScreen().SwitchScreen(&secretariesScreen)
			case 1:
				namesScreen := PreferredNamesTable()
				return RootScreen().SwitchScreen(&namesScreen)
			case 2:
				return m, nil
			case 3:
				return m, nil
			}
		}
	}
	return m, nil
}

func (m MenuModel) View() string {
	var s string
	c := m.Choice
	if m.Quitting {
		return "Quitting..."
	}
	tpl := "Edit Configuration\n\n"
	tpl += "%s\n\n"
	tpl += subtleStyle.Render("j/k, up/down: select") + dotStyle +
		subtleStyle.Render("enter: choose") + dotStyle +
		subtleStyle.Render("q: quit")

	choices := fmt.Sprintf(
		"%s\n%s\n%s\n%s",
		checkbox("Secretaries", c == 0),
		checkbox("Preferred Names", c == 1),
		checkbox("Excluded Teachers", c == 2),
		checkbox("Semester Class Name", c == 3),
	)
	s = fmt.Sprintf(tpl, choices)

	return mainStyle.Render("\n" + s + "\n\n")
}

func checkbox(label string, checked bool) string {
	if checked {
		return checkboxStyle.Render("(•) " + label)
	}
	return fmt.Sprintf("( ) %s", label)
}
