package classrooms

import (
	"api/internal/lib/logger"
	"api/internal/ports"
)

type Adapter struct {
	classroomRepo ports.ClassroomDBService
	log           *logger.Logger
}

func NewAdapter(classroomRepo ports.ClassroomDBService) *Adapter {
	return &Adapter{
		classroomRepo: classroomRepo,
	}
}

func (a *Adapter) WithLogger(log *logger.Logger) *Adapter {
	log.With("layer", "core", "name", "classroomService")
	a.log = log
	return a
}
