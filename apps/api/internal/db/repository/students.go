package db

import (
	config "api/internal/config"
	errors "api/internal/lib/errors"
	"api/internal/lib/logger"
	str "api/internal/lib/strings"
	student "api/internal/service"
	"context"
)

type StudentDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *logger.Logger
	config *config.Env
}

func NewStudentDBService(db DBTXWrapper) *StudentDBService {
	return &StudentDBService{
		q:  New(db),
		db: db,
	}
}

func (s *StudentDBService) WithLogs(logger *logger.Logger) *StudentDBService {
	logger.With("name", "db")
	s.logger = logger
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
			Student: &student.Student{
				StudentEmail: r.StudentEmail,
				Id:           r.StudentId,
			},
			Classroom: &student.Classroom{
				Id:          r.ClassroomId,
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
			Id:           r.ID,
		}
		response[i] = mappedRes
	}
	return response, nil
}

func (s *StudentDBService) RosterByTeacherId(ctx context.Context, teacherId *string) ([]*student.StudentWithUser, error) {
	res, err := s.q.RosterByTeacherId(ctx, teacherId)
	if err != nil {
		return nil, err
	}
	response := make([]*student.StudentWithUser, len(res))
	for i, r := range res {
		mappedRes := &student.StudentWithUser{
			StudentEmail: r.StudentEmail,
			StudentName:  r.StudentName,
			Status:       student.Status(r.Status),
			StudentId:    str.SafeStringPtr(r.StudentId),
			RoomNumber:   r.RoomNumber,
			TeacherName:  r.TeacherName,
			ClassroomId:  r.ClassroomId,
			Comment:      str.SafeStringPtr(r.Comment),
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
			StudentEmail:       r.StudentEmail,
			StudentName:        r.StudentName,
			ClassroomId:        r.ClassroomId,
			DefaultClassroomId: r.DefaultClassroomId,
			Status:             student.Status(r.Status),
			Id:                 r.ID,
		}
		response[i] = mappedResponse
	}
	return response, nil
}

func (s *StudentDBService) UpdateStudentStatus(ctx context.Context, status *student.Status, studentEmail string) error {
	err := s.q.UpdateStudentStatus(ctx, UpdateStudentStatusParams{
		Status:       Status(*status),
		StudentEmail: studentEmail,
	})
	return err
}

func (s *StudentDBService) UpdateStudentRoster(ctx context.Context, classroomId string, status *student.Status, studentEmail string) error {
	err := s.q.UpdateRoster(ctx, UpdateRosterParams{
		ClassroomId:  classroomId,
		Status:       Status(*status),
		StudentEmail: studentEmail,
	})
	return err
}

func (s *StudentDBService) NewStudentTx(ctx context.Context, students []*student.Student) error {
	tx, err := s.db.Begin(ctx)
	if err != nil {
		return err
	}
	defer errors.ExecuteAndIgnoreErrorF(tx.Rollback, ctx)
	qtx := s.q.WithTx(tx)
	for _, student := range students {
		err := qtx.NewStudent(ctx, NewStudentParams{
			StudentEmail:       student.StudentEmail,
			StudentName:        student.StudentName,
			Status:             "default",
			ClassroomId:        student.ClassroomId,
			DefaultClassroomId: student.DefaultClassroomId,
		})
		if err != nil {
			return err
		}
	}
	return tx.Commit(ctx)
}
