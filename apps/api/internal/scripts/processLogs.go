package scripts

// import (
// 	"context"

// 	"api/internal/redis"
// 	"api/internal/service"
// )

// type Log struct {
// 	ID     string
// 	Values map[string]interface{}
// }

// type RawLog struct {
// 	Stream string
// 	Logs   []Log
// }

// func (s *Scripts) ProcessLogs(ctx context.Context) error {
// 	var rawLogs []RawLog
// 	dbLogs := make([]service.Logs, 0, 10)
// 	streams, err := s.cache.ReadStream(&redis.XReadGroupArgs{
// 		Group:    "log-consumer-group",
// 		Consumer: "log-consumer",
// 		Streams:  []string{"logs", ">"},
// 		Count:    10,
// 		Block:    2000,
// 	})
// 	if err != nil {
// 		s.log.Error("error reading stream", "err", err)
// 		return err
// 	}
// 	for _, stream := range streams {
// 		var logs []Log
// 		for _, message := range stream.Messages {
// 			log := Log{
// 				ID:     message.ID,
// 				Values: message.Values,
// 			}
// 			logs = append(logs, log)
// 		}
// 		rawLog := RawLog{
// 			Stream: stream.Stream,
// 			Logs:   logs,
// 		}
// 		rawLogs = append(rawLogs, rawLog)
// 	}

// 	for _, rawLog := range rawLogs {
// 		for _, log := range rawLog.Logs {
// 			dbLog := service.Logs{
// 				ID: log.ID,
// 				Values: log.Values{
// 					"stream": rawLog.Stream,
// 				},
// 			}
// 			dbLogs = append(dbLogs, dbLog)
// 		}
// 	}
// }
