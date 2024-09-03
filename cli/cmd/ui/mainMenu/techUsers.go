package mainMenu

import (
	"github.com/biohackerellie/FlexRoster/cli/configs"
	"github.com/charmbracelet/bubbles/key"
	"github.com/charmbracelet/bubbles/list"
	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
)

type techModel struct {
	list      list.Model
	config    *configs.FlexConfig
	keys      *ListKeyMap
	textInput textinput.Model
	textFocus bool
}

func InitialTechModel() techModel {
	var (
		listKeys = newListKeyMap()
		config   = configs.GetConfig()
	)
	techSupport := config.TechDepartment
	items := make([]list.Item, len(techSupport))
	for i := range techSupport {
		items[i] = item{title: techSupport[i]}
	}
	d := list.NewDefaultDelegate()

	techList := list.New(items, d, 50, 25)
	techList.SetShowHelp(false)
	techList.Title = "Tech Department"
	techList.Styles.Title = titleStyle
	techList.AdditionalFullHelpKeys = func() []key.Binding {
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
	return techModel{
		list:   techList,
		config: config,
		keys:   listKeys,

		textInput: ti,
		textFocus: false,
	}
}

func (m techModel) Init() tea.Cmd {
	return nil
}

func (m *techModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
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
				homeScreen := MainMenuModel()
				return RootScreen().SwitchScreen(&homeScreen)
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
func (m techModel) View() string {
	var view string
	if m.textFocus {
		view = appStyle.Render(m.textInput.View())
	} else {
		view = appStyle.Render(m.list.View())
	}

	view += "\n" + subtleStyle.Render("i: insert") + dotStyle + " " + subtleStyle.Render("x: delete") + dotStyle + " " + subtleStyle.Render("q: back")

	return view
}

func (m *techModel) New() item {
	i := item{
		title: m.textInput.Value(),
	}

	m.config.TechDepartment = append(m.config.TechDepartment, i.title)
	err := configs.WriteConfig(m.config)
	if err != nil {
		return item{title: err.Error()}
	}
	return i
}
func (m *techModel) Delete(index int, i item) tea.Cmd {
	for j, s := range m.config.TechDepartment {
		if s == i.title {
			m.config.TechDepartment = append(m.config.TechDepartment[:j], m.config.TechDepartment[j+1:]...)
			break
		}
	}
	err := configs.WriteConfig(m.config)
	if err != nil {
		return func() tea.Msg { return err }
	}
	m.list.RemoveItem(index)
	return nil
}
