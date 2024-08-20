package scripts

import (
	"api/internal/lib/logger"
	"api/internal/ports"
	"github.com/redis/go-redis/v9"
)

type Scripts struct {
	classroomRepo ports.ClassroomDBService
	userRepo      ports.UserDBService
	studentRepo   ports.StudentDBService
	logsRepo      ports.LogsDBService
	log           *logger.Logger
	cache         *redis.Client
}

func NewScript(classroomRepo ports.ClassroomDBService, studentRepo ports.StudentDBService, userRepo ports.UserDBService, logsRepo ports.LogsDBService) *Scripts {
	return &Scripts{
		classroomRepo: classroomRepo,
		studentRepo:   studentRepo,
		userRepo:      userRepo,
		logsRepo:      logsRepo,
	}
}

func (a *Scripts) WithLogger(log *logger.Logger) *Scripts {
	log.With("layer", "Scripts", "name", "ScriptRunner")
	a.log = log
	return a
}

func (a *Scripts) WithCache(cache *redis.Client) *Scripts {
	a.cache = cache
	return a
}
