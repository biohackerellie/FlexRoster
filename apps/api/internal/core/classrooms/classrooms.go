package classrooms

import (
	"context"
	"sync"
	"time"

	arrays "api/internal/lib/arrays"
	"api/internal/lib/helpers"
	stringHelpers "api/internal/lib/strings"
	"api/internal/service"
)

var today = time.Now().Format("2006-01-02")

func (a *Adapter) GetClasses(ctx context.Context, id string) ([]*service.ClassroomWithChatID, error) {
	var returnData []*service.ClassroomWithChatID
	classes, err := a.classroomRepo.GetClassrooms(context.Background())
	if err != nil {
		return nil, err
	}
	var wg sync.WaitGroup
	ch := make(chan *service.ClassroomWithChatID, len(classes))

	for _, c := range classes {
		wg.Add(1)
		go func(c *service.ClassroomWithAvailable) {
			defer wg.Done()
			formattedClass := stringHelpers.FormatClasses(c, id)
			ch <- formattedClass
		}(c)
	}
	go func() {
		wg.Wait()
		close(ch)
	}()

	for formattedClass := range ch {
		// if formattedClass != nil {
		returnData = append(returnData, formattedClass)
		// }
	}

	return returnData, nil
}

func (a *Adapter) GetSpecificClassroom(ctx context.Context, id string) (*service.Classroom, error) {
	d, err := a.classroomRepo.GetRoomByTeacherId(ctx, id)
	if err != nil {
		a.log.Error("Error getting specific classroom: ", "err", err)
		return nil, err
	}
	return d, nil
}

func (a *Adapter) NewComment(ctx context.Context, id string, comment string) error {
	return a.classroomRepo.CreateComment(ctx, id, comment)
}

func (a *Adapter) DeleteComment(ctx context.Context, id string) error {
	return a.classroomRepo.DeleteComment(ctx, id)
}

func (a *Adapter) GetAvailability(ctx context.Context, id string) ([]*service.Availability, error) {
	dbData, err := a.classroomRepo.GetTeacherAvailability(ctx, id)
	if err != nil {
		return nil, err
	}
	if len(dbData) == 0 {
		return []*service.Availability{}, nil
	}
	return dbData, nil
}

func (a *Adapter) SetAvailability(ctx context.Context, teacherId string, classroomId string, dates []time.Time) error {
	a.log.Debug("Passed in dates: ", "data", dates)
	ExistingDates := make([]*service.Availability, 0)
	existing, err := a.classroomRepo.ClassroomSchedule(ctx, classroomId)
	existingSet := arrays.EZSet(existing, func(dates *service.Availability) time.Time {
		return dates.Date
	})
	newDatesSet := arrays.EZSet(dates, func(dates time.Time) time.Time {
		return dates
	})

	if err != nil {
		a.log.Warn("Error getting service.schedule: ", err)
	} else {
		for _, date := range existing {
			ExistingDates = append(ExistingDates, date)
		}
	}
	availability := make([]*service.Availability, 0)
	for _, date := range ExistingDates {
		if _, ok := newDatesSet[date.Date]; !ok {
			a.classroomRepo.DeleteAvailability(ctx, date.Id)
		}
	}
	for _, date := range dates {
		if _, ok := existingSet[date]; !ok {
			availability = append(availability, &service.Availability{
				TeacherId:   teacherId,
				ClassroomId: classroomId,
				Date:        date,
				Id:          helpers.GenRandomKeyString(10),
				Available:   true,
			})
		}
	}
	if len(availability) > 0 {
		err = a.classroomRepo.CreateAvailability(context.Background(), availability)
		if err != nil {
			a.log.Error("Error creating availability: ", "err", err)
		}

	}
	return nil
}

func (a *Adapter) DeleteAvailability(ctx context.Context, id string) error {
	return a.classroomRepo.DeleteAvailability(context.Background(), id)
}

func (a *Adapter) RoomsWithCount(ctx context.Context) ([]*service.ClassroomWithCount, error) {
	res, err := a.classroomRepo.RoomsWithRosterCount(ctx)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func (a *Adapter) CreateClassroom(ctx context.Context, teacherId string, roomNumber string, teacherName string) error {
	return a.classroomRepo.NewClassroom(ctx, teacherId, roomNumber, teacherName)
}
