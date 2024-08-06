package ports

import (
	"context"
	"time"

	"api/internal/core/domain/classroom"

	"api/internal/core/domain/request"
	"api/internal/core/domain/student"
	"api/internal/core/domain/user"
)

type ClassroomDBService interface {
	GetClassrooms(ctx context.Context) ([]*classroom.ClassroomWithAvailable, error)
	GetAvailability(ctx context.Context) ([]*classroom.Availability, error)
	TeacherAvailableToday(ctx context.Context, teacherId string) (bool, error)
	GetRoomByTeacherId(ctx context.Context, id string) (*classroom.Classroom, error)
	RoomsWithRosterCount(ctx context.Context) ([]*classroom.ClassroomWithCount, error)
	ClassroomSchedule(ctx context.Context, classroomid string) ([]*classroom.Availability, error)
	CreateComment(ctx context.Context, teacherId string, comment string) error
	DeleteComment(ctx context.Context, teacherId string) error
	DeleteAvailability(ctx context.Context, teacherId string, date time.Time) error
	CreateAvailability(ctx context.Context, args []*classroom.Availability) error
}

type RequestDBService interface {
	GetRequests(ctx context.Context, userId string) ([]*request.Request, error)
	GetAllRequests(ctx context.Context) ([]*request.Request, error)
	NewRequest(ctx context.Context, studentName string, studentID string, requestStatus *request.RequestStatus, dateRequested time.Time, newTeacher string, newTeacherName string, currentTeacher string, currentTeacherName string) error
	UpdateRequest(ctx context.Context, id int32, status *request.RequestStatus) error
}

type StudentDBService interface {
	AllStudentsMap(ctx context.Context) ([]*student.AllStudentMap, error)
	RosterByClassroomId(ctx context.Context, classroomId string) ([]*student.StudentWithClassroom, error)
	RosterById(ctx context.Context, id int32) ([]*student.Student, error)
	RosterByTeacherId(ctx context.Context, teacherId string) ([]*student.StudentWithUser, error)
	GetAllStudents(ctx context.Context) ([]*student.Student, error)
	UpdateStudentStatus(ctx context.Context, status *student.Status, studentEmail string) error
}

type UserDBService interface {
	GetTeacher(ctx context.Context, id string) (*user.Teacher, error)
	GetUser(ctx context.Context, id string) (*user.User, error)
	GetTeacherWithRoster(ctx context.Context, id string) (*user.TeacherWithRoster, error)
}
