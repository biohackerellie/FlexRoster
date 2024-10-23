package helpers

import (
	"math/rand"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
	"golang.org/x/exp/constraints"
)

// String conversion
type NumOrString interface {
	constraints.Integer | ~string
}

// Converts a string to a pgtype.Text
func StringToPGText(s string) pgtype.Text {
	var pgText pgtype.Text
	pgText.String = s

	return pgText
}

// validates dates and returns pgtype.Date
func DateToPGDate(d time.Time) pgtype.Date {
	return pgtype.Date{Time: d, Valid: true}
}

// date comparison
func IsSameDate(date1, date2 time.Time) bool {
	return date1.Equal(date2)
}

// Random Key Generator

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

var seededRand *rand.Rand = rand.New(rand.NewSource(time.Now().UnixNano()))

// Generates a random key string
// @param length: int - the length of the key
// @return string
func GenRandomKeyString(length int) string {
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}

// for passing in dates from our database, which are formatted like "2021-10-01"
func IsDateToday(date time.Time) bool {
	today := time.Now().Format("2006-01-02")
	comp := date.Format("2006-01-02")
	return comp == today
}
