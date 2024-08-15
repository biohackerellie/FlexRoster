package classrooms

import (
	"context"
	"encoding/json"
	"fmt"
	"sync"
	"time"

	arrays "api/internal/lib/arrays"
	"api/internal/lib/helpers"
	stringHelpers "api/internal/lib/strings"
	"api/internal/service"
)

var today = time.Now().Format("2006-01-02")

func (a *Adapter) GetClasses(ctx context.Context, id string) ([]*service.ClassroomWithChatID, error) {
	cacheKey := stringHelpers.CacheKey("StudentCache", id)
	var returnData []*service.ClassroomWithChatID
	cachedData, err := a.cache.Get(cacheKey)
	if err == nil {
		err := json.Unmarshal([]byte(cachedData), &returnData)
		if err != nil {
			a.log.Error("error unmarshalling cached data: ", "err", err)
			return nil, fmt.Errorf("error unmarshalling cached data: %w", err)
		}
		return returnData, nil
	}
	classes, err := a.classroomRepo.GetClassrooms(context.Background())
	if err != nil {
		return nil, fmt.Errorf("error getting service.: %w", err)
	}
	fmt.Println("Classes: ", classes)
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

	classesString, err := json.Marshal(returnData)
	if err != nil {
		a.log.Error("error marshalling classes: ", "err", err)
		return nil, err
	}
	err = a.cache.Set(cacheKey, classesString, 10*time.Minute)
	if err != nil {
		return nil, fmt.Errorf("error setting cache: %w", err)
	}

	return returnData, nil
}

func (a *Adapter) GetSpecificClassroom(ctx context.Context, id string) (*service.Classroom, error) {
	d, err := a.classroomRepo.GetRoomByTeacherId(context.Background(), id)
	if err != nil {
		return nil, fmt.Errorf("error getting service. %w", err)
	}
	return d, nil
}

func (a *Adapter) NewComment(ctx context.Context, id string, comment string) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", id))
	if err != nil {
		a.log.Warn("Error clearing cache: ", err)
	}
	return a.classroomRepo.CreateComment(context.Background(), id, comment)
}

func (a *Adapter) DeleteComment(ctx context.Context, id string) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", id))
	if err != nil {
		a.log.Warn("Error clearing cache: ", err)
	}
	return a.classroomRepo.DeleteComment(context.Background(), id)
}

func (a *Adapter) GetAvailability(ctx context.Context, id string) ([]*service.Availability, error) {
	result, err := a.cache.Get(stringHelpers.CacheKey("TeacherAvailability", id))
	if err == nil {
		var returnData []*service.Availability
		err := json.Unmarshal([]byte(result), &returnData)
		if err != nil {
			return nil, err
		}
		return returnData, nil
	}
	dbData, err := a.classroomRepo.GetTeacherAvailability(context.Background(), id)
	if err != nil {
		return nil, err
	}
	if len(dbData) == 0 {
		return []*service.Availability{}, nil
	}
	err = a.cache.Set(stringHelpers.CacheKey("TeacherAvailability", id), dbData, 10*time.Minute)
	if err != nil {
		a.log.Warn("Error setting cache: ", err)
	}
	return dbData, nil
}

func (a *Adapter) SetAvailability(ctx context.Context, teacherId string, classroomId string, dates []time.Time) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", teacherId))
	if err != nil {
		a.log.Warn("Error clearing cache: ", err)
	}
	a.log.Debug("Passed in dates: ", dates)
	ExistingDates := make([]time.Time, 0)

	existing, err := a.classroomRepo.ClassroomSchedule(context.Background(), classroomId)

	if err != nil {
		a.log.Warn("Error getting service.schedule: ", err)
	} else {
		for _, date := range existing {
			ExistingDates = append(ExistingDates, date.Date)
		}
	}
	availability := make([]*service.Availability, 0)
	for _, date := range dates {
		if !arrays.EZContains(ExistingDates, date) {
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

func (a *Adapter) DeleteAvailability(ctx context.Context, id string, date time.Time) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", id))
	if err != nil {
		a.log.Warn("Error clearing cache: ", err)
	}
	return a.classroomRepo.DeleteAvailability(context.Background(), id, date)
}

func (a *Adapter) RoomsWithCount(ctx context.Context) ([]*service.ClassroomWithCount, error) {
	rooms, err := a.cache.Get(stringHelpers.CacheKey("Rooms", "All"))
	if err == nil {
		var returnData []*service.ClassroomWithCount
		err := json.Unmarshal([]byte(rooms), &returnData)
		if err != nil {
			return nil, fmt.Errorf("error unmarshalling cached data: %w", err)
		}
		return returnData, nil
	}
	res, err := a.classroomRepo.RoomsWithRosterCount(context.Background())
	if err != nil {
		return nil, fmt.Errorf("error getting service. with roster count: %w", err)
	}
	roomsString, err := json.Marshal(res)
	if err != nil {
		return nil, fmt.Errorf("error marshalling classes: %w", err)
	}
	err = a.cache.Set(stringHelpers.CacheKey("Rooms", "All"), roomsString, 10*time.Minute)
	if err != nil {
		return nil, fmt.Errorf("error setting cache: %w", err)
	}
	return res, nil
}
