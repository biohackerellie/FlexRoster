package db

import (
	"context"

	config "api/internal/config"
	"api/internal/lib/logger"
	str "api/internal/lib/strings"
	"api/internal/service"
	request "api/internal/service"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgtype"
)

type DBTXWrapper interface {
	DBTX

	Begin(ctx context.Context) (pgx.Tx, error)
}

type RequestDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *logger.Logger
	config *config.Env
}

func NewRequestDBService(db DBTXWrapper) *RequestDBService {
	return &RequestDBService{
		q:  New(db),
		db: db,
	}
}

func (s *RequestDBService) WithLogs(logger *logger.Logger) *RequestDBService {
	logger.With("name", "db")
	s.logger = logger
	return s
}

func (s *RequestDBService) GetRequests(ctx context.Context, userId string) ([]*request.Request, error) {
	res, err := s.q.UserRequestQuery(ctx, userId)
	if err != nil {
		return nil, err
	}
	response := make([]*request.Request, len(res))
	for i, r := range res {

		mappedRes := &request.Request{
			Id:                 r.Request.ID,
			StudentID:          r.Request.StudentId,
			StudentName:        r.Request.StudentName,
			NewTeacher:         r.Request.NewTeacher,
			NewTeacherName:     r.Request.NewTeacherName,
			CurrentTeacher:     r.Request.CurrentTeacher,
			CurrentTeacherName: r.Request.CurrentTeacherName,
			DateRequested:      r.Request.DateRequested.Time,
			Status:             request.RequestStatus(r.Request.Status),
			Arrived:            str.SafeBoolPointer(r.Request.Arrived),
			Timestamp:          r.Request.Timestamp,
		}

		response[i] = mappedRes
	}
	return response, nil
}

func (s *RequestDBService) GetAllRequests(ctx context.Context) ([]*request.Request, error) {
	res, err := s.q.ALlRequests(ctx)
	if err != nil {
		return nil, err
	}
	response := make([]*request.Request, len(res))
	for i, r := range res {
		mappedRes := &request.Request{
			Id:                 r.ID,
			StudentID:          r.StudentId,
			StudentName:        r.StudentName,
			NewTeacher:         r.NewTeacher,
			NewTeacherName:     r.NewTeacherName,
			CurrentTeacher:     r.CurrentTeacher,
			CurrentTeacherName: r.CurrentTeacherName,
			DateRequested:      r.DateRequested.Time,
			Status:             request.RequestStatus(r.Status),
			Arrived:            str.SafeBoolPointer(r.Arrived),
			Timestamp:          r.Timestamp,
		}
		response[i] = mappedRes
	}
	return response, nil
}

func (s *RequestDBService) NewRequest(ctx context.Context, r *service.Request) error {
	status := false
	statusPtr := &status
	err := s.q.NewRequest(ctx, NewRequestParams{
		Status:             RequestStatus(r.Status),
		StudentName:        r.StudentName,
		StudentId:          r.StudentID,
		DateRequested:      pgtype.Date{Time: r.DateRequested},
		CurrentTeacher:     r.CurrentTeacher,
		CurrentTeacherName: r.CurrentTeacherName,
		NewTeacher:         r.NewTeacher,
		NewTeacherName:     r.NewTeacherName,
		Arrived:            statusPtr,
	})
	return err
}

func (s *RequestDBService) UpdateRequest(ctx context.Context, id int32, status service.RequestStatus) error {
	err := s.q.UpdateRequest(ctx, UpdateRequestParams{
		ID:     id,
		Status: RequestStatus(status),
	})
	return err
}
