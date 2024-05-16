package mainMenu

import (
	"fmt"

	"github.com/biohackerellie/FlexRoster/cli/configs"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

const dotChar = "•"

var (
	keywordStyle  = lipgloss.NewStyle().Foreground(lipgloss.Color("211"))
	subtleStyle   = lipgloss.NewStyle().Foreground(lipgloss.Color("241"))
	ticksStyle    = lipgloss.NewStyle().Foreground(lipgloss.Color("79"))
	checkboxStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("212"))
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
	Config   *configs.FlexConfig
}

func (m MenuModel) Init() tea.Cmd {
	return nil
}

func MainMenuModel() MenuModel {
	config = configs.GetConfig()
	return MenuModel{
		Choice:   0,
		Chosen:   false,
		Quitting: false,
		Config:   config,
	}
}

func (m *MenuModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	if msg, ok := msg.(tea.KeyMsg); ok {
		k := msg.String()
		if k == "q" || k == "esc" || k == "ctrl+c" {
			m.Quitting = true
			return m, tea.Quit
		}
	}
	if !m.Chosen {
		return updateChoices(msg, m)
	}

	return updateChosen(msg, m)

}

func (m MenuModel) View() string {
	var s string
	if m.Quitting {
		return "Quitting..."
	}

	s = choicesView(m)

	return mainStyle.Render("\n" + s + "\n\n")
}

func updateChoices(msg tea.Msg, m *MenuModel) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
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
			m.Chosen = true
			return m, nil
		}

	}

	return m, nil
}

func updateChosen(msg tea.Msg, m *MenuModel) (tea.Model, tea.Cmd) {
	switch m.Choice {
	case 0:
		secretaries_screen := InitialSecModel()
		return RootScreen().SwitchScreen(&secretaries_screen)
	case 1:
		return m, nil
	case 2:
		return m, nil
	case 3:
		return m, nil
	}
	return m, nil
}

func choicesView(m MenuModel) string {
	c := m.Choice

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
	return fmt.Sprintf(tpl, choices)
}

func checkbox(label string, checked bool) string {
	if checked {
		return checkboxStyle.Render("[x] " + label)
	}
	return fmt.Sprintf("[ ] %s", label)
}
