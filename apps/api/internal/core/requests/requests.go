package requests

import (
	"context"
	"fmt"
	"time"

	"api/internal/lib/arrays"
	"api/internal/lib/emails"
	"api/internal/lib/strings"
	"api/internal/service"

	"golang.org/x/sync/errgroup"
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

func (a *Adapter) NewRequest(ctx context.Context, teacherRequest bool, studentID string, dateRequested time.Time, newTeacher string) error {
	var (
		newRequest     *service.Request
		status         service.RequestStatus
		emailData      *emails.EmailData
		newLog         *service.Logs
		currentTeacher *service.Teacher
		newTeacherRaw  *service.Teacher
		student        *service.StudentWithUser
		today          = time.Now().Day()
	)
	if teacherRequest {
		status = service.RequestStatus_approved
	} else {
		status = service.RequestStatus_pending
	}

	g := new(errgroup.Group)

	g.Go(func() error {
		var err error
		student, err = a.users.GetStudent(ctx, studentID)
		if err != nil {
			a.log.Error("Error getting student data", "err", err)
			return err
		}

		currentTeacher, err = a.users.GetTeacher(ctx, student.Classroom.TeacherId)
		if err != nil {
			a.log.Error("Error getting current teacher data", "err", err)
			return err
		}
		return nil
	})

	g.Go(func() error {
		var err error
		newTeacherRaw, err = a.users.GetTeacher(ctx, newTeacher)
		if err != nil {
			a.log.Error("Error getting new teacher data", "err", err)
			return err
		}
		return nil
	})

	if err := g.Wait(); err != nil {
		return err
	}
	timestamp := time.Now()
	newRequest = &service.Request{
		Status:             status,
		StudentName:        student.Student.StudentName,
		StudentID:          student.User.Id,
		DateRequested:      dateRequested,
		CurrentTeacher:     currentTeacher.User.Id,
		CurrentTeacherName: student.Classroom.TeacherName,
		Arrived:            false,
		Timestamp:          timestamp.String(),
		Id:                 int32(timestamp.Unix()),
		NewTeacher:         newTeacher,
		NewTeacherName:     newTeacherRaw.User.Name,
	}

	// Prepare email data and log based on request type
	if teacherRequest {
		emailData = &emails.EmailData{
			To:      currentTeacher.User.Email,
			Subject: "New Transfer Request",
			HTML:    fmt.Sprintf("<h1>Transfer Request</h1><p>%s has requested to transfer %s to their classroom on %s</p>", newTeacherRaw.User.Name, student.Student.StudentName, dateRequested.Format("2006-01-02")),
		}
		newLog = &service.Logs{
			Type:   service.LogType_request,
			Action: fmt.Sprintf("%s transferred %s from %s at %s", newTeacherRaw.User.Name, student.Student.StudentName, currentTeacher.User.Name, dateRequested.Format("2006-01-02")),
			User:   newTeacherRaw.User.Id,
		}
	} else {
		emailData = &emails.EmailData{
			To:      newTeacherRaw.User.Email,
			Subject: "New Subject Request",
			HTML:    fmt.Sprintf("<h1>Transfer Request</h1><p>%s has requested to be assigned to your classroom on %s</p>", student.Student.StudentName, dateRequested.Format("2006-01-02")),
		}

		newLog = &service.Logs{
			Type:   service.LogType_request,
			Action: fmt.Sprintf("%s requested to be assigned to %s at %s", student.Student.StudentName, newTeacherRaw.User.Name, dateRequested.Format("2006-01-02")),
			User:   student.User.Id,
		}
	}

	g = new(errgroup.Group)
	// Create new request
	g.Go(func() error {
		return a.requests.NewRequest(ctx, newRequest)
	})

	// Send email
	g.Go(func() error {
		return emails.Send(emailData, a.config)
	})

	// Add log entry
	g.Go(func() error {
		return a.dblogs.AddLog(ctx, newLog)
	})

	// If teacherRequest and dateRequested is today, handle roster update
	if teacherRequest && dateRequested.Day() == today {
		st := service.Status_transferredN
		g.Go(func() error {
			return a.students.UpdateStudentRoster(ctx, newTeacherRaw.Classroom.Id, &st, student.Student.StudentEmail)
		})
	}

	// Wait for all dependent operations to complete
	if err := g.Wait(); err != nil {
		return err
	}
	return nil
}

func (a *Adapter) GetTeacherRequests(ctx context.Context, teacherId string) (*service.TeacherRequests, error) {
	incomingRequests := make([]*service.Request, 0)
	outgoingRequests := make([]*service.Request, 0)
	requests, err := a.GetRequests(ctx, teacherId)
	if err != nil {
		a.log.Error("Error getting requests from db", "err", err)
	}

	if len(requests) < 0 {
		return &service.TeacherRequests{
			IncomingRequests: incomingRequests,
			OutgoingRequests: outgoingRequests,
		}, nil
	}
	today := time.Now().Day()
	pendingRequests := arrays.EZFilter(requests, func(r *service.Request) bool {
		return !r.Status.Is(service.RequestStatus_denied) && r.DateRequested.Day() == today
	})

	for _, r := range pendingRequests {
		if r.CurrentTeacher == teacherId {
			outgoingRequests = append(outgoingRequests, r)
		} else if r.NewTeacher == teacherId {
			incomingRequests = append(incomingRequests, r)
		}
	}
	result := &service.TeacherRequests{
		IncomingRequests: incomingRequests,
		OutgoingRequests: outgoingRequests,
	}
	return result, nil
}

func (a *Adapter) UpdateRequest(requestId string, studentId string, teacherId string, newTeacherId string, status service.RequestStatus) error {
	var (
		student        *service.StudentWithUser
		currentTeacher *service.Teacher
		newTeacherRaw  *service.Teacher
		request        time.Time
		today          = time.Now().Day()
	)
	g := new(errgroup.Group)
	ctx := context.Background()
	g.Go(func() error {
		var err error
		student, err = a.users.GetStudent(ctx, studentId)
		if err != nil {
			a.log.Error("Error getting student data", "err", err)
			return err
		}

		currentTeacher, err = a.users.GetTeacher(ctx, student.Classroom.TeacherId)
		if err != nil {
			a.log.Error("Error getting current teacher data", "err", err)
			return err
		}
		return nil
	})

	g.Go(func() error {
		var err error
		newTeacherRaw, err = a.users.GetTeacher(ctx, newTeacherId)
		if err != nil {
			a.log.Error("Error getting new teacher data", "err", err)
			return err
		}
		return nil
	})

	g.Go(func() error {
		var err error
		id, _ := strings.StrToInt(requestId)
		request, err = a.requests.GetRequestDate(ctx, int32(id))
		if err != nil {
			return err
		}
		return nil
	})

	if err := g.Wait(); err != nil {
		return err
	}
}
