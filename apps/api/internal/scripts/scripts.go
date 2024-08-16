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
	log           *logger.Logger
	cache         *redis.RClient
}
