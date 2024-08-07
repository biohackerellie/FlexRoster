package mainMenu

import (
	"os/exec"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var helpStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("241")).Render

type BuilderModel struct {
	err error
}

func Builder() BuilderModel {
	return BuilderModel{}
}

func (m BuilderModel) Init() tea.Cmd {
	return runScript("./scripts/test.sh")
}

func (m BuilderModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "a":
			return m, runScript("./scripts/test.sh")
		case "ctrl+c", "q":
			mainScreen := MainMenuModel()
			return RootScreen().SwitchScreen(&mainScreen)
		}
	case editorFinishedMsg:
		if msg.err != nil {
			m.err = msg.err
			return m, tea.Quit
		}
	}
	return m, nil
}

func (m BuilderModel) View() string {
	if m.err != nil {
		return "Error: " + m.err.Error() + "\n"
	}
	return helpStyle("Press q to go back") + "\n"
}

type editorFinishedMsg struct{ err error }

func runScript(filePath string) tea.Cmd {
	cmd := exec.Command(filePath)

	return tea.ExecProcess(cmd, func(err error) tea.Msg {
		return editorFinishedMsg{err}
	})
}
