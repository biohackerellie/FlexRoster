package requests

import (
	"api/internal/lib/logger"
	"api/internal/ports"
	"api/internal/redis"
)

type Adapter struct {
	requests ports.RequestDBService
	students ports.StudentDBService
	users    ports.UserDBService
	log      *logger.Logger
	cache    *redis.RClient
}

func NewAdapter(requests ports.RequestDBService, users ports.UserDBService, students ports.StudentDBService) *Adapter {
	return &Adapter{
		requests: requests,
		students: students,
		users:    users,
		cache:    redis.NewRedis(),
	}
}

func (a *Adapter) WithLogger(log *logger.Logger) *Adapter {
	log.With("layer", "core", "name", "classroomService")
	a.log = log
	return a
}
