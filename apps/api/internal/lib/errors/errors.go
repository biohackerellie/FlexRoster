package errors

import (
	"context"
	"net/http"

	"api/internal/lib/logger"

	"github.com/go-chi/render"
)

// LOGGING ERRORS

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

// HTTP ERRORS

type ErrResponse struct {
	Err            error  `json:"-"`
	StatusText     string `json:"status"`
	ErrorText      string `json:"error,omitempty"`
	HTTPStatusCode int    `json:"-"`
	AppCode        int64  `json:"code,omitempty"`
}

func (e *ErrResponse) Render(w http.ResponseWriter, r *http.Request) error {
	render.Status(r, e.HTTPStatusCode)
	return nil
}

func ErrInvalidRequest(err error) render.Renderer {
	return &ErrResponse{
		Err:            err,
		HTTPStatusCode: 400,
		StatusText:     "Invalid Request",
		ErrorText:      err.Error(),
	}
}

func ErrRender(err error) render.Renderer {
	return &ErrResponse{
		Err:            err,
		HTTPStatusCode: 422,
		StatusText:     "Error producing a response",
		ErrorText:      err.Error(),
	}
}

var (
	ErrNotFound  = &ErrResponse{HTTPStatusCode: 404, StatusText: "Resource not found."}
	Unauthorized = &ErrResponse{HTTPStatusCode: 401, StatusText: "Unauthorized."}
)
