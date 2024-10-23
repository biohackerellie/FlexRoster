package emails

import (
	"net/mail"
	"net/smtp"
	"strings"

	"api/internal/config"
)

type EmailData struct {
	To      string
	Subject string
	HTML    string
}

func Send(email *EmailData, config *config.Env) error {
	auth := smtp.PlainAuth("", config.EmailUser, config.EmailPassword, config.EmailSMTPHost)
	from := mail.Address{Name: "FLEXROSTER Update", Address: config.EmailUser}
	mime := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"

	subject := "Subject: " + email.Subject + "!\n"
	header := "From: " + from.Name + "<" + from.Address + ">\n"
	msg := []byte(header + subject + mime + "\n" + email.HTML)
	recipients := strings.Split(email.To, ", ")
	for i, recipient := range recipients {
		recipients[i] = strings.TrimSpace(recipient)
	}

	err := smtp.SendMail(config.EmailSMTPHost+":587", auth, config.EmailUser, recipients, msg)
	if err != nil {
		return err
	}
	return nil
}
