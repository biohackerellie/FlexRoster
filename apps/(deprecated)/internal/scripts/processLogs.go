package scripts

import (
	"context"
	"strconv"

	"api/internal/service"
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
	consumer := "log-consumer"
	group := "log-consumer-group"
	streams, err := s.client.Do(ctx, s.client.B().Xreadgroup().Group(group, consumer).Streams().Key("logs").Id(">").Build()).AsXRead()
	if err != nil {
		if err.Error() == "redis nil message" {
			s.log.Info("no logs to process")
			return nil
		}
		return err
	}
	s.log.Info("processing logs", "streams", streams)
	for _, stream := range streams {
		for _, message := range stream {
			logObject := make(map[string]interface{})
			for key, value := range message.FieldValues {
				if key == "timestamp" {
					parsedTimestamp, _ := strconv.Atoi(value)
					logObject[key] = parsedTimestamp
				} else {
					logObject[key] = value
				}
			}

			log := &service.Logs{
				Id:     logObject["id"].(string),
				User:   logObject["user"].(string),
				Type:   service.LogType(logObject["type"].(string)),
				Action: logObject["action"].(string),
			}

			dbLogs = append(dbLogs, log)
		}
		if err := s.logsRepo.AddLogs(ctx, dbLogs); err != nil {
			s.log.Error("error adding logs", "err", err)
			return err
		}
		ids := make([]string, 0, len(stream))
		for _, msg := range stream {
			ids = append(ids, msg.ID)
		}
		r := s.client.Do(ctx, s.client.B().Xack().Key("logs").Group(group).Id(ids...).Build()).Error()
		if r != nil {
			s.log.Error("error acknowledging messages", "err", r)
			return r
		}
	}
	return nil
}
