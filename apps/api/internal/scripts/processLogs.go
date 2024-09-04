package scripts

import (
	"api/internal/service"
	"context"
	"encoding/json"
	"strconv"
)

// type Log struct {
// 	ID     string
// 	Values map[string]interface{}
// }

// type RawLog struct {
// 	Stream string
// 	Logs   []Log
// }

func (s *Scripts) ProcessLogs(ctx context.Context) error {
	dbLogs := make([]*service.Logs, 0, 10)

	cacheLogs, err := s.cache.ZRange("logs")
	if err != nil {
		s.log.Error("error getting logs from cache", "err", err)
		return err
	}
	for _, logStr := range cacheLogs {
		var log service.Logs
		err = json.Unmarshal([]byte(logStr), &log)
		if err != nil {
			s.log.Error("error unmarshalling log", "err", err)
			return err
		}
		dbLogs = append(dbLogs, &log)
	}

	err = s.logsRepo.AddLogs(ctx, dbLogs)
	if err != nil {
		s.log.Error("error adding logs to db", "err", err)
		return err
	}

	err = s.cache.Clear("logs")
	if err != nil {
		s.log.Error("error clearing logs from cache", "err", err)
		return err
	}
	s.log.Info("logs processed", "count", strconv.Itoa(len(dbLogs)))
	return nil
}
