package db

import (
	"context"
	"time"

	config "api/internal/config"
	"api/internal/core/domain/classroom"
	"github.com/jackc/pgx/v5/pgtype"

	"go.uber.org/zap"
)

type ClassroomDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *zap.SugaredLogger
	config *config.Env
}

func NewClassroomDBService(db DBTXWrapper) *ClassroomDBService {
	return &ClassroomDBService{
		q:  New(db),
		db: db,
	}
}

func (s *ClassroomDBService) WithLogs(logger *zap.SugaredLogger) *ClassroomDBService {
	s.logger = logger.With(
		"name", "db",
	)
	return s
}

func (s *ClassroomDBService) GetClassrooms(ctx context.Context) ([]*classroom.Classroom, error) {
	res, err := s.q.ClassroomQuery(ctx)
	if err != nil {
		return nil, err
	}
	response := make([]*classroom.Classroom, len(res))
	for i, r := range res {
		mappedResponse := &classroom.Classroom{
			ID:          r.ID,
			RoomNumber:  r.RoomNumber,
			TeacherName: r.TeacherName,
			TeacherId:   r.TeacherId.String,
			Comment:     r.Comment.String,
			IsFlex:      r.IsFlex.Bool,
		}
		response[i] = mappedResponse
	}
	return response, nil
}

func (s *ClassroomDBService) GetAvailability(ctx context.Context) ([]*classroom.Availability, error) {
	res, err := s.q.AvailabilityQuery(ctx)
	if err != nil {
		return nil, err
	}
	response := make([]*classroom.Availability, len(res))
	for i, r := range res {
		mappedResponse := &classroom.Availability{
			ID:          r.ID,
			ClassroomId: r.ClassroomId,
			Date:        r.Date.Time,
			Available:   r.Available,
			TeacherId:   r.TeacherId.String,
		}
		response[i] = mappedResponse
	}
	return response, nil
}

func (s *ClassroomDBService) AggregateClassroomData(ctx context.Context) ([]*classroom.ClassroomWithAvailability, error) {
	classrooms, err := s.GetClassrooms(ctx)
	if err != nil {
		return nil, err
	}
	dates, err := s.GetAvailability(ctx)
	if err != nil {
		return nil, err
	}
	result := make([]*classroom.ClassroomWithAvailability, len(classrooms))

	for i, r := range classrooms {
		var availableDates []time.Time
		for _, d := range dates {
			if d.ClassroomId == r.ID {
				availableDates = append(availableDates, d.Date)
			}
		}
		result[i] = &classroom.ClassroomWithAvailability{
			Classroom:      *r,
			AvailableDates: availableDates,
		}
	}
	return result, nil
}

func (s *ClassroomDBService) TeacherAvailableToday(ctx context.Context, teacherId string) (bool, error) {
	id := pgtype.Text{}
	id.String = teacherId
	available, err := s.q.TeacherAvailableToday(ctx, id)
	if err != nil {
		return false, err
	}
	return available, nil
}

func (s *ClassroomDBService) GetRoomById(ctx context.Context, id string) (*classroom.ClassroomWithAvailable, error) {
	res, err := s.q.RoomByIdQuery(ctx, id)
	if err != nil {
		return nil, err
	}
	return &classroom.ClassroomWithAvailable{
		Classroom: classroom.Classroom{
			ID:          res.ID,
			RoomNumber:  res.RoomNumber,
			TeacherName: res.TeacherName.String,
			TeacherId:   res.TeacherId,
		},
		Available: res.Available,
	}, nil
}
