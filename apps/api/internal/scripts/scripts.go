package scripts

import (
	"api/internal/lib/logger"
	"api/internal/ports"
)

type Scripts struct {
	classroomRepo ports.ClassroomDBService
	userRepo      ports.UserDBService
	studentRepo   ports.StudentDBService
	logsRepo      ports.LogsDBService
	requestRepo   ports.RequestDBService
	log           *logger.Logger
	cache         ports.RClient
}

func NewScript(redisRepo ports.RClient, classroomRepo ports.ClassroomDBService, studentRepo ports.StudentDBService, userRepo ports.UserDBService, requestRepo ports.RequestDBService, logsRepo ports.LogsDBService) *Scripts {
	return &Scripts{
		classroomRepo: classroomRepo,
		studentRepo:   studentRepo,
		userRepo:      userRepo,
		logsRepo:      logsRepo,
		cache:         redisRepo,
		requestRepo:   requestRepo,
	}
}

func (a *Scripts) WithLogger(log *logger.Logger) *Scripts {
	logger := log.With("module", "scripts")
	a.log = logger
	return a
}
