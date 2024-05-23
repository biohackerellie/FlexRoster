package mainMenu

import (
	tea "github.com/charmbracelet/bubbletea"
)

type RootScreenModel struct {
	model tea.Model
}

type forceRedrawMsg struct{}

func RootScreen() RootScreenModel {

	homeScreen := MainMenuModel()

	return RootScreenModel{model: &homeScreen}
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
	return m.model, tea.Batch(m.model.Init(), func() tea.Msg { return forceRedrawMsg{} })
}
