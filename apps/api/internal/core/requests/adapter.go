package requests

import (
	"api/internal/lib/logger"
	"api/internal/ports"
	"api/internal/redis"
)

type Adapter struct {
	requests ports.RequestDBService
	log      *logger.Logger
	cache    *redis.RClient
}

func NewAdapter(requests ports.RequestDBService) *Adapter {
	return &Adapter{
		requests: requests,
		cache:    redis.NewRedis(),
	}
}

func (a *Adapter) WithLogger(log *logger.Logger) *Adapter {
	log.With("layer", "core", "name", "classroomService")
	a.log = log
	return a
}
