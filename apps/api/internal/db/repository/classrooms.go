package db

import (
	"context"
	"fmt"
	"time"

	"api/internal/core/domain/classroom"
	"api/internal/lib/helpers"

	"github.com/jackc/pgx/v5/pgtype"
	"go.uber.org/zap"
)

type ClassroomDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *zap.SugaredLogger
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
	fmt.Println(res)
	response := make([]*classroom.Classroom, len(res))
	for i, r := range res {
		mappedResponse := &classroom.Classroom{
			ID:             r.ID,
			RoomNumber:     r.RoomNumber,
			TeacherName:    r.TeacherName,
			TeacherId:      r.TeacherId.String,
			Comment:        r.Comment.String,
			IsFlex:         r.IsFlex.Bool,
			AvailableDates: r.AvailableDates,
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
	if len(res) == 0 {
		return []*classroom.Availability{
			{
				Date: time.Now(),
			},
		}, nil
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

	result := make([]*classroom.ClassroomWithAvailability, len(classrooms))

	for i, r := range classrooms {
		for _, d := range r.AvailableDates {
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

func (s *ClassroomDBService) GetRoomByTeacherId(ctx context.Context, id string) (*classroom.ClassroomWithAvailable, error) {
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

func (s *ClassroomDBService) RoomsWithRosterCount(ctx context.Context) ([]*classroom.ClassroomWithCount, error) {
	res, err := s.q.ClassroomsWithRosterCount(ctx)
	if err != nil {
		return nil, err
	}
	result := make([]*classroom.ClassroomWithCount, len(res))
	for i, r := range res {
		mappedResponse := &classroom.ClassroomWithCount{
			Classroom: classroom.Classroom{
				ID:          r.ID,
				RoomNumber:  r.RoomNumber,
				TeacherName: r.TeacherName,
				TeacherId:   r.TeacherId.String,
				Comment:     r.Comment.String,
				IsFlex:      r.IsFlex.Bool,
			},
			Count: r.Count,
		}
		result[i] = mappedResponse
	}
	return result, nil
}

func (s *ClassroomDBService) ClassroomSchedule(ctx context.Context, classroomid string) ([]*classroom.Availability, error) {
	res, err := s.q.ClassroomScheduleQuery(ctx, classroomid)
	if err != nil {
		return nil, err
	}
	result := make([]*classroom.Availability, len(res))
	for i, r := range res {
		mappedResponse := &classroom.Availability{
			ID:          r.Availability.ID,
			ClassroomId: r.Availability.ClassroomId,
			Date:        r.Availability.Date.Time,
			Available:   r.Availability.Available,
			TeacherId:   r.Availability.TeacherId.String,
		}
		result[i] = mappedResponse
	}
	return result, nil
}

func (s *ClassroomDBService) CreateComment(ctx context.Context, teacherId string, comment string) error {
	ID := helpers.StringToPGText(teacherId)
	Comment := helpers.StringToPGText(comment)
	args := CreateCommentParams{
		TeacherId: ID,
		Comment:   Comment,
	}
	err := s.q.CreateComment(ctx, args)
	return err
}

func (s *ClassroomDBService) DeleteComment(ctx context.Context, teacherId string) error {
	ID := helpers.StringToPGText(teacherId)
	err := s.q.DeleteComment(ctx, ID)
	return err
}

func (s *ClassroomDBService) DeleteAvailability(ctx context.Context, teacherId string, date time.Time) error {
	ID := helpers.StringToPGText(teacherId)
	DATE := pgtype.Date{}
	DATE.Time = date
	args := DeleteAvailabilityParams{
		TeacherId: ID,
		Date:      DATE,
	}
	err := s.q.DeleteAvailability(ctx, args)
	return err
}

func (s *ClassroomDBService) CreateAvailability(ctx context.Context, args []*classroom.Availability) error {
	var availability []CreateAvailabilityParams
	for _, arg := range args {
		availability = append(availability, CreateAvailabilityParams{
			ID:          arg.ID,
			TeacherId:   helpers.StringToPGText(arg.TeacherId),
			ClassroomId: arg.ClassroomId,
			Date:        pgtype.Date{Time: arg.Date},
			Available:   arg.Available,
		})
	}
	_, err := s.q.CreateAvailability(ctx, availability)
	return err
}
