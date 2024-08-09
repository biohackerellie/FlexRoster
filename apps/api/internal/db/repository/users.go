package db

import (
	"context"

	config "api/internal/config"
	"api/internal/lib/logger"
	user "api/internal/service"
)

type UsersDBService struct {
	q      *Queries
	db     DBTXWrapper
	logger *logger.Logger
	config *config.Env
}

func NewUsersDBService(db DBTXWrapper) *UsersDBService {
	return &UsersDBService{
		q:  New(db),
		db: db,
	}
}

func (s *UsersDBService) WithLogs(logger *logger.Logger) *UsersDBService {
	logger.With("name", "db")
	s.logger = logger
	return s
}

func (s *UsersDBService) GetTeacher(ctx context.Context, id string) (*user.Teacher, error) {
	res, err := s.q.GetTeacher(ctx, id)
	if err != nil {
		return nil, err
	}
	return &user.Teacher{
		User: &user.User{
			Id:    res.ID,
			Name:  res.Name.String,
			Email: res.Email,
			Role:  res.Role,
		},
		Classroom: &user.Classroom{
			Id:          res.ID_2.String,
			RoomNumber:  res.RoomNumber.String,
			TeacherName: res.TeacherName.String,
			TeacherId:   res.TeacherId.String,
			Comment:     res.Comment.String,
			IsFlex:      res.IsFlex.Bool,
		},
	}, nil
}

func (s *UsersDBService) GetUser(ctx context.Context, id string) (*user.User, error) {
	res, err := s.q.GetUser(ctx, id)
	if err != nil {
		return nil, err
	}
	return &user.User{
		Id:    res.ID,
		Name:  res.Name.String,
		Email: res.Email,
		Role:  res.Role,
	}, nil
}

func (s *UsersDBService) GetTeacherWithRoster(ctx context.Context, id string) (*user.TeacherWithRoster, error) {
	res, err := s.q.UserRosterQuery(ctx, id)
	if err != nil {
		return nil, err
	}
	return &user.TeacherWithRoster{
		User: &user.User{
			Id:    res.User.ID,
			Name:  res.User.Name.String,
			Email: res.User.Email,
			Role:  res.User.Role,
		},
		Student: &user.Student{
			StudentEmail: res.Student.StudentEmail,
			StudentName:  res.Student.StudentName,
			ClassroomId:  res.Student.ClassroomId,
			Status:       user.Status(res.Student.Status),
			Id:           res.Student.ID,
		},
		Classroom: &user.Classroom{
			Id:          res.Classroom.ID,
			RoomNumber:  res.Classroom.RoomNumber,
			TeacherName: res.Classroom.TeacherName,
			TeacherId:   res.Classroom.TeacherId.String,
			Comment:     res.Classroom.Comment.String,
			IsFlex:      res.Classroom.IsFlex.Bool,
		},
	}, nil
}

func (s *UsersDBService) GetStudent(ctx context.Context, id string) (*user.StudentWithUser, error) {
	res, err := s.q.UserRosterQuery(ctx, id)
	if err != nil {
		return nil, err
	}
	return &user.StudentWithUser{
		StudentEmail: res.Student.StudentEmail,
		StudentName:  res.Student.StudentName,
		ClassroomId:  res.Classroom.ID,
		Status:       user.Status(res.Student.Status),
		StudentId:    res.User.ID,
		RoomNumber:   res.Classroom.RoomNumber,
		TeacherName:  res.Classroom.TeacherName,
		Comment:      res.Classroom.Comment.String,
		TeacherId:    res.Classroom.TeacherId.String,
	}, nil
}
