package mainMenu

import (
	"fmt"

	"api/configs"

	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

const (
	gn = iota
	pn
)

const (
	hotPink  = lipgloss.Color("#FF06B7")
	darkGray = lipgloss.Color("#767676")
)

var inputStyle = lipgloss.NewStyle().Foreground(hotPink)

type AddNamesForm struct {
	inputs  []textinput.Model
	focused int
	config  *configs.FlexConfig
}

func AddNamesModel() AddNamesForm {
	var inputs []textinput.Model = make([]textinput.Model, 2)
	inputs[gn] = textinput.New()
	inputs[gn].Placeholder = "Milly Bobbie Brown"
	inputs[gn].Focus()
	inputs[gn].Width = 30
	inputs[gn].Prompt = ""

	inputs[pn] = textinput.New()
	inputs[pn].Placeholder = "Milly Bonilly"
	inputs[pn].Width = 30
	inputs[pn].Prompt = ""

	config := configs.GetConfig()
	return AddNamesForm{
		inputs:  inputs,
		focused: 0,
		config:  config,
	}
}

func (m AddNamesForm) Init() tea.Cmd {
	return nil
}

func (m *AddNamesForm) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd = make([]tea.Cmd, len(m.inputs))
	namesMenu := PreferredNamesTable()
	switch msg := msg.(type) {

	case redrawMsg:
		return m, tea.ClearScreen

	case tea.KeyMsg:
		switch msg.String() {
		case "q":
			return RootScreen().SwitchScreen(&namesMenu)
		}
		switch msg.Type {
		case tea.KeyEnter:
			if m.focused == len(m.inputs)-1 {
				m.Submit(m.inputs[pn].Value(), m.inputs[gn].Value())
				m.inputs[pn].SetValue("")
				m.inputs[gn].SetValue("")
				return m, func() tea.Msg { return redrawMsg{} }
			}
			m.nextInput()
		case tea.KeyCtrlC, tea.KeyEsc:
			return m, tea.Quit

		case tea.KeyShiftTab, tea.KeyCtrlP:
			m.prevInput()
		case tea.KeyTab, tea.KeyCtrlN:
			m.nextInput()
		}
		for i := range m.inputs {
			m.inputs[i].Blur()
		}
		m.inputs[m.focused].Focus()
	}
	for i := range m.inputs {
		m.inputs[i], cmds[i] = m.inputs[i].Update(msg)
	}
	return m, tea.Batch(cmds...)
}

func (m *AddNamesForm) View() string {
	return fmt.Sprintf(
		` 

 %s
 %s

 %s  
 %s  

`,
		inputStyle.Width(30).Render("Given Name"),
		m.inputs[gn].View(),
		inputStyle.Width(30).Render("Preferred Name"),
		m.inputs[pn].View(),
	) + "\n" + subtleStyle.Render("tab: next field") + dotStyle + " " + subtleStyle.Render("enter: submit") + dotStyle + " " + subtleStyle.Render("q: back")
}

// nextInput focuses the next input field
func (m *AddNamesForm) nextInput() {
	m.focused = (m.focused + 1) % len(m.inputs)
}

// prevInput focuses the previous input field
func (m *AddNamesForm) prevInput() {
	m.focused--
	// Wrap around
	if m.focused < 0 {
		m.focused = len(m.inputs) - 1
	}
}

func (m *AddNamesForm) Submit(pn, gn string) tea.Cmd {
	errChan := make(chan error)
	if pn == "" || gn == "" {
		return func() tea.Msg {
			return tea.Msg("Both fields must be filled in")
		}
	}
	go func() {
		m.config.PreferredNames = append(m.config.PreferredNames, configs.PreferredNames{GivenName: gn, PreferredName: pn})
		errChan <- configs.WriteConfig(m.config)
		close(errChan)
	}()

	return func() tea.Msg {
		if err := <-errChan; err != nil {
			return tea.Msg(fmt.Sprintf("Error writing config: %v", err))
		}
		return nil
	}
}
