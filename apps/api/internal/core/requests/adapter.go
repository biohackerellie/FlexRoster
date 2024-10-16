package requests

import (
	"api/internal/config"
	"api/internal/lib/logger"
	"api/internal/ports"
)

type Adapter struct {
	requests ports.RequestDBService
	students ports.StudentDBService
	users    ports.UserDBService
	dblogs   ports.LogsDBService
	log      *logger.Logger
	config   *config.Env
}

func NewAdapter(requests ports.RequestDBService, users ports.UserDBService, students ports.StudentDBService, dblogs ports.LogsDBService, config *config.Env) *Adapter {
	return &Adapter{
		requests: requests,
		students: students,
		users:    users,
		dblogs:   dblogs,
		config:   config,
	}
}

func (a *Adapter) WithLogger(log *logger.Logger) *Adapter {
	log.With("layer", "core", "name", "requestsService")
	a.log = log
	return a
}
