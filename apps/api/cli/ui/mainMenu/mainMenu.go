package mainMenu

import (
	"api/internal/config"
	"fmt"

	"github.com/charmbracelet/bubbles/spinner"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

const dotChar = "•"

var (
	subtleStyle   = lipgloss.NewStyle().Foreground(lipgloss.Color("241"))
	checkboxStyle = lipgloss.NewStyle().Foreground(lipgloss.Color("39")).Bold(true)
	dotStyle      = lipgloss.NewStyle().Foreground(lipgloss.Color("236")).Render(dotChar)
	mainStyle     = lipgloss.NewStyle().MarginLeft(2)
	logoStyle     = lipgloss.NewStyle().
			BorderStyle(lipgloss.RoundedBorder()).
			BorderForeground(lipgloss.Color("212")).
			Margin(1).
			Padding(1, 2).
			Foreground(lipgloss.Color("212"))
	Config *config.Env
)

var Logo = logoStyle.Render(`
 ________  __                      _______                         __                         
/        |/  |                    /       \                       /  |                        
$$$$$$$$/ $$ |  ______   __    __ $$$$$$$  |  ______    _______  _$$ |_     ______    ______  
$$ |__    $$ | /      \ /  \  /  |$$ |__$$ | /      \  /       |/ $$   |   /      \  /      \ 
$$    |   $$ |/$$$$$$  |$$  \/$$/ $$    $$< /$$$$$$  |/$$$$$$$/ $$$$$$/   /$$$$$$  |/$$$$$$  |
$$$$$/    $$ |$$    $$ | $$  $$<  $$$$$$$  |$$ |  $$ |$$      \   $$ | __ $$    $$ |$$ |  $$/ 
$$ |      $$ |$$$$$$$$/  /$$$$  \ $$ |  $$ |$$ \__$$ | $$$$$$  |  $$ |/  |$$$$$$$$/ $$ |      
$$ |      $$ |$$       |/$$/ $$  |$$ |  $$ |$$    $$/ /     $$/   $$  $$/ $$       |$$ |      
$$/       $$/  $$$$$$$/ $$/   $$/ $$/   $$/  $$$$$$/  $$$$$$$/     $$$$/   $$$$$$$/ $$/       
`)

type MenuModel struct {
	Choice   int
	Chosen   bool
	Quitting bool
	Frames   int
	Progress float64
	Loaded   bool
	Logo     string
	spinner  spinner.Model
	Config   *config.Env
}

func (m MenuModel) Init() tea.Cmd {
	return tea.Batch(m.spinner.Tick, tea.SetWindowTitle("Be Gay, Do Crime 🏳️‍🌈🏴‍☠️"))
}

func MainMenuModel(config *config.Env) MenuModel {
	s := spinner.New()
	s.Spinner = spinner.Dot
	Config = config
	s.Style = lipgloss.NewStyle().Foreground(lipgloss.Color("205"))
	return MenuModel{
		Choice:   0,
		Chosen:   false,
		Quitting: false,
		Config:   Config,
		spinner:  s,
		Logo:     Logo,
	}
}

func (m *MenuModel) Update(msg tea.Msg) (tea.Model, tea.Cmd) {

	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "q", "esc", "ctrl+c":
			m.Quitting = true
			return m, tea.Quit
		case "j", "down":
			m.Choice++
			if m.Choice > 4 {
				m.Choice = 0
			}
		case "k", "up":
			m.Choice--
			if m.Choice < 0 {
				m.Choice = 4
			}
		case "enter":
			switch m.Choice {
			case 0:
				secretariesScreen := InitialSecModel()
				return RootScreen(m.Config).SwitchScreen(&secretariesScreen)
			case 1:
				namesScreen := PreferredNamesTable()
				return RootScreen(m.Config).SwitchScreen(&namesScreen)
			case 2:
				excludesScreen := ExcludedTeachers()
				return RootScreen(m.Config).SwitchScreen(&excludesScreen)
			case 3:
				semesterScreen := SemesterClassName()
				return RootScreen(m.Config).SwitchScreen(&semesterScreen)
			case 4:
				writeEnv := NewProgBar()
				return RootScreen(m.Config).SwitchScreen(&writeEnv)
			}

		}
	}
	return m, nil
}

func (m *MenuModel) View() string {
	var s string
	c := m.Choice

	tpl := "Edit Configuration\n\n"
	tpl += "%s\n\n"
	tpl += subtleStyle.Render("j/k, up/down: select") + dotStyle +
		subtleStyle.Render("enter: choose") + dotStyle +
		subtleStyle.Render("q: quit")

	choices := fmt.Sprintf(
		"%s\n%s\n%s\n%s\n%s",
		checkbox("Secretaries", c == 0),
		checkbox("Preferred Names", c == 1),
		checkbox("Excluded Teachers", c == 2),
		checkbox("Semester Class Name", c == 3),
		checkbox("Make Env File", c == 4),
	)
	s = fmt.Sprintf(tpl, choices)

	return mainStyle.Render("\n", Logo+"\n"+s+"\n\n")
}

func checkbox(label string, checked bool) string {
	if checked {
		return checkboxStyle.Render("(•) " + label)
	}
	return fmt.Sprintf("( ) %s", label)
}
