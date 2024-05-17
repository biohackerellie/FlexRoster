package mainMenu

import (
	"io"

	"github.com/charmbracelet/bubbles/key"
	"github.com/charmbracelet/bubbles/list"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var (
	itemStyle = lipgloss.NewStyle().Padding(0, 1).Foreground(lipgloss.Color("#FFFDF5")).
			Background(lipgloss.Color("#25A065"))
	selectedItemStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("205")).Background(lipgloss.Color("236")).Padding(1, 2)
)

type delegateKeyMap struct {
	choose key.Binding
	remove key.Binding
}

type itemDelegate struct {
	list.DefaultDelegate
	keys *delegateKeyMap
}

func newItemDelegate(keys *delegateKeyMap) list.DefaultDelegate {
	d := itemDelegate{
		DefaultDelegate: list.NewDefaultDelegate(),
		keys:            keys,
	}

	d.UpdateFunc = func(msg tea.Msg, m *list.Model) tea.Cmd {
		var title string
		if i, ok := m.SelectedItem().(item); ok {
			title = i.Title()
		} else {
			return nil
		}

		switch msg := msg.(type) {
		case tea.KeyMsg:
			switch {
			case key.Matches(msg, keys.choose):
				return m.NewStatusMessage(statusMessageStyle("You selected " + title))

			case key.Matches(msg, keys.remove):
				index := m.Index()
				m.RemoveItem(index)
				if len(m.Items()) == 0 {
					keys.remove.SetEnabled(false)
				}
				return m.NewStatusMessage(statusMessageStyle("You removed " + title))
			}
		}
		return nil
	}

	help := []key.Binding{keys.choose, keys.remove}

	d.ShortHelpFunc = func() []key.Binding {
		return help
	}

	d.FullHelpFunc = func() [][]key.Binding {
		return [][]key.Binding{help}
	}
	return d.DefaultDelegate
}

func (d itemDelegate) Render(w io.Writer, m list.Model, index int, listItem list.Item) {
	it, ok := listItem.(item)
	if !ok {
		return
	}
	str := it.title

	var rendered string
	if index == m.Index() {
		rendered = selectedItemStyle.Render("> " + str)
	} else {
		rendered = itemStyle.Render(str)
	}
	io.WriteString(w, rendered)
}

func (d delegateKeyMap) ShortHelp() []key.Binding {
	return []key.Binding{

		d.choose,
		d.remove,
	}
}

func (d delegateKeyMap) FullHelp() [][]key.Binding {
	return [][]key.Binding{
		{d.choose, d.remove},
	}
}

func newDelegateKeyMap() *delegateKeyMap {
	return &delegateKeyMap{
		choose: key.NewBinding(
			key.WithKeys("enter"),
			key.WithHelp("enter", "choose"),
		),
		remove: key.NewBinding(
			key.WithKeys("x", "backspace"),
			key.WithHelp("x", "delete"),
		),
	}
}
