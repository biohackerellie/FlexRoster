package request

import (
	"fmt"
	"time"
)

type RequestStatus string

const (
	RequestStatusPending  RequestStatus = "pending"
	RequestStatusApproved RequestStatus = "approved"
	RequestStatusDenied   RequestStatus = "denied"
	RequestStatusArrived  RequestStatus = "arrived"
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
