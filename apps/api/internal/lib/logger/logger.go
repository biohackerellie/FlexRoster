package logger

import (
	stdlog "log"
	"os"
	"time"

	"github.com/charmbracelet/lipgloss"
	"github.com/charmbracelet/log"
)

type Logger struct {
	logger *log.Logger
	stdlog *stdlog.Logger
}

func New() *Logger {
	styles := Styles()

	logger := log.NewWithOptions(os.Stderr, log.Options{
		ReportCaller:    false,
		ReportTimestamp: true,
		TimeFormat:      time.Kitchen,
		Prefix:          "💩",
	})

	logger.SetStyles(styles)

	stdlog := logger.StandardLog(log.StandardLogOptions{
		ForceLevel: log.ErrorLevel,
	})
	return &Logger{
		logger: logger,
		stdlog: stdlog,
	}
}

func Styles() *log.Styles {
	styles := log.DefaultStyles()
	styles.Levels[log.ErrorLevel] = lipgloss.NewStyle().
		SetString("OH SHIT!!!").
		Padding(0, 1, 0, 1).
		Background(lipgloss.Color("204")).
		Foreground(lipgloss.Color("0"))

	styles.Keys["err"] = lipgloss.NewStyle().Foreground(lipgloss.Color("204"))
	styles.Values["err"] = lipgloss.NewStyle().Bold(true)
	styles.Levels[log.InfoLevel] = lipgloss.NewStyle().
		SetString("Info").
		Padding(0, 1, 0, 1).
		Background(lipgloss.Color("119")).
		Foreground(lipgloss.Color("0"))

	styles.Keys["info"] = lipgloss.NewStyle().Foreground(lipgloss.Color("119"))
	styles.Values["info"] = lipgloss.NewStyle().Bold(true)
	styles.Keys["layer"] = lipgloss.NewStyle().Foreground(lipgloss.Color("147"))
	styles.Values["layer"] = lipgloss.NewStyle().Bold(true)
	return styles
}

func (l *Logger) With(keyvals ...interface{}) *Logger {
	return &Logger{
		logger: l.logger.With(keyvals...),
	}
}

func (l *Logger) Info(msg interface{}, fields ...interface{}) {
	l.logger.Info(msg, fields...)
}

func (l *Logger) Error(msg interface{}, fields ...interface{}) {
	l.logger.Error(msg, fields...)
}

func (l *Logger) Warn(msg interface{}, fields ...interface{}) {
	l.logger.Info(msg, fields...)
}

func (l *Logger) Debug(msg interface{}, fields ...interface{}) {
	l.logger.Debug(msg, fields...)
}

func (l *Logger) Fatal(msg interface{}, fields ...interface{}) {
	l.logger.Fatal(msg, fields...)
}

func (l *Logger) StdLogger() *stdlog.Logger {
	return l.stdlog
}
