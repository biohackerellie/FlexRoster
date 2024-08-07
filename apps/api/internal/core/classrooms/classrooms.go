package classrooms

import (
	"context"
	"encoding/json"
	"fmt"
	"sync"
	"time"

	"api/internal/core/domain/classroom"
	arrays "api/internal/lib/arrays"
	"api/internal/lib/helpers"
	stringHelpers "api/internal/lib/strings"
)

var today = time.Now().Format("2006-01-02")

func (a *Adapter) GetClasses(id string) ([]*classroom.ClassroomWithChatID, error) {
	cacheKey := stringHelpers.CacheKey("StudentCache", id)
	var returnData []*classroom.ClassroomWithChatID
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
		return nil, fmt.Errorf("error getting classrooms: %w", err)
	}
	fmt.Println("Classes: ", classes)
	var wg sync.WaitGroup
	ch := make(chan *classroom.ClassroomWithChatID, len(classes))

	for _, c := range classes {
		wg.Add(1)
		go func(c *classroom.ClassroomWithAvailable) {
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

func (a *Adapter) GetSpecificClassroom(id string) (*classroom.Classroom, error) {
	d, err := a.classroomRepo.GetRoomByTeacherId(context.Background(), id)
	if err != nil {
		return nil, fmt.Errorf("error getting classroom: %w", err)
	}
	return d, nil
}

func (a *Adapter) NewComment(id string, comment string) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", id))
	if err != nil {
		a.log.Warn("Error clearing cache: ", err)
	}
	return a.classroomRepo.CreateComment(context.Background(), id, comment)
}

func (a *Adapter) DeleteComment(id string) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", id))
	if err != nil {
		a.log.Warn("Error clearing cache: ", err)
	}
	return a.classroomRepo.DeleteComment(context.Background(), id)
}

func (a *Adapter) GetAvailability(id string) ([]*classroom.Availability, error) {
	result, err := a.cache.Get(stringHelpers.CacheKey("TeacherAvailability", id))
	if err == nil {
		var returnData []*classroom.Availability
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
		return []*classroom.Availability{}, nil
	}
	err = a.cache.Set(stringHelpers.CacheKey("TeacherAvailability", id), dbData, 10*time.Minute)
	if err != nil {
		a.log.Warn("Error setting cache: ", err)
	}
	return dbData, nil
}

func (a *Adapter) SetAvailability(teacherId string, classroomId string, dates []time.Time) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", teacherId))
	if err != nil {
		a.log.Warn("Error clearing cache: ", err)
	}
	a.log.Debug("Passed in dates: ", dates)
	ExistingDates := make([]time.Time, 0)

	existing, err := a.classroomRepo.ClassroomSchedule(context.Background(), classroomId)

	if err != nil {
		a.log.Warn("Error getting classroom schedule: ", err)
	} else {
		for _, date := range existing {
			ExistingDates = append(ExistingDates, date.Date)
		}
	}
	availability := make([]*classroom.Availability, 0)
	for _, date := range dates {
		if !arrays.EZContains(ExistingDates, date) {
			availability = append(availability, &classroom.Availability{
				TeacherId:   teacherId,
				ClassroomId: classroomId,
				Date:        date,
				ID:          helpers.GenRandomKeyString(10),
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

func (a *Adapter) RoomsWithCount() ([]*classroom.ClassroomWithCount, error) {
	rooms, err := a.cache.Get(stringHelpers.CacheKey("Rooms", "All"))
	if err == nil {
		var returnData []*classroom.ClassroomWithCount
		err := json.Unmarshal([]byte(rooms), &returnData)
		if err != nil {
			return nil, fmt.Errorf("error unmarshalling cached data: %w", err)
		}
		return returnData, nil
	}
	res, err := a.classroomRepo.RoomsWithRosterCount(context.Background())
	if err != nil {
		return nil, fmt.Errorf("error getting classrooms with roster count: %w", err)
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
