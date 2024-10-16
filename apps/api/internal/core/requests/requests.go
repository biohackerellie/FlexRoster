package requests

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"math/rand/v2"
	"net/http"
	"sync"
	"time"

	stringHelpers "api/internal/lib/strings"
	"api/internal/service"
)

func (a *Adapter) GetRequests(ctx context.Context, userId string) ([]*service.Request, error) {
	var requests []*service.Request
	requests, err := a.requests.GetRequests(ctx, userId)
	if err != nil {
		a.log.Error("Error getting requests from db", "err", err)
	}
	return requests, nil
}

func (a *Adapter) GetAllRequests(ctx context.Context) ([]*service.RequestWithNewClassroom, error) {
	var requests []*service.RequestWithNewClassroom
	requests, err := a.requests.GetAllRequests(ctx)
	if err != nil {
		a.log.Error("Error getting requests from db", "err", err)
	}
	return requests, nil
}

var today = time.Now().Day()

func (a *Adapter) NewRequest(ctx context.Context, teacherRequest bool, studentID string, dateRequested time.Time, newTeacher string) error {
	var newRequest *service.Request
	var status service.RequestStatus
	if teacherRequest {
		status = service.RequestStatus_approved
	} else {
		status = service.RequestStatus_pending
	}

	wg := sync.WaitGroup{}

	c2 := make(chan *service.Teacher)
	c3 := make(chan *service.Teacher)

	student, err := a.users.GetStudent(ctx, studentID)
	if err != nil {
		a.log.Error("Error getting student data", "err", err)
		return err
	}

	// get new teacher data
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
	// get current teacher data
	wg.Add(1)
	go func() {
		defer wg.Done()
		teacher, err := a.users.GetTeacher(ctx, student.Classroom.TeacherId)
		if err != nil {
			a.log.Error("Error getting teacher data", "err", err)
			return
		}
		c3 <- teacher
	}()
	go func() {
		wg.Wait()
		close(c2)
		close(c3)
	}()

	newTeacherRaw := <-c2
	currentTeacher := <-c3
	timestamp := time.Now()
	newRequest = &service.Request{
		Status:             status,
		StudentName:        student.Student.StudentName,
		StudentID:          student.Student.StudentName,
		DateRequested:      dateRequested,
		CurrentTeacher:     currentTeacher.User.Id,
		CurrentTeacherName: student.Classroom.TeacherName,
		Arrived:            false,
		Timestamp:          timestamp.String(),
		Id:                 rand.Int32N(1000000000),
		NewTeacher:         newTeacher,
		NewTeacherName:     newTeacherRaw.User.Name,
	}

	wg2 := sync.WaitGroup{}
	type emailData struct {
		to      string
		subject string
		message string
	}
	var newLog *service.Logs
	if teacherRequest {
		errChan := make(chan error)
		newClassroomId := newTeacherRaw.Classroom.Id
		if dateRequested.Day() == today {
			st := service.Status_transferredN
			wg2.Add(1)
			go func() {
				defer wg2.Done()
				err := a.students.UpdateStudentRoster(ctx, newClassroomId, &st, student.Student.StudentEmail)
				if err != nil {
					errChan <- err
					return
				}
			}()
		}
		wg2.Add(1)
		go func() {
			defer wg2.Done()
			err := a.requests.NewRequest(ctx, newRequest)
			if err != nil {
				errChan <- err
				return
			}
		}()
		to := currentTeacher.User.Email
		subject := "New Transfer Request"
		message := fmt.Sprintf("<h1>Transfer Request</h1><p>%s has requested to transfer %s to their classroom on %s</p>", newTeacherRaw.User.Name, student.Student.StudentName, dateRequested)
		wg2.Add(1)
		go func() {
			defer wg2.Done()
			err := a.SendEmail(to, subject, message)
			if err != nil {
				errChan <- err
			}
			return
		}()
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

func (a *Adapter) SendEmail(to string, subject string, message string) error {
	emailApi := a.config.EmailAPI
	body := map[string]string{
		"to":      to,
		"from":    "FLEXROSTER Update",
		"subject": subject,
		"html":    message,
	}
	bodyBytes, err := json.Marshal(body)
	if err != nil {
		return err
	}
	req, err := http.NewRequest("POST", emailApi, bytes.NewBuffer(bodyBytes))
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("x-api-key", a.config.EmailAPIKey)

	client := &http.Client{}

	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	return nil
}
