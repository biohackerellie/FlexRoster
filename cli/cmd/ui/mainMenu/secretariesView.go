package mainMenu

import (
	"github.com/biohackerellie/FlexRoster/cli/configs"
	"github.com/charmbracelet/bubbles/key"
	"github.com/charmbracelet/bubbles/list"
	"github.com/charmbracelet/bubbles/textinput"
	tea "github.com/charmbracelet/bubbletea"
)

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
		delageKeys = newDelegateKeyMap()
		listKeys   = newListKeyMap()
	)
	config = configs.GetConfig()
	secretaries := config.Secretaries
	items := make([]list.Item, len(secretaries))
	for i := range secretaries {
		items[i] = item{title: secretaries[i]}
	}

	delegate := newItemDelegate(delageKeys)
	secretaryList := list.New(items, delegate, 0, 0)
	secretaryList.Title = "Secretaries"
	secretaryList.Styles.Title = titleStyle
	secretaryList.AdditionalFullHelpKeys = func() []key.Binding {
		return []key.Binding{
			listKeys.ToggleSpinner,
			listKeys.ToggleTitleBar,
			listKeys.ToggleStatusBar,
			listKeys.TogglePagination,
			listKeys.ToggleHelpMenu,
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
		delegateKeys: delageKeys,
		textInput:    ti,
		textFocus:    false,
	}
}

func (m model) Init() tea.Cmd {
	return nil
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmds []tea.Cmd

	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		// h, v := appStyle.GetFrameSize()
		// m.list.SetSize(msg.Width-h, msg.Height-v)

	case tea.KeyMsg:
		if m.list.FilterState() == list.Filtering {
			break
		}

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

			// case key.Matches(msg, m.keys.insertItem):
			// 	if !m.textFocus {
			// 		m.textFocus = true
			// 		m.textInput.Focus()
			// 		return m, nil
			// 	} else {
			// 		if m.textFocus && m.textInput.Value() != "" {

			// 			m.delegateKeys.remove.SetEnabled(true)
			// 			newItem := m.New()
			// 			insCmd := m.list.InsertItem(0, newItem)
			// 			statusCmd := m.list.NewStatusMessage(statusMessageStyle("Added " + newItem.title))
			// 			m.textInput.SetValue("")
			// 			return m, tea.Batch(insCmd, statusCmd)
			// 		}
			// 	}
		}
	}

	// if m.textFocus {
	// 	newTextInputModel, cmd := m.textInput.Update(msg)
	// 	m.textInput = newTextInputModel
	// 	cmds = append(cmds, cmd)
	// } else {
	newListModel, cmd := m.list.Update(msg)
	m.list = newListModel
	cmds = append(cmds, cmd)

	return m, tea.Batch(cmds...)
}
func (m model) View() string {
	return appStyle.Render(m.list.View() + "\n\n" + m.textInput.View())
}

// add a new secretary to the config.Secretaries

func (m model) New() item {
	i := item{
		title: m.textInput.Value(),
	}
	m.Config.Secretaries = append(m.Config.Secretaries, i.title)
	configs.WriteConfig(m.Config)
	return i
}
