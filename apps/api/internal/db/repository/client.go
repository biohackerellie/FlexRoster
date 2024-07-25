package db

import (
	"context"

	config "api/internal/config"

	"go.uber.org/zap"

	"github.com/jackc/pgx/v5"
)

type DBTXWrapper interface {
	DBTX

	Begin(ctx context.Context) (pgx.Tx, error)
}

type DBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *zap.SugaredLogger
	config *config.Config
}

func NewDB(db DBTXWrapper) *DBService {
	return &DBService{
		q:  New(db),
		db: db,
	}
}

func (s *DBService) WithLogs(logger *zap.SugaredLogger) *DBService {
	s.logger = logger.With(
		"name", "db",
	)
	return s
}
