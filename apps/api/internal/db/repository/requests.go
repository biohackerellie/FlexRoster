package db

import (
	"context"

	config "api/internal/config"
	"api/internal/core/domain/request"
	"api/internal/lib/errors"
	"go.uber.org/zap"

	"github.com/jackc/pgx/v5"
)

type DBTXWrapper interface {
	DBTX

	Begin(ctx context.Context) (pgx.Tx, error)
}

type RequestDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *zap.SugaredLogger
	config *config.Env
}

func NewRequestDBService(db DBTXWrapper) *RequestDBService {
	return &RequestDBService{
		q:  New(db),
		db: db,
	}
}

func (s *RequestDBService) WithLogs(logger *zap.SugaredLogger) *RequestDBService {
	s.logger = logger.With(
		"name", "db",
	)
	return s
}

func (s *RequestDBService) AllStudentRequests(ctx context.Context, studentid string) ([]*request.Request, error) {
	res, err := s.q.AllStudentRequests(ctx, studentid)
	if err != nil {
		return nil, err
	}
	response := make([]*request.Request, len(res))
	for i, r := range res {

		mappedRes := &request.Request{
			ID:                 r.ID,
			StudentID:          r.StudentId,
			StudentName:        r.StudentName,
			NewTeacher:         r.NewTeacher,
			NewTeacherName:     r.NewTeacherName,
			CurrentTeacher:     r.CurrentTeacher,
			CurrentTeacherName: r.CurrentTeacherName,
			DateRequested:      r.DateRequested.Time,
			Status:             request.RequestStatus(r.Status),
			Arrived:            r.Arrived.Bool,
			Timestamp:          r.Timestamp,
		}

		response[i] = mappedRes
	}
	return response, nil
}

func (s *RequestDBService) GetAllStudentsRequests(ctx context.Context)
