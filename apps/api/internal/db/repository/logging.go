package db

import (
	"context"

	"api/internal/lib/helpers"
	"api/internal/lib/logger"
	"api/internal/service"
)

type LoggingDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *logger.Logger
}

func NewLoggingBService(db DBTXWrapper) *LoggingDBService {
	return &LoggingDBService{
		q:  New(db),
		db: db,
	}
}

func (s *LoggingDBService) WithLogs(logger *logger.Logger) *LoggingDBService {
	logger.With("name", "db")
	s.logger = logger
	return s
}

func (s *LoggingDBService) GetAllLogs(ctx context.Context) ([]*service.Logs, error) {
	res, err := s.q.AllLogsQuery(ctx)
	if err != nil {
		return nil, err
	}
	data := make([]*service.Logs, len(res))

	for i, r := range res {
		data[i] = &service.Logs{
			Id:     r.Log.ID,
			User:   r.Log.User.String,
			Type:   service.LogType(r.Log.Type),
			Action: r.Log.Action,
		}
	}
	return data, nil
}

func (s *LoggingDBService) AddLog(ctx context.Context, id string, user string, logType string, action string) error {
	err := s.q.CreateLog(ctx, CreateLogParams{
		ID:     id,
		User:   helpers.StringToPGText(user),
		Type:   logType,
		Action: action,
	})
	if err != nil {
		return err
	}
	return nil
}

func (s *LoggingDBService) AddLogs(ctx context.Context, logs []*service.Logs) error {
	tx, err := s.db.Begin(ctx)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)
	for _, log := range logs {
		err := s.q.CreateLog(ctx, CreateLogParams{
			ID:     log.Id,
			User:   helpers.StringToPGText(log.User),
			Type:   enumToString(log.Type),
			Action: log.Action,
		})
		if err != nil {
			return err
		}

	}
	return tx.Commit(ctx)
}

func enumToString(value service.LogType) string {
	switch value {
	case service.LogType_error:
		return "error"
	case service.LogType_message:
		return "message"
	case service.LogType_request:
		return "request"
	case service.LogType_attendance:
		return "attendance"
	default:
		return "error"
	}
}
