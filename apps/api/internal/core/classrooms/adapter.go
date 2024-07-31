package classrooms

import (
	"api/internal/ports"
	"api/internal/redis"

	"go.uber.org/zap"
)

type Adapter struct {
	classroomRepo ports.ClassroomDBService
	log           *zap.SugaredLogger
	cache         *redis.RClient
}

func NewAdapter(classroomRepo ports.ClassroomDBService, log *zap.SugaredLogger) *Adapter {
	return &Adapter{
		classroomRepo: classroomRepo,
		log:           zap.NewNop().Sugar(),
		cache:         redis.NewRedis(),
	}
}

func (a *Adapter) WithLogger(log *zap.SugaredLogger) *Adapter {
	a.log = log.With("layer", "core", "name", "classroomService")
	return a
}
