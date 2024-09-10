package ports

import (
	"context"
	"time"

	"api/internal/service"

	"github.com/redis/go-redis/v9"
)

type ClassroomDBService interface {
	GetClassrooms(ctx context.Context) ([]*service.ClassroomWithAvailable, error)
	GetClassroomsNoDates(ctx context.Context) ([]*service.Classroom, error)
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
	NewClassroomTx(ctx context.Context, classrooms []*service.Classroom) error
	UpdateClassroomTx(ctx context.Context, classrooms []*service.Classroom) error
	DeleteClassroomTx(ctx context.Context, classrooms []string) error
	GetFlexClasses(ctx context.Context) ([]*service.Classroom, error)
}

type LogsDBService interface {
	GetAllLogs(ctx context.Context) ([]*service.Logs, error)
	AddLog(ctx context.Context, id string, user *string, logType string, action string) error
	AddLogs(ctx context.Context, logs []*service.Logs) error
}

type RequestDBService interface {
	GetRequests(ctx context.Context, userId string) ([]*service.Request, error)
	GetAllRequests(ctx context.Context) ([]*service.Request, error)
	NewRequest(ctx context.Context, request *service.Request) error
	UpdateRequest(ctx context.Context, id int32, status service.RequestStatus) error
}

type StudentDBService interface {
	AllStudentsMap(ctx context.Context) ([]*service.AllStudentMap, error)
	RosterByClassroomId(ctx context.Context, classroomId string) ([]*service.StudentWithClassroom, error)
	RosterById(ctx context.Context, id int32) ([]*service.Student, error)
	RosterByTeacherId(ctx context.Context, teacherId *string) ([]*service.StudentWithUser, error)
	GetAllStudents(ctx context.Context) ([]*service.Student, error)
	UpdateStudentStatus(ctx context.Context, status *service.Status, studentEmail string) error
	UpdateStudentRoster(ctx context.Context, classroomId string, status *service.Status, studentEmail string) error
	NewStudentTx(ctx context.Context, students []*service.Student) error
}

type UserDBService interface {
	GetTeacher(ctx context.Context, id string) (*service.Teacher, error)
	GetUser(ctx context.Context, id string) (*service.User, error)
	GetTeacherWithRoster(ctx context.Context, id string) (*service.TeacherWithRoster, error)
	CreateUserTx(ctx context.Context, users []*service.User) error
	GetStudent(ctx context.Context, id string) (*service.StudentWithUser, error)
	GetexistingTeachers(ctx context.Context) ([]string, error)
	GetAllTeachers(ctx context.Context) ([]*service.User, error)
}

type RClient interface {
	Set(key string, value interface{}, expires time.Duration) error
	Get(key string) (string, error)
	Clear(key string) error
	ReadStream(args *redis.XReadGroupArgs) ([]redis.XStream, error)
	XAdd(stream string, values ...*redis.XMessage) (string, error)
	XRange(stream, start, stop string) ([]redis.XMessage, error)
	XAck(stream string, consumer string, ids ...string) error
	ZRange(key string) ([]string, error)
	ZAdd(key string, members ...redis.Z) error
}
