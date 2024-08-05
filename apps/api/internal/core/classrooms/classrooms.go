package classrooms

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"api/internal/core/domain/classroom"
	arrays "api/internal/lib/arrays"
	"api/internal/lib/helpers"
	stringHelpers "api/internal/lib/strings"
)

var today = time.Now().Format("2006-01-02")

func (a *Adapter) GetClasses(id string) ([]*classroom.ClassroomWithAvailability, error) {
	cacheKey := stringHelpers.CacheKey("StudentCache", id)
	var returnData []*classroom.ClassroomWithAvailability
	cachedData, err := a.cache.Get(cacheKey)
	if err == nil {
		err := json.Unmarshal([]byte(cachedData), &returnData)
		if err != nil {
			return nil, fmt.Errorf("error unmarshalling cached data: %w", err)
		}
	} else {
		classes, err := a.classroomRepo.GetClassrooms(context.Background())
		if err != nil {
			return nil, fmt.Errorf("error getting classrooms: %w", err)
		}
		classesString, err := json.Marshal(classes)
		if err != nil {
			return nil, fmt.Errorf("error marshalling classes: %w", err)
		}
		err = a.cache.Set(cacheKey, classesString, 24*time.Hour)
		if err != nil {
			return nil, fmt.Errorf("error setting cache: %w", err)
		}

		returnData = stringHelpers.FormatClasses(classes, id)
	}
	return returnData, nil
}

func (a *Adapter) GetSpecificClassroom(id string) (*classroom.ClassroomWithAvailable, error) {
	d, err := a.classroomRepo.GetRoomByTeacherId(context.Background(), id)
	if err != nil {
		return nil, fmt.Errorf("error getting classroom: %w", err)
	}
	return d, nil
}

func (a *Adapter) NewComment(id string, comment string) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", id))
	if err != nil {
		a.log.Warnln("Error clearing cache: ", err)
	}
	return a.classroomRepo.CreateComment(context.Background(), id, comment)
}

func (a *Adapter) DeleteComment(id string) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", id))
	if err != nil {
		a.log.Warnln("Error clearing cache: ", err)
	}
	return a.classroomRepo.DeleteComment(context.Background(), id)
}

func (a *Adapter) SetAvailability(teacherId string, classroomId string, dates []time.Time) error {
	err := a.cache.Clear(stringHelpers.CacheKey("TeacherRoster", teacherId))
	if err != nil {
		a.log.Warnln("Error clearing cache: ", err)
	}
	a.log.Debugln("Passed in dates: ", dates)
	ExistingDates := make([]time.Time, 0)

	existing, err := a.classroomRepo.ClassroomSchedule(context.Background(), classroomId)

	if err != nil {
		a.log.Warnln("Error getting classroom schedule: ", err)
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
			return fmt.Errorf("error creating availability: %w", err)
		}

	}
	return nil
}
