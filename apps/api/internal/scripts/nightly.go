package scripts

import (
	"context"
)

func (s *Scripts) Nightly(ctx context.Context) error {
	s.log.Info("Starting nightly script")

	if err := s.AzureUsers(); err != nil {
		return err
	}
	s.log.Info("AzureUsers script complete")
	return nil
}
