package db

import (
	"context"
	"time"

	config "api/internal/config"
	"api/internal/lib/logger"
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
			Arrived:            r.Request.Arrived.Bool,
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
			Arrived:            r.Arrived.Bool,
			Timestamp:          r.Timestamp,
		}
		response[i] = mappedRes
	}
	return response, nil
}

func (s *RequestDBService) NewRequest(ctx context.Context, studentName string, studentID string, requestStatus RequestStatus, dateRequested time.Time, newTeacher string, newTeacherName string, currentTeacher string, currentTeacherName string) error {
	err := s.q.NewRequest(ctx, NewRequestParams{
		Status:             requestStatus,
		StudentName:        studentName,
		StudentId:          studentID,
		DateRequested:      pgtype.Date{Time: dateRequested},
		CurrentTeacher:     currentTeacher,
		CurrentTeacherName: currentTeacherName,
		NewTeacher:         newTeacher,
		NewTeacherName:     newTeacherName,
		Arrived:            pgtype.Bool{Bool: false},
	})
	return err
}

func (s *RequestDBService) UpdateRequest(ctx context.Context, id int32, status RequestStatus) error {
	err := s.q.UpdateRequest(ctx, UpdateRequestParams{
		ID:     id,
		Status: status,
	})
	return err
}
