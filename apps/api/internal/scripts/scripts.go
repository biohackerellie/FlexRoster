package scripts

import (
	"api/internal/lib/logger"
	"api/internal/ports"
	"github.com/redis/rueidis"
)

type Scripts struct {
	classroomRepo ports.ClassroomDBService
	userRepo      ports.UserDBService
	studentRepo   ports.StudentDBService
	logsRepo      ports.LogsDBService
	log           *logger.Logger
	client        rueidis.Client
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
	logger := log.With("module", "scripts")
	a.log = logger
	return a
}

func (a *Scripts) WithCache(cache rueidis.Client) *Scripts {
	a.client = cache
	return a
}
