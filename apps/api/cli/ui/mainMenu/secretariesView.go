package mainMenu

import (
	configs "api/internal/config"

	"github.com/charmbracelet/bubbles/key"
	"github.com/charmbracelet/bubbles/list"
	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

var (
	appStyle = lipgloss.NewStyle().Padding(1, 2)

	titleStyle = lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FFFDF5")).
			Background(lipgloss.Color("#25A065")).
			Padding(0, 1)
)

type item struct {
	title string
}

type redrawMsg struct{}

func (i item) Title() string       { return i.title }
func (i item) Description() string { return "" }
func (i item) FilterValue() string { return i.title }

type ListKeyMap struct {
	insertItem  key.Binding
	toggleFocus key.Binding
	deleteItem  key.Binding
	back        key.Binding
}

func newListKeyMap() *ListKeyMap {
	return &ListKeyMap{
		insertItem: key.NewBinding(
			key.WithKeys("enter"),
			key.WithHelp("enter", "add item"),
		),
		toggleFocus: key.NewBinding(
			key.WithKeys("i"),
			key.WithHelp("i", "toggle input focus"),
		),
		deleteItem: func() key.Binding {
			b := &key.Binding{}
			for _, opt := range []key.BindingOpt{key.WithKeys("x", "backspace"), key.WithHelp("x", "delete item")} {
				opt(b)
			}
			return *b
		}(),
		back: key.NewBinding(
			key.WithKeys("q", "esc"),
			key.WithHelp("q", "back"),
		),
	}
}

type model struct {
	list      list.Model
	keys      *ListKeyMap
	textInput textinput.Model
	textFocus bool
}

func InitialSecModel() model {
	var (
		listKeys = newListKeyMap()
	)
	secretaries := Config.Secretaries
	items := make([]list.Item, len(secretaries))
	for i := range secretaries {
		items[i] = item{title: secretaries[i]}
	}
	d := list.NewDefaultDelegate()

	secretaryList := list.New(items, d, 50, 25)
	secretaryList.SetShowHelp(false)
	secretaryList.Title = "Secretaries"
	secretaryList.Styles.Title = titleStyle
	secretaryList.AdditionalFullHelpKeys = func() []key.Binding {
		return []key.Binding{

			listKeys.toggleFocus,
			listKeys.insertItem,
			listKeys.deleteItem,
			listKeys.back,
		}
	}
	ti := textinput.New()
	ti.Placeholder = "Add a new secretary"
	ti.Blur()
	return model{
		list: secretaryList,
		keys: listKeys,

		textInput: ti,
		textFocus: false,
	}
}

func (m model) Init() tea.Cmd {
	return nil
}

func (m *model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd

	switch msg := msg.(type) {
	case redrawMsg:
		return m, tea.ClearScreen

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
					newItem := m.New()
					m.list.InsertItem(-1, newItem)
					m.textInput.SetValue("")
					m.textFocus = false
					m.textInput.Blur()
					m.list.SetFilteringEnabled(false)
					m.list.SetShowPagination(true)
					return m, func() tea.Msg { return redrawMsg{} }
				}
			case key.Matches(msg, key.NewBinding(key.WithKeys("esc"))):
				m.textFocus = false
				m.textInput.Blur()
				return m, nil
			}
		} else {
			switch {
			case key.Matches(msg, m.keys.deleteItem):
				index := m.list.Index()
				i := m.list.Items()[index].(item)

				if len(m.list.Items()) == 0 {
					m.keys.deleteItem.SetEnabled(false)
				}
				m.Delete(index, i)
				return m, func() tea.Msg { return redrawMsg{} }
			case key.Matches(msg, m.keys.toggleFocus):
				m.textFocus = true
				m.textInput.Focus()
				return m, nil
			case key.Matches(msg, m.keys.back):
				homeScreen := MainMenuModel(Config)
				return RootScreen(Config).SwitchScreen(&homeScreen)
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
	var view string
	if m.textFocus {
		view = appStyle.Render(m.textInput.View())
	} else {
		view = appStyle.Render(m.list.View())
	}

	view += "\n" + subtleStyle.Render("i: insert") + dotStyle + " " + subtleStyle.Render("x: delete") + dotStyle + " " + subtleStyle.Render("q: back")

	return view
}

func (m *model) New() item {
	i := item{
		title: m.textInput.Value(),
	}

	Config.Secretaries = append(Config.Secretaries, i.title)
	err := configs.WriteConfig(Config)
	if err != nil {
		return item{title: err.Error()}
	}
	return i
}
func (m *model) Delete(index int, i item) tea.Cmd {
	for j, s := range Config.Secretaries {
		if s == i.title {
			Config.Secretaries = append(Config.Secretaries[:j], Config.Secretaries[j+1:]...)
			break
		}
	}
	err := configs.WriteConfig(Config)
	if err != nil {
		return func() tea.Msg { return err }
	}
	m.list.RemoveItem(index)
	return nil
}
