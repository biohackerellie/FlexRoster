package mainMenu

import (
	"github.com/biohackerellie/FlexRoster/cli/configs"
	"github.com/charmbracelet/bubbles/key"
	"github.com/charmbracelet/bubbles/list"
	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var (
	appStyle = lipgloss.NewStyle().Padding(1, 2).Align(lipgloss.Center)

	titleStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FFFDF5")).
			Background(lipgloss.Color("#25A065")).
			Padding(1, 1)

	statusMessageStyle = lipgloss.NewStyle().
				Foreground(lipgloss.AdaptiveColor{Light: "#04B575", Dark: "#04B575"}).
				Render
)

type item struct {
	title string
}

func (i item) Title() string       { return i.title }
func (i item) Description() string { return "" }
func (i item) FilterValue() string { return i.title }

type ListKeyMap struct {
	ToggleSpinner    key.Binding
	ToggleTitleBar   key.Binding
	ToggleStatusBar  key.Binding
	TogglePagination key.Binding
	ToggleHelpMenu   key.Binding
	insertItem       key.Binding
	toggleFocus      key.Binding
}

func newListKeyMap() *ListKeyMap {
	return &ListKeyMap{
		insertItem: key.NewBinding(
			key.WithKeys("enter"),
			key.WithHelp("enter", "add item"),
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
		toggleFocus: key.NewBinding(
			key.WithKeys("i"),
			key.WithHelp("i", "toggle input focus"),
		),
	}
}

type model struct {
	list         list.Model
	Config       *configs.FlexConfig
	keys         *ListKeyMap
	delegateKeys *delegateKeyMap
	textInput    textinput.Model
	textFocus    bool
}

func InitialSecModel() model {
	var (
		delagateKeys = newDelegateKeyMap()
		listKeys     = newListKeyMap()
	)
	config = configs.GetConfig()
	secretaries := config.Secretaries
	items := make([]list.Item, len(secretaries))
	for i := range secretaries {
		items[i] = item{title: secretaries[i]}
	}

	delegate := newItemDelegate(delagateKeys)

	secretaryList := list.New(items, delegate, 20, 20)
	secretaryList.Title = "Secretaries"
	secretaryList.Styles.Title = titleStyle
	secretaryList.AdditionalFullHelpKeys = func() []key.Binding {
		return []key.Binding{
			listKeys.ToggleSpinner,
			listKeys.ToggleTitleBar,
			listKeys.ToggleStatusBar,
			listKeys.TogglePagination,
			listKeys.ToggleHelpMenu,
			listKeys.toggleFocus,
			listKeys.insertItem,
		}
	}
	ti := textinput.New()
	ti.Placeholder = "Add a new secretary"
	ti.Blur()
	return model{
		list:         secretaryList,
		Config:       config,
		keys:         listKeys,
		delegateKeys: delagateKeys,
		textInput:    ti,
		textFocus:    false,
	}
}

func (m model) Init() tea.Cmd {
	return nil
}

func (m *model) refreshList() {
	secretaries := m.Config.Secretaries
	items := make([]list.Item, len(secretaries))
	for i := range secretaries {
		items[i] = item{title: secretaries[i]}
	}
	m.list.SetItems(items)
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd

	switch msg := msg.(type) {

	case tea.WindowSizeMsg:
		h, v := appStyle.GetFrameSize()
		m.list.SetSize(msg.Width-h, msg.Height-v)

	case tea.KeyMsg:
		if m.list.FilterState() == list.Filtering {
			break
		}

		if m.textFocus {
			switch {
			case key.Matches(msg, m.keys.insertItem):
				if m.textInput.Value() != "" {
					m.delegateKeys.remove.SetEnabled(true)
					newItem := m.New()
					insCmd := m.list.InsertItem(-1, newItem)
					statusCmd := m.list.NewStatusMessage(statusMessageStyle("Added " + newItem.Title()))
					m.textInput.SetValue("")
					m.textFocus = false
					m.textInput.Blur()
					m.list.SetFilteringEnabled(false)
					m.list.SetShowPagination(true)
					return m, tea.Batch(statusCmd, insCmd)
				}
			case key.Matches(msg, key.NewBinding(key.WithKeys("esc"))):
				m.textFocus = false
				m.textInput.Blur()
				return m, nil
			}
		} else {
			switch {
			case key.Matches(msg, m.keys.ToggleSpinner):
				cmd := m.list.ToggleSpinner()
				return m, cmd

			case key.Matches(msg, m.keys.ToggleTitleBar):
				v := !m.list.ShowTitle()
				m.list.SetShowTitle(v)
				m.list.SetShowFilter(v)
				m.list.SetFilteringEnabled(v)
				return m, nil

			case key.Matches(msg, m.keys.ToggleStatusBar):
				m.list.SetShowStatusBar(!m.list.ShowStatusBar())
				return m, nil

			case key.Matches(msg, m.keys.TogglePagination):
				m.list.SetShowPagination(!m.list.ShowPagination())
				return m, nil

			case key.Matches(msg, m.keys.ToggleHelpMenu):
				m.list.SetShowHelp(!m.list.ShowHelp())
				return m, nil

			case key.Matches(msg, m.keys.toggleFocus):
				m.textFocus = true
				m.textInput.Focus()
				return m, nil
			}
		}
	}

	if m.textFocus {
		newTextInputModel, cmd := m.textInput.Update(msg)
		m.textInput = newTextInputModel
		cmds = append(cmds, cmd)
	} else {
		newListModel, cmd := m.list.Update(msg)
		m.list = newListModel
		cmds = append(cmds, cmd)
	}
	return m, tea.Batch(cmds...)
}
func (m model) View() string {
	if m.textFocus {
		return appStyle.Render(m.textInput.View())
	} else {
		return appStyle.Render(m.list.View())
	}

}

// add a new secretary to the config.Secretaries

func (m *model) New() item {
	i := item{
		title: m.textInput.Value(),
	}

	m.Config.Secretaries = append(m.Config.Secretaries, i.title)
	configs.WriteConfig(m.Config)
	return i
}
