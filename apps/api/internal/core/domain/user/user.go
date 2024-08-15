package user

import "time"

type Status string

const (
	StatusTransferredA Status = "transferredA"
	StatusTransferredN Status = "transferredN"
	StatusDefault      Status = "default"
)

type User struct {
	ID            string
	Name          string
	Email         string
	EmailVerified time.Time
	Image         string
	Role          string
}

type Classroom struct {
	ID          string
	RoomNumber  string
	TeacherName string
	TeacherId   string
	Comment     string
	IsFlex      bool
}

type Student struct {
	StudentEmail string
	StudentName  string
	ClassroomId  string
	Status       Status
	ID           int32
}

type Teacher struct {
	User
	Classroom
}

type TeacherWithRoster struct {
	User
	Student
	Classroom
}
