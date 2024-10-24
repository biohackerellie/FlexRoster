package db

import (
	"context"
	"sync"
	"time"

	errors "api/internal/lib/errors"

	helpers "api/internal/lib/helpers"
	"api/internal/lib/logger"
	str "api/internal/lib/strings"
	classroom "api/internal/service"

	"github.com/google/uuid"
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

func (s *ClassroomDBService) GetClassroomsNoDates(ctx context.Context) ([]*classroom.Classroom, error) {
	res, err := s.q.ClassroomQuery(ctx)
	if err != nil {
		return nil, err
	}
	response := make([]*classroom.Classroom, len(res))
	for i, r := range res {
		mappedResponse := &classroom.Classroom{
			Id:          r.ID,
			RoomNumber:  r.RoomNumber,
			TeacherName: r.TeacherName,
			TeacherId:   str.SafeStringPtr(r.TeacherId),
			Comment:     str.SafeStringPtr(r.Comment),
			IsFlex:      str.SafeBoolPointer(r.IsFlex),
			Available:   r.Available,
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
			Id:          r.ID,
			ClassroomId: r.ClassroomId,
			Date:        r.Date.Time,
			Available:   r.Available,
			TeacherId:   str.SafeStringPtr(r.TeacherId),
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
			TeacherId:   str.SafeStringPtr(r.TeacherId),
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

func (s *ClassroomDBService) GetRoomByTeacherId(ctx context.Context, teacherId string) (*classroom.Classroom, error) {
	res, err := s.q.RoomByIdQuery(ctx, &teacherId)
	if err != nil {
		return nil, err
	}
	isFlex := true
	return &classroom.Classroom{
		Id:          res.ID,
		RoomNumber:  res.RoomNumber,
		TeacherName: res.TeacherName,
		TeacherId:   *res.TeacherId,
		Comment:     str.SafeStringPtr(res.Comment),
		Available:   res.Available,
		IsFlex:      str.SafeBoolPointer(&isFlex),
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
				TeacherId:   str.SafeStringPtr(r.TeacherId),
				Comment:     str.SafeStringPtr(r.Comment),
				IsFlex:      str.SafeBoolPointer(r.IsFlex),
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
			TeacherId:   str.SafeStringPtr(r.Availability.TeacherId),
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

func (s *ClassroomDBService) DeleteAvailability(ctx context.Context, id string) error {
	err := s.q.DeleteAvailability(ctx, id)
	return err
}

func (s *ClassroomDBService) CreateAvailability(ctx context.Context, args []*classroom.Availability) error {
	for _, arg := range args {
		date := helpers.DateToPGDate(arg.Date)
		s.logger.Info("CreateAvailability", "date", date)
		err := s.q.CreateAvailability(ctx, CreateAvailabilityParams{
			ID:          arg.Id,
			TeacherId:   &arg.TeacherId,
			ClassroomId: arg.ClassroomId,
			Date:        date,
			Available:   arg.Available,
		})
		if err != nil {
			return err
		}

	}
	return nil
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
			TeacherId:   str.SafeStringPtr(r.TeacherId),
			Comment:     str.SafeStringPtr(r.Comment),
			IsFlex:      str.SafeBoolPointer(r.IsFlex),
			Available:   r.Available,
		},
		AvailableDates: dates,
	}
	ch <- mappedResponse
}

func (s *ClassroomDBService) NewClassroom(ctx context.Context, teacherId string, roomNumber string, teacherName string) error {
	flex := true
	flexPtr := &flex
	id := uuid.New().String()
	err := s.q.NewClassroom(ctx, NewClassroomParams{
		ID:          id,
		RoomNumber:  roomNumber,
		TeacherName: teacherName,
		TeacherId:   &teacherId,
		IsFlex:      flexPtr,
	})
	return err
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

func (s *ClassroomDBService) UpdateClassroomTx(ctx context.Context, classrooms []*classroom.Classroom) error {
	tx, err := s.db.Begin(ctx)
	if err != nil {
		return err
	}
	defer errors.ExecuteAndIgnoreErrorF(tx.Rollback, ctx)
	qtx := s.q.WithTx(tx)
	for _, classroom := range classrooms {
		err := qtx.UpdateClassroom(ctx, UpdateClassroomParams{
			ID:         classroom.Id,
			RoomNumber: classroom.RoomNumber,
		})
		if err != nil {
			return err
		}
	}
	return tx.Commit(ctx)
}

func (s *ClassroomDBService) DeleteClassroomTx(ctx context.Context, ids []string) error {
	tx, err := s.db.Begin(ctx)
	if err != nil {
		return err
	}
	defer errors.ExecuteAndIgnoreErrorF(tx.Rollback, ctx)
	qtx := s.q.WithTx(tx)
	for _, id := range ids {
		err := qtx.DeleteClassrooms(ctx, id)
		if err != nil {
			return err
		}
	}
	return tx.Commit(ctx)
}

func (s *ClassroomDBService) GetFlexClasses(ctx context.Context) ([]*classroom.Classroom, error) {
	res, err := s.q.GetFlexClassrooms(ctx)
	if err != nil {
		return nil, err
	}
	response := make([]*classroom.Classroom, len(res))
	for i, r := range res {
		mappedResponse := &classroom.Classroom{
			Id:          r.ID,
			RoomNumber:  r.RoomNumber,
			TeacherName: r.TeacherName,
			TeacherId:   str.SafeStringPtr(r.TeacherId),
			Comment:     str.SafeStringPtr(r.Comment),
			IsFlex:      str.SafeBoolPointer(r.IsFlex),
		}
		response[i] = mappedResponse
	}

	return response, nil
}
