package build

import (
	"os/exec"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var (
	helpStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("241")).Render
	mainStyle = lipgloss.NewStyle().MarginLeft(1)
)

type model struct {
	err error
}

func Builder() model {

	return model{}
}

func (m model) Init() tea.Cmd {
	return runScript("./scripts/test.sh")
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "a":
			return m, runScript("./scripts/test.sh")
		case "ctrl+c", "q":
			return m, tea.Quit
		}
	case editorFinishedMsg:
		if msg.err != nil {
			m.err = msg.err
			return m, tea.Quit
		}
	}
	return m, nil
}

func (m model) View() string {
	if m.err != nil {
		return "Error: " + m.err.Error() + "\n"
	}
	return helpStyle("Press 'a' to run the script\n")
}

type editorFinishedMsg struct{ err error }

func runScript(filePath string) tea.Cmd {
	cmd := exec.Command(filePath)

	return tea.ExecProcess(cmd, func(err error) tea.Msg {
		return editorFinishedMsg{err}
	})
}

// type customOutput struct{}

// func (c customOutput) Write(p []byte) (int, error) {
// 	fmt.Println(randomEmoji(), string(p))
// 	return len(p), nil
// }

// func randomEmoji() string {
// 	emojis := []rune("🍦🧋🍡🤠👾😭🦊🐯🦆🥨🎏🍔🍒🍥🎮📦🦁🐶🐸🍕🥐🧲🚒🥇🏆🌽")
// 	return string(emojis[rand.Intn(len(emojis))]) // nolint:gosec
// }
