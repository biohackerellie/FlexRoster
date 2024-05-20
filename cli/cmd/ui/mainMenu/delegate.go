package mainMenu

import (
	"github.com/charmbracelet/bubbles/list"
	// tea "github.com/charmbracelet/bubbletea"
)

func newItemDelegate() list.DefaultDelegate {
	d := list.NewDefaultDelegate()

	// d.UpdateFunc = func(msg tea.Msg, m *list.Model) tea.Cmd {
	// 	var title string
	// 	if i, ok := m.SelectedItem().(item); ok {
	// 		title = i.Title()
	// 	} else {
	// 		return nil
	// 	}

	// 	switch msg := msg.(type) {
	// 	case tea.KeyMsg:
	// 		switch {
	// 		case key.Matches(msg, keys.choose):
	// 			return m.NewStatusMessage(statusMessageStyle("You selected " + title))
	// 		}
	// 	}
	// 	return nil
	// }

	return d
}

// remove the item from config.Secretaries
