package mainMenu

import (
	"github.com/charmbracelet/bubbles/key"
	"github.com/charmbracelet/lipgloss"
)

var (
	appStyle = lipgloss.NewStyle().Padding(1, 2)

	titleStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FFFDF5")).
			Background(lipgloss.Color("#25A065")).
			Padding(0, 1)

	statusMessageStyle = lipgloss.NewStyle().
				Foreground(lipgloss.AdaptiveColor{Light: "#04B575", Dark: "#04B575"}).
				Render
)

type item struct {
	title string
}

func (i item) Title() string       { return i.title }
func (i item) FilterValue() string { return i.title }

type ListKeyMap struct {
	ToggleSpinner    key.Binding
	ToggleTitleBar   key.Binding
	ToggleStatusBar  key.Binding
	TogglePagination key.Binding
	ToggleHelpMenu   key.Binding
	insertItem       key.Binding
}

func newListKeyMap() *ListKeyMap {
	return &ListKeyMap{
		insertItem: key.NewBinding(
			key.WithKeys("a"),
			key.WithHelp("a", "add item"),
		),
		ToggleSpinner: key.NewBinding(
			key.WithKeys("s"),
			key.WithHelp("s", "toggle spinner"),
		),
		ToggleTitleBar: key.NewBinding(
			key.WithKeys("t"),
			key.WithHelp("t", "toggle title bar"),
		),
		ToggleStatusBar: key.NewBinding(
			key.WithKeys("S"),
			key.WithHelp("S", "toggle status bar"),
		),
		TogglePagination: key.NewBinding(
			key.WithKeys("p"),
			key.WithHelp("p", "toggle pagination"),
		),
		ToggleHelpMenu: key.NewBinding(
			key.WithKeys("?"),
			key.WithHelp("?", "toggle help menu"),
		),
	}
}
