package ports

import (
	"context"
	"time"

	"api/internal/service"
)

type ClassroomDBService interface {
	GetClassrooms(ctx context.Context) ([]*service.ClassroomWithAvailable, error)
	GetAvailability(ctx context.Context) ([]*service.Availability, error)
	TeacherAvailableToday(ctx context.Context, teacherId string) (bool, error)
	GetTeacherAvailability(ctx context.Context, teacherId string) ([]*service.Availability, error)
	GetRoomByTeacherId(ctx context.Context, id string) (*service.Classroom, error)
	RoomsWithRosterCount(ctx context.Context) ([]*service.ClassroomWithCount, error)
	ClassroomSchedule(ctx context.Context, classroomid string) ([]*service.Availability, error)
	CreateComment(ctx context.Context, teacherId string, comment string) error
	DeleteComment(ctx context.Context, teacherId string) error
	DeleteAvailability(ctx context.Context, teacherId string, date time.Time) error
	CreateAvailability(ctx context.Context, args []*service.Availability) error
}

type RequestDBService interface {
	GetRequests(ctx context.Context, userId string) ([]*service.Request, error)
	GetAllRequests(ctx context.Context) ([]*service.Request, error)
	NewRequest(ctx context.Context, request *service.Request) error
	UpdateRequest(ctx context.Context, id int32, status *service.RequestStatus) error
}

type StudentDBService interface {
	AllStudentsMap(ctx context.Context) ([]*service.AllStudentMap, error)
	RosterByClassroomId(ctx context.Context, classroomId string) ([]*service.StudentWithClassroom, error)
	RosterById(ctx context.Context, id int32) ([]*service.Student, error)
	RosterByTeacherId(ctx context.Context, teacherId string) ([]*service.StudentWithUser, error)
	GetAllStudents(ctx context.Context) ([]*service.Student, error)
	UpdateStudentStatus(ctx context.Context, status *service.Status, studentEmail string) error
	UpdateStudentRoster(ctx context.Context, classroomId string, status service.Status, studentEmail string) error
}

type UserDBService interface {
	GetTeacher(ctx context.Context, id string) (*service.Teacher, error)
	GetUser(ctx context.Context, id string) (*service.User, error)
	GetTeacherWithRoster(ctx context.Context, id string) (*service.TeacherWithRoster, error)

	GetStudent(ctx context.Context, id string) (*service.StudentWithUser, error)
}
