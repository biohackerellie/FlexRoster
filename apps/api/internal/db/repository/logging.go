package db

import (
	"context"

	// errors "api/internal/lib/errors"
	"api/internal/lib/logger"
	str "api/internal/lib/strings"
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
		id, _ := str.StrToInt(r.Log.ID)
		data[i] = &service.Logs{
			Id:     id,
			User:   str.SafeStringPtr(r.Log.User),
			Type:   service.LogType(r.Log.Type),
			Action: r.Log.Action,
		}
	}
	return data, nil
}

func (s *LoggingDBService) AddLog(ctx context.Context, id int, user *string, logType string, action string) error {
	if user != nil {
		s.logger.Info("Inserting log with user ID: ", "user", *user)
	} else {
		s.logger.Info("Inserting log with no user ID")
	}
	err := s.q.CreateLog(ctx, CreateLogParams{
		ID:     str.IntToString(id),
		User:   user,
		Type:   logType,
		Action: action,
	})
	if err != nil {
		return err
	}
	return nil
}

func (s *LoggingDBService) AddLogs(ctx context.Context, logs []*service.Logs) error {
	// tx, err := s.db.Begin(ctx)
	// if err != nil {
	// 	return err
	// }
	// defer errors.ExecuteAndIgnoreErrorF(tx.Rollback, ctx)
	// qtx := s.q.WithTx(tx)
	for _, log := range logs {
		user := &log.User
		safeUser := str.SafeStringPtr(user)
		err := s.q.CreateLog(ctx, CreateLogParams{
			ID:     str.IntToString(log.Id),
			User:   &safeUser,
			Type:   enumToString(log.Type),
			Action: log.Action,
		})
		if err != nil {
			continue
		}

	}
	return nil
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
