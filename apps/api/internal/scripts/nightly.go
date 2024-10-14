package scripts

import (
	"context"
	"time"
)

func (s *Scripts) Nightly(ctx context.Context) error {
	startTime := time.Now()
	s.log.Info("Starting nightly script")
	s.log.Info("Processing logs")
	if err := s.ProcessLogs(ctx); err != nil {
		s.log.Error("Error processing logs", "error", err)
	}
	s.log.Info("Logs processed")
	if err := s.AzureUsers(); err != nil {
		return err
	}
	s.log.Info("AzureUsers script complete")

	s.log.Info("Syncing Classroom data")
	if err := s.SyncClassrooms(ctx); err != nil {
		return err
	}
	s.log.Info("Classroom data synced")
	s.log.Info("Syncing Student data")
	if err := s.SyncStudents(ctx); err != nil {
		return err
	}
	s.log.Info("Student data synced")
	s.log.Info("Removing duplicates")
	if err := s.RemoveDuplicates(ctx); err != nil {
		return err
	}
	today := time.Now().Weekday()
	if today == time.Sunday {
		s.log.Info("Today is Sunday, clearing all cache")
		s.cache.FlushAll()
	}
	executionTime := time.Since(startTime)
	s.log.Info("Nightly script complete", "executionTime", executionTime)
	return nil
}
