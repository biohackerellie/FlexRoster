package mainMenu

import (
	"fmt"

	configs "api/internal/config"

	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var (
	subTitleStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("201")).BorderBottom(true).Bold(true)
)

type (
	errMsg error
)

type Output struct {
	Output string
}

type semesterModel struct {
	textInput     textinput.Model
	err           error
	header        string
	semesterTitle string
	mainMenu      MenuModel
}

func SemesterClassName() semesterModel {

	semesterTitle := Config.SemesterClassName
	ti := textinput.New()
	ti.Focus()
	ti.CharLimit = 156
	ti.Width = 20

	return semesterModel{
		textInput:     ti,
		err:           nil,
		header:        titleStyle.Render("Semester Class Name"),
		semesterTitle: semesterTitle,
		mainMenu:      MainMenuModel(Config),
	}
}

func (m *semesterModel) Init() tea.Cmd {
	return textinput.Blink
}

func (m *semesterModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd

	switch msg := msg.(type) {
	case redrawMsg:
		return m, tea.ClearScreen
	case tea.KeyMsg:
		switch msg.Type {
		case tea.KeyEnter:

			if len(m.textInput.Value()) > 1 {
				err := m.New()
				if err != nil {
					panic(err)
				}
				m.textInput.SetValue("")

				return m, func() tea.Msg { return redrawMsg{} }
			}
		case tea.KeyEscape:
			mainMenu := MainMenuModel(Config)
			return RootScreen(Config).SwitchScreen(&mainMenu)
		case tea.KeyCtrlC:
			return m, tea.Quit
		}
	case errMsg:
		m.err = msg
		return m, nil
	}
	newTextInput, cmd := m.textInput.Update(msg)
	m.textInput = newTextInput
	cmds = append(cmds, cmd)
	return m, tea.Batch(cmds...)
}

func (m *semesterModel) View() string {
	s := fmt.Sprintf(
		m.header,
	)
	s += "\n\n"
	t := fmt.Sprintf(
		m.semesterTitle,
	)
	s += subTitleStyle.Render(t)
	s += "\n\n"
	s += m.textInput.View()
	return s + "\n" + subtleStyle.Render("esc: back") + dotStyle + " " + subtleStyle.Render("enter: save") + dotStyle + " " + subtleStyle.Render("ctrl+c: quit")
}

func (m *semesterModel) New() error {
	Config.SemesterClassName = m.textInput.Value()
	m.semesterTitle = Config.SemesterClassName
	err := configs.WriteConfig(Config)
	if err != nil {
		return err
	}
	return nil
}
