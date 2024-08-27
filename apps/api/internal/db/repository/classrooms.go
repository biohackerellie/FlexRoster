package db

import (
	"context"
	"sync"
	"time"

	errors "api/internal/lib/errors"

	"api/internal/lib/logger"
	classroom "api/internal/service"

	"github.com/jackc/pgx/v5/pgtype"
)

type ClassroomDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *logger.Logger
}

func NewClassroomDBService(db DBTXWrapper) *ClassroomDBService {
	return &ClassroomDBService{
		q:  New(db),
		db: db,
	}
}

func (s *ClassroomDBService) WithLogs(logger *logger.Logger) *ClassroomDBService {
	logger.With("name", "db")
	s.logger = logger
	return s
}

func (s *ClassroomDBService) GetClassrooms(ctx context.Context) ([]*classroom.ClassroomWithAvailable, error) {
	res, err := s.q.ClassroomQuery(ctx)
	if err != nil {
		return nil, err
	}
	var wg sync.WaitGroup

	response := make([]*classroom.ClassroomWithAvailable, len(res))
	ch := make(chan *classroom.ClassroomWithAvailable, len(res))
	for i, r := range res {
		wg.Add(1)
		go func(r ClassroomQueryRow, i int) {
			defer wg.Done()
			s.mapClassroom(r, ch)
		}(r, i)
	}
	for i := 0; i < len(res); i++ {
		response[i] = <-ch
	}
	go func() {
		wg.Wait()
		close(ch)
	}()
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
			Id:          r.ID,
			ClassroomId: r.ClassroomId,
			Date:        r.Date.Time,
			Available:   r.Available,
			TeacherId:   *r.TeacherId,
		}
		response[i] = mappedResponse
	}
	return response, nil
}

func (s *ClassroomDBService) GetTeacherAvailability(ctx context.Context, teacherId string) ([]*classroom.Availability, error) {
	res, err := s.q.TeacherAvailabilityQuery(ctx, &teacherId)
	if err != nil {
		return nil, err
	}
	response := make([]*classroom.Availability, len(res))

	for i, r := range res {
		mappedResponse := &classroom.Availability{
			Id:          r.ID,
			ClassroomId: r.ClassroomId,
			Date:        r.Date.Time,
			Available:   r.Available,
			TeacherId:   *r.TeacherId,
		}
		response[i] = mappedResponse
	}
	return response, nil
}

func (s *ClassroomDBService) TeacherAvailableToday(ctx context.Context, teacherId string) (bool, error) {
	available, err := s.q.TeacherAvailableToday(ctx, &teacherId)
	if err != nil {
		return false, err
	}
	return available, nil
}

func (s *ClassroomDBService) GetRoomByTeacherId(ctx context.Context, id string) (*classroom.Classroom, error) {
	res, err := s.q.RoomByIdQuery(ctx, id)
	if err != nil {
		return nil, err
	}
	return &classroom.Classroom{
		Id:          res.ID,
		RoomNumber:  res.RoomNumber,
		TeacherName: *res.TeacherName,
		TeacherId:   res.TeacherId,
		Available:   res.Available,
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
			Classroom: &classroom.Classroom{
				Id:          r.ID,
				RoomNumber:  r.RoomNumber,
				TeacherName: r.TeacherName,
				TeacherId:   *r.TeacherId,
				Comment:     *r.Comment,
				IsFlex:      *r.IsFlex,
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
			Id:          r.Availability.ID,
			ClassroomId: r.Availability.ClassroomId,
			Date:        r.Availability.Date.Time,
			Available:   r.Availability.Available,
			TeacherId:   *r.Availability.TeacherId,
		}
		result[i] = mappedResponse
	}
	return result, nil
}

func (s *ClassroomDBService) CreateComment(ctx context.Context, teacherId string, comment string) error {
	args := CreateCommentParams{
		TeacherId: &teacherId,
		Comment:   &comment,
	}
	err := s.q.CreateComment(ctx, args)
	return err
}

func (s *ClassroomDBService) DeleteComment(ctx context.Context, teacherId string) error {
	err := s.q.DeleteComment(ctx, &teacherId)
	return err
}

func (s *ClassroomDBService) DeleteAvailability(ctx context.Context, teacherId string, date time.Time) error {
	DATE := pgtype.Date{}
	DATE.Time = date
	args := DeleteAvailabilityParams{
		TeacherId: &teacherId,
		Date:      DATE,
	}
	err := s.q.DeleteAvailability(ctx, args)
	return err
}

func (s *ClassroomDBService) CreateAvailability(ctx context.Context, args []*classroom.Availability) error {
	var availability []CreateAvailabilityParams
	for _, arg := range args {
		availability = append(availability, CreateAvailabilityParams{
			ID:          arg.Id,
			TeacherId:   &arg.TeacherId,
			ClassroomId: arg.ClassroomId,
			Date:        pgtype.Date{Time: arg.Date},
			Available:   arg.Available,
		})
	}
	_, err := s.q.CreateAvailability(ctx, availability)
	return err
}

func (s *ClassroomDBService) mapClassroom(r ClassroomQueryRow, ch chan<- *classroom.ClassroomWithAvailable) {
	ctx := context.Background()
	dates := make([]time.Time, 0)
	res, err := s.q.ClassroomScheduleQuery(ctx, r.ID)
	if err != nil {
		s.logger.Warn("Error getting classroom schedule: ", "err", err)
	}

	for _, date := range res {
		dates = append(dates, date.Availability.Date.Time)
	}

	mappedResponse := &classroom.ClassroomWithAvailable{
		Classroom: &classroom.Classroom{
			Id:          r.ID,
			RoomNumber:  r.RoomNumber,
			TeacherName: r.TeacherName,
			TeacherId:   *r.TeacherId,
			Comment:     *r.Comment,
			IsFlex:      *r.IsFlex,
			Available:   r.Available,
		},
		AvailableDates: dates,
	}
	ch <- mappedResponse
}

func (s *ClassroomDBService) NewClassroomTx(ctx context.Context, classrooms []*classroom.Classroom) error {
	tx, err := s.db.Begin(ctx)
	if err != nil {
		return err
	}
	defer errors.ExecuteAndIgnoreErrorF(tx.Rollback, ctx)
	qtx := s.q.WithTx(tx)
	flex := true
	flexPtr := &flex
	for _, classroom := range classrooms {
		err := qtx.NewClassroom(ctx, NewClassroomParams{
			ID:          classroom.Id,
			RoomNumber:  classroom.RoomNumber,
			TeacherName: classroom.TeacherName,
			TeacherId:   &classroom.TeacherId,
			IsFlex:      flexPtr,
		})
		if err != nil {
			return err
		}
	}
	return tx.Commit(ctx)
}
