package helpers

import (
	"github.com/jackc/pgx/v5/pgtype"
	"golang.org/x/exp/constraints"
)

type NumOrString interface {
	constraints.Integer | ~string
}

func StringToPGText(s string) pgtype.Text {
	var pgText pgtype.Text
	pgText.String = s

	return pgText
}
