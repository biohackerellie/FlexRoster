package ports

import (
	"time"

	"api/internal/core/domain/classroom"
)

type ClassroomService interface {
	GetClasses(id string) ([]*classroom.ClassroomWithChatID, error)
	GetSpecificClassroom(id string) (*classroom.Classroom, error)
	NewComment(id string, comment string) error
	DeleteComment(id string) error
	SetAvailability(teacherId string, classroomId string, dates []time.Time) error
	RoomsWithCount() ([]*classroom.ClassroomWithCount, error)
}
