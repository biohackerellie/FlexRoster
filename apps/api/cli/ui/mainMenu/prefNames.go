package mainMenu

import (
	configs "api/internal/config"

	"github.com/charmbracelet/bubbles/table"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var tableBaseStyle = lipgloss.NewStyle().
	BorderStyle(lipgloss.NormalBorder()).
	BorderForeground(lipgloss.Color("240"))

type NamesTable struct {
	table table.Model
}

func (m NamesTable) Init() tea.Cmd {
	return nil
}

func PreferredNamesTable() NamesTable {

	names := Config.PreferredNames
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
		table: t,
	}
}

func (m *NamesTable) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd
	switch msg := msg.(type) {
	case redrawMsg:
		return m, tea.ClearScreen

	case tea.KeyMsg:

		switch msg.String() {
		case "ctrl+c":
			return m, tea.Quit
		case "x":
			i := m.table.SelectedRow()
			m.Delete(i)

			return m, func() tea.Msg { return redrawMsg{} }

		case "i":
			addScreen := AddNamesModel()
			return RootScreen(Config).SwitchScreen(&addScreen)
		case "q", "esc":
			homeScreen := MainMenuModel(Config)
			return RootScreen(Config).SwitchScreen(&homeScreen)

		}
	}
	newTableModel, cmd := m.table.Update(msg)
	m.table = newTableModel
	cmds = append(cmds, cmd)

	return m, tea.Batch(cmds...)
}

func (m NamesTable) View() string {

	return tableBaseStyle.Render(m.table.View()) + "\n" + subtleStyle.Render("esc: back") + dotStyle + " " + subtleStyle.Render("q: quit") + dotStyle + " " + subtleStyle.Render("i: insert") + dotStyle + " " + subtleStyle.Render("x: delete")
}

func (m *NamesTable) Delete(r table.Row) tea.Cmd {
	var rows []table.Row
	for i, name := range Config.PreferredNames {
		if name.GivenName == r[0] && name.PreferredName == r[1] {
			Config.PreferredNames = append(Config.PreferredNames[:i], Config.PreferredNames[i+1:]...)
			err := configs.WriteConfig(Config)
			if err != nil {
				return func() tea.Msg { return err }
			}
			break
		}
	}
	err := configs.WriteConfig(Config)
	if err != nil {
		return func() tea.Msg { return err }
	}
	for _, name := range Config.PreferredNames {
		rows = append(rows, table.Row{name.GivenName, name.PreferredName})
	}
	m.table.SetRows(rows)
	return nil
}
