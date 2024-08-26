package classrooms

import (
	"api/internal/lib/logger"
	"api/internal/ports"

	"github.com/redis/rueidis"
)

type Adapter struct {
	classroomRepo ports.ClassroomDBService
	log           *logger.Logger
	client        rueidis.Client
}

func NewAdapter(classroomRepo ports.ClassroomDBService, client rueidis.Client) *Adapter {
	return &Adapter{
		classroomRepo: classroomRepo,
		client:        client,
	}
}

func (a *Adapter) WithLogger(log *logger.Logger) *Adapter {
	log.With("layer", "core", "name", "classroomService")
	a.log = log
	return a
}
