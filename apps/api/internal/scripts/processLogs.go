package scripts

import (
	"context"
	"strconv"

	"api/internal/service"

	"github.com/redis/go-redis/v9"
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
	args := &redis.XReadGroupArgs{
		Group:    "log-consumer-group",
		Consumer: "log-consumer",
		Streams:  []string{"logs", ">"},
		Count:    10,
		Block:    2000,
	}
	streams, err := s.cache.ReadStream(args)
	if err != nil {
		return err
	}

	for _, stream := range streams {
		for _, message := range stream.Messages {
			logObject := make(map[string]interface{})
			logObject["id"] = message.ID

			for key, value := range message.Values {
				strValue := value.(string)
				if key == "timestamp" {
					parsedTimestamp, _ := strconv.Atoi(strValue)
					logObject[key] = parsedTimestamp
				} else {
					logObject[key] = strValue
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
		ids := make([]string, 0, len(stream.Messages))
		for _, msg := range stream.Messages {
			ids = append(ids, msg.ID)
		}
		r := s.cache.XAck("logs", "log-consumer", ids...)
		if r != nil {
			s.log.Error("error acknowledging messages", "err", r)
			return r
		}
	}
	return nil
}
