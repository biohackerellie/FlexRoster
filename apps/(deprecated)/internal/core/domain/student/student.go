package student

import "time"

type Status string

const (
	StatusTransferredA Status = "transferredA"
	StatusTransferredN Status = "transferredN"
	StatusDefault      Status = "default"
)

type Student struct {
	StudentEmail string
	StudentName  string
	ClassroomId  string
	Status       Status
	ID           int32
}
type AllStudentMap struct {
	StudentEmail string
	StudentName  string
	Status       Status
	TeacherName  string
	RosterId     int32
}

type StudentWithClassroom struct {
	Student
	Classroom
	Available bool
}

type StudentWithUser struct {
	StudentEmail string
	StudentName  string
	Status       Status
	StudentId    string
	RoomNumber   string
	TeacherName  string
	ClassroomId  string
	Comment      string
}

type Classroom struct {
	ClassroomId string
	RoomNumber  string
	TeacherName string
	TeacherId   string
	Comment     string
	IsFlex      bool
}

type User struct {
	ID            string
	Name          string
	Email         string
	EmailVerified time.Time
	Image         string
	Role          string
}
