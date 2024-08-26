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
