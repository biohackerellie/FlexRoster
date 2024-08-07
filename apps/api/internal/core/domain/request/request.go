package request

import (
	"time"
)

type RequestStatus string

const (
	RequestStatusPending  RequestStatus = "pending"
	RequestStatusApproved RequestStatus = "approved"
	RequestStatusDenied   RequestStatus = "denied"
	RequestStatusArrived  RequestStatus = "arrived"
)

type Status string

const (
	StatusTransferredA Status = "transferredA"
	StatusTransferredN Status = "transferredN"
	StatusDefault      Status = "default"
)

type Request struct {
	ID                 int32
	StudentID          string
	StudentName        string
	NewTeacher         string
	NewTeacherName     string
	CurrentTeacher     string
	CurrentTeacherName string
	DateRequested      time.Time
	Status             RequestStatus
	Arrived            bool
	Timestamp          string
}

type StudentRequests struct {
	Request
	Student
	Classroom
}

type Student struct {
	StudentEmail string
	StudentName  string
	ClassroomId  string
	Status       Status
	ID           int32
}

type Classroom struct {
	ID          string
	RoomNumber  string
	TeacherName string
	TeacherId   string
	Comment     string
	IsFlex      bool
}
