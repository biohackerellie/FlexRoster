package errors

import (
	"context"

	"go.uber.org/zap"
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
	zap.S().Debugf("IgnoreError: %s", err)
}

func ExecuteAndIgnoreErrorF(f func(context.Context) error, ctx context.Context) {
	IgnoreError(f(ctx))
}
