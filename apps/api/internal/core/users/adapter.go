package users

import (
	"api/internal/lib/logger"
	"api/internal/ports"
	"api/internal/redis"
)

type Adapter struct {
	UsersRepo ports.UserDBService
	log       *logger.Logger
	cache     *redis.RClient
}

func NewAdapter(usersRepo ports.UserDBService) *Adapter {
	return &Adapter{
		UsersRepo: usersRepo,
		cache:     redis.NewRedis(),
	}
}

func (a *Adapter) WithLogger(log *logger.Logger) *Adapter {
	log.With("layer", "core", "name", "usersService")
	a.log = log
	return a
}
