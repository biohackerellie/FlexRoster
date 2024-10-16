package emails

import (
	"net/mail"
	"net/smtp"

	"api/internal/config"
)

type Email interface {
	Send(email *EmailData, config *config.Env) error
}

type EmailData struct {
	To      string
	Subject string
	HTML    string
}

func (s EmailData) Send(email *EmailData, config *config.Env) error {
	auth := smtp.PlainAuth("")
}
