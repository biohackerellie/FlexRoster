package mainMenu

import (
	tea "github.com/charmbracelet/bubbletea"
)

type RootScreenModel struct {
	model tea.Model
}

func RootScreen() RootScreenModel {
	var rootModel tea.Model

	homeScreen := MainMenuModel()
	if !homeScreen.Chosen {
		rootModel = &homeScreen
	} else {
		switch homeScreen.Choice {
		case 0:
			secScreen := InitialSecModel()
			rootModel = &secScreen
		case 1:

		case 2:

		case 3:

		}
	}

	return RootScreenModel{model: rootModel}
}

func (m RootScreenModel) Init() tea.Cmd {
	return m.model.Init()
}

func (m RootScreenModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	return m.model.Update(msg)
}

func (m RootScreenModel) View() string {
	return m.model.View()
}

func (m RootScreenModel) SwitchScreen(model tea.Model) (tea.Model, tea.Cmd) {
	m.model = model
	return m.model, m.model.Init()
}
