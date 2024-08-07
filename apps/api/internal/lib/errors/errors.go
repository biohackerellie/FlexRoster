package errors

import (
	"context"

	"api/internal/lib/logger"
)

type LogEntry interface {
	Error(args ...interface{})
}

func LogError(log LogEntry, err error) {
	if err != nil {
		log.Error(err)
	}
}

func IgnoreError(err error) {
	log := logger.New()
	log.Debug("IgnoreError: %s", "err", err)
}

func ExecuteAndIgnoreErrorF(f func(context.Context) error, ctx context.Context) {
	IgnoreError(f(ctx))
}
