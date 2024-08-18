package scripts

import (
	"api/internal/lib/logger"
	"api/internal/ports"
	"api/internal/redis"
)

type Scripts struct {
	classroomRepo ports.ClassroomDBService
	userRepo      ports.UserDBService
	studentRepo   ports.StudentDBService
	logsRepo      ports.LogsDBService
	log           *logger.Logger
	cache         *redis.RClient
}

func NewScript(classroomRepo ports.ClassroomDBService, studentRepo ports.StudentDBService, userRepo ports.UserDBService) *Scripts {
	return &Scripts{
		classroomRepo: classroomRepo,
		studentRepo:   studentRepo,
		userRepo:      userRepo,
		cache:         redis.NewRedis(),
	}
}

func (a *Scripts) WithLogger(log *logger.Logger) *Scripts {
	log.With("layer", "Scripts", "name", "ScriptRunner")
	a.log = log
	return a
}
