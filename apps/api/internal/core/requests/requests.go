package requests

import (
	"context"
	"encoding/json"
	"math/rand/v2"
	"sync"
	"time"

	stringHelpers "api/internal/lib/strings"
	"api/internal/service"
)

func (a *Adapter) GetRequests(ctx context.Context, userId string) ([]*service.Request, error) {
	var requests []*service.Request
	res, err := a.cache.Get(stringHelpers.CacheKey("requests", userId))
	if err == nil {
		err = json.Unmarshal([]byte(res), &requests)
		if err != nil {
			a.log.Error("Error unmarshalling requests from cache")
		}
	} else {
		requests, err := a.requests.GetRequests(ctx, userId)
		if err != nil {
			a.log.Error("Error getting requests from db", "err", err)
		}
		requestsString, _ := json.Marshal(requests)
		err = a.cache.Set(stringHelpers.CacheKey("requests", userId), requestsString, 10*time.Minute)
		if err != nil {
			a.log.Error("Error setting requests in cache", "err", err)
		}
	}
	return requests, nil
}

func (a *Adapter) GetAllRequests(ctx context.Context) ([]*service.Request, error) {
	var requests []*service.Request
	res, err := a.cache.Get(stringHelpers.CacheKey("allRequests", "cache"))
	if err == nil {
		err = json.Unmarshal([]byte(res), &requests)
		if err != nil {
			a.log.Error("Error unmarshalling requests from cache")
		}
	} else {
		requests, err := a.requests.GetAllRequests(ctx)
		if err != nil {
			a.log.Error("Error getting requests from db", "err", err)
		}
		requestsString, _ := json.Marshal(requests)
		err = a.cache.Set(stringHelpers.CacheKey("allRequests", "cache"), requestsString, 10*time.Minute)
		if err != nil {
			a.log.Error("Error setting requests in cache", "err", err)
		}
	}
	return requests, nil
}

var today = time.Now().Day()

func (a *Adapter) NewRequest(ctx context.Context, teacherRequest bool, studentID string, dateRequested time.Time, newTeacher string) error {
	var requests []*service.Request
	var newRequest *service.Request
	var status service.RequestStatus
	studentCacheKey := stringHelpers.CacheKey("requests", studentID)
	teacherRequestKey := stringHelpers.CacheKey("requests", newTeacher)
	if teacherRequest {
		status = service.RequestStatus_approved
	} else {
		status = service.RequestStatus_pending
	}

	cache, err := a.cache.Get(studentCacheKey)
	if err == nil {
		err = json.Unmarshal([]byte(cache), &requests)
		if err != nil {
			a.log.Error("Error unmarshalling requests from cache")
		}
	} else {
		requests, err = a.requests.GetRequests(ctx, studentID)
		if err != nil {
			a.log.Error("Error getting requests from db", "err", err)
		}
	}
	if len(requests) > 0 {
		for _, r := range requests {
			if r.DateRequested.Day() == dateRequested.Day() {
				if r.Status == service.RequestStatus_denied {
					return service.ErrWebrpcBadRequest
				}
			}
		}
	}
	go a.cache.Clear(studentCacheKey)
	go a.cache.Clear(teacherRequestKey)
	wg := sync.WaitGroup{}
	c1 := make(chan *service.StudentWithUser)
	c2 := make(chan *service.Teacher)
	// get student data
	wg.Add(1)
	go func() {
		defer wg.Done()
		student, err := a.users.GetStudent(ctx, studentID)
		if err != nil {
			a.log.Error("Error getting student data", "err", err)
			return
		}
		c1 <- student
	}()
	wg.Add(1)
	go func() {
		defer wg.Done()
		teacher, err := a.users.GetTeacher(ctx, newTeacher)
		if err != nil {
			a.log.Error("Error getting teacher data", "err", err)
			return
		}
		c2 <- teacher
	}()
	go func() {
		wg.Wait()
		close(c1)
		close(c2)
	}()

	student := <-c1
	newTeacherRaw := <-c2
	currentTeacher := student.TeacherId
	timestamp := time.Now()
	newRequest = &service.Request{
		Status:             status,
		StudentName:        student.StudentName,
		StudentID:          student.StudentName,
		DateRequested:      dateRequested,
		CurrentTeacher:     currentTeacher,
		CurrentTeacherName: student.TeacherName,
		Arrived:            false,
		Timestamp:          timestamp.String(),
		Id:                 rand.Int32N(1000000000),
		NewTeacher:         newTeacher,
		NewTeacherName:     newTeacherRaw.User.Name,
	}
	if teacherRequest && dateRequested.Day() == today {
		newClassroomId := newTeacherRaw.Classroom.Id
		go a.requests.NewRequest(ctx, newRequest)
		go a.students.UpdateStudentRoster(ctx, newClassroomId, service.Status_transferredN, student.StudentEmail)
	} else {
		go a.requests.NewRequest(ctx, newRequest)
	}
	return nil
}

func (a *Adapter) GetTeacherRequests(ctx context.Context, teacherId string) (*service.TeacherRequests, error) {
	requests := make([]*service.Request, 0)
	cacheKey := stringHelpers.CacheKey("requests", teacherId+":teacher")
	cacheRequests, err := a.cache.Get(cacheKey)

	incomingRequests := make([]*service.Request, 0)
	outgoingRequests := make([]*service.Request, 0)
	if err == nil {
		a.log.Info("Cache hit for teacher requests")
		err = json.Unmarshal([]byte(cacheRequests), &requests)
		if err != nil {
			a.log.Error("Error unmarshalling requests from cache")
		}
	} else {
		requests, err = a.GetRequests(ctx, teacherId)
		if err != nil {
			a.log.Error("Error getting requests from db", "err", err)
		}

		if len(requests) < 0 {
			return &service.TeacherRequests{
				IncomingRequests: incomingRequests,
				OutgoingRequests: outgoingRequests,
			}, nil
		}

		for _, r := range requests {
			if r.Status.Is(service.RequestStatus_pending) {
				if r.CurrentTeacher == teacherId {
					outgoingRequests = append(outgoingRequests, r)
				} else if r.NewTeacher == teacherId {
					incomingRequests = append(incomingRequests, r)
				}
			}
		}
		result := &service.TeacherRequests{
			IncomingRequests: incomingRequests,
			OutgoingRequests: outgoingRequests,
		}
		stringResult, _ := json.Marshal(result)

		err = a.cache.Set(cacheKey, stringResult, 10*time.Minute)
		if err != nil {
			a.log.Error("Error setting requests in cache", "err", err)
		}

		return result, nil
	}
	return nil, nil
}
