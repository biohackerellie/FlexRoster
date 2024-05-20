package mainMenu

import (
	"github.com/biohackerellie/FlexRoster/cli/configs"
	"github.com/charmbracelet/bubbles/table"
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

var tableBaseStyle = lipgloss.NewStyle().
	BorderStyle(lipgloss.NormalBorder()).
	BorderForeground(lipgloss.Color("240"))

type NamesTable struct {
	table       table.Model
	config      *configs.FlexConfig
	inputs      []textinput.Model
	textFocused bool
	focused     int
}

func (m NamesTable) Init() tea.Cmd {
	return nil
}

func PreferredNamesTable() NamesTable {
	var inputs []textinput.Model = make([]textinput.Model, 2)
	inputs[gn] = textinput.New()
	inputs[gn].Placeholder = "Milly Bobbie Brown"
	inputs[gn].Blur()
	inputs[gn].Width = 30
	inputs[gn].Prompt = ""

	inputs[pn] = textinput.New()
	inputs[pn].Placeholder = "Milly Bonilly"
	inputs[pn].Blur()
	inputs[pn].Width = 30
	inputs[pn].Prompt = ""

	config := configs.GetConfig()
	names := config.PreferredNames
	columns := []table.Column{
		{Title: "Given Name", Width: 20},
		{Title: "Preferred Name", Width: 20},
	}

	var rows []table.Row
	for _, name := range names {
		rows = append(rows, table.Row{name.GivenName, name.PreferredName})
	}

	t := table.New(
		table.WithColumns(columns),
		table.WithRows(rows),
		table.WithFocused(true),
		table.WithHeight(10),
	)

	s := table.DefaultStyles()

	s.Header = s.Header.
		BorderStyle(lipgloss.DoubleBorder()).
		BorderForeground(lipgloss.Color("240")).
		BorderBottom(true).
		Bold(true)

	s.Selected = s.Selected.
		Foreground(lipgloss.Color("229")).
		Background(lipgloss.Color("57")).
		Bold(false)
	t.SetStyles(s)

	return NamesTable{
		inputs:      inputs,
		table:       t,
		config:      config,
		textFocused: false,
		focused:     0,
	}
}

func (m *NamesTable) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd
	switch msg := msg.(type) {
	case redrawMsg:
		return m, tea.ClearScreen

	case tea.KeyMsg:
		if m.textFocused {
			switch msg.Type {
			case tea.KeyEnter:
				if m.focused == len(m.inputs)-1 {
					m.New(m.inputs[gn].Value(), m.inputs[pn].Value())
					return m, func() tea.Msg { return redrawMsg{} }
				}
				m.nextInput()
			case tea.KeyEscape:
				m.textFocused = false
				for i := range m.inputs {
					m.inputs[i].Blur()
				}
			case tea.KeyTab:
				m.nextInput()
			}
			for i := range m.inputs {
				m.inputs[i].Blur()
			}
			m.inputs[m.focused].Focus()
			return m, nil
		} else {
			switch msg.String() {
			case "ctrl+c":
				return m, tea.Quit
			case "x":
				i := m.table.SelectedRow()
				m.Delete(i)
				return m, func() tea.Msg { return redrawMsg{} }

			case "i":
				m.table.Blur()
				m.textFocused = true
				m.inputs[gn].Focus()
				return m, nil
			case "q", "esc":
				homeScreen := MainMenuModel()
				return RootScreen().SwitchScreen(&homeScreen)
			}
		}
	}
	if m.textFocused {
		newInputsModel, cmd := m.inputs[m.focused].Update(msg)
		m.inputs[m.focused] = newInputsModel
		cmds = append(cmds, cmd)
	} else {
		newTableModel, cmd := m.table.Update(msg)
		m.table = newTableModel
		cmds = append(cmds, cmd)
	}
	return m, tea.Batch(cmds...)
}

func (m NamesTable) View() string {
	return tableBaseStyle.Render(m.table.View()) + "\n" + subtleStyle.Render("esc: back") + dotStyle + " " + subtleStyle.Render("q: quit")
}

func (m *NamesTable) Delete(r table.Row) tea.Cmd {
	for i, name := range m.config.PreferredNames {
		if name.GivenName == r[0] && name.PreferredName == r[1] {
			m.config.PreferredNames = append(m.config.PreferredNames[:i], m.config.PreferredNames[i+1:]...)
			configs.WriteConfig(m.config)
			break
		}
	}
	configs.WriteConfig(m.config)
	return nil
}

func (m *NamesTable) New(gn, pn string) tea.Cmd {

	m.config.PreferredNames = append(m.config.PreferredNames, configs.PreferredNames{GivenName: gn, PreferredName: pn})
	configs.WriteConfig(m.config)
	return nil
}

func (m *NamesTable) nextInput() {
	m.focused = (m.focused + 1) % len(m.inputs)
}
