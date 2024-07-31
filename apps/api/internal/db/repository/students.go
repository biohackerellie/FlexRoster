package db

import (
	"context"

	config "api/internal/config"
	"api/internal/core/domain/student"

	"github.com/jackc/pgx/v5/pgtype"

	"go.uber.org/zap"
)

type StudentDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *zap.SugaredLogger
	config *config.Env
}

func NewStudentDBService(db DBTXWrapper) *StudentDBService {
	return &StudentDBService{
		q:  New(db),
		db: db,
	}
}

func (s *StudentDBService) WithLogs(logger *zap.SugaredLogger) *StudentDBService {
	s.logger = logger.With(
		"name", "db",
	)
	return s
}

func (s *StudentDBService) AllStudentsMap(ctx context.Context) ([]*student.AllStudentMap, error) {
	res, err := s.q.AllStudentsMap(ctx)
	if err != nil {
		return nil, err
	}
	response := make([]*student.AllStudentMap, len(res))

	for i, r := range res {
		mappedRes := &student.AllStudentMap{
			RosterId:     r.ID,
			StudentEmail: r.StudentEmail,
			StudentName:  r.StudentName,
			Status:       student.Status(r.Status),
			TeacherName:  r.TeacherName,
		}
		response[i] = mappedRes
	}
	return response, nil
}

func (s *StudentDBService) RosterByClassroomId(ctx context.Context, classroomId string) ([]*student.StudentWithClassroom, error) {
	res, err := s.q.RosterByClassroomId(ctx, classroomId)
	if err != nil {
		return nil, err
	}

	response := make([]*student.StudentWithClassroom, len(res))

	for i, r := range res {
		mappedRes := &student.StudentWithClassroom{
			Student: student.Student{
				StudentEmail: r.StudentEmail,
				ID:           r.StudentId,
			},
			Classroom: student.Classroom{
				ClassroomId: r.ClassroomId,
				RoomNumber:  r.RoomNumber,
				TeacherName: r.TeacherName,
			},
			Available: r.Available,
		}
		response[i] = mappedRes
	}
	return response, nil
}

func (s *StudentDBService) RosterById(ctx context.Context, id int32) ([]*student.Student, error) {
	res, err := s.q.RosterById(ctx, id)
	if err != nil {
		return nil, err
	}
	response := make([]*student.Student, len(res))
	for i, r := range res {
		mappedRes := &student.Student{
			StudentEmail: r.StudentEmail,
			StudentName:  r.StudentName,
			ClassroomId:  r.ClassroomId,
			Status:       student.Status(r.Status),
			ID:           r.ID,
		}
		response[i] = mappedRes
	}
	return response, nil
}

func (s *StudentDBService) RosterByTeacherId(ctx context.Context, teacherId string) ([]*student.StudentWithUser, error) {
	id := pgtype.Text{}
	id.String = teacherId
	res, err := s.q.RosterByTeacherId(ctx, id)
	if err != nil {
		return nil, err
	}
	response := make([]*student.StudentWithUser, len(res))
	for i, r := range res {
		mappedRes := &student.StudentWithUser{
			StudentEmail: r.StudentEmail,
			StudentName:  r.StudentName,
			Status:       student.Status(r.Status),
			StudentId:    r.StudentId.String,
			RoomNumber:   r.RoomNumber,
			TeacherName:  r.TeacherName,
			ClassroomId:  r.ClassroomId,
			Comment:      r.Comment.String,
		}
		response[i] = mappedRes
	}
	return response, nil
}

func (s *StudentDBService) GetAllStudents(ctx context.Context) ([]*student.Student, error) {
	res, err := s.q.RosterQuery(ctx)
	if err != nil {
		return nil, err
	}

	response := make([]*student.Student, len(res))

	for i, r := range res {
		mappedResponse := &student.Student{
			StudentEmail: r.StudentEmail,
			StudentName:  r.StudentName,
			ClassroomId:  r.ClassroomId,
			Status:       student.Status(r.Status),
			ID:           r.ID,
		}
		response[i] = mappedResponse
	}
	return response, nil
}

func (s *StudentDBService) UpdateStudentStatus(ctx context.Context, status Status, studentEmail string) error {
	err := s.q.UpdateStudentStatus(ctx, UpdateStudentStatusParams{
		Status:       status,
		StudentEmail: studentEmail,
	})
	return err
}
