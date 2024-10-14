package ports

import (
	"context"
	"time"

	"api/internal/core/domain/classroom"
)

type ClassroomService interface {
	GetClasses(ctx context.Context, id string) ([]*classroom.ClassroomWithChatID, error)
	GetSpecificClassroom(ctx context.Context, id string) (*classroom.Classroom, error)
	NewComment(ctx context.Context, id string, comment string) error
	DeleteComment(ctx context.Context, id string) error
	SetAvailability(ctx context.Context, teacherId string, classroomId string, dates []time.Time) error
	RoomsWithCount() ([]*classroom.ClassroomWithCount, error)
	GetAvailability(ctx context.Context, id string) ([]*classroom.Availability, error)
	DeleteAvailability(ctx context.Context, id string, date time.Time) error
	CreateClassroom(ctx context.Context, teacherID string, name string, description string, capacity int) error
}
