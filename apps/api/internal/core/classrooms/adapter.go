package classrooms

import (
	"api/internal/lib/logger"
	"api/internal/ports"
	"api/internal/redis"
)

type Adapter struct {
	classroomRepo ports.ClassroomDBService
	log           *logger.Logger
	cache         *redis.RClient
}

func NewAdapter(classroomRepo ports.ClassroomDBService) *Adapter {
	return &Adapter{
		classroomRepo: classroomRepo,
		cache:         redis.NewRedis(),
	}
}

func (a *Adapter) WithLogger(log *logger.Logger) *Adapter {
	log.With("layer", "core", "name", "classroomService")
	a.log = log
	return a
}
