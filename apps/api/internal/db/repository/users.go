package db

import (
	"context"

	config "api/internal/config"
	"api/internal/core/domain/user"
	"api/internal/lib/logger"
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
		User: user.User{
			ID:    res.ID,
			Name:  res.Name.String,
			Email: res.Email,
			Role:  res.Role,
		},
		Classroom: user.Classroom{
			ID:          res.ID_2.String,
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
		ID:    res.ID,
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
		User: user.User{
			ID:    res.ID,
			Name:  res.Name.String,
			Email: res.Email,
			Role:  res.Role,
		},
		Student: user.Student{
			StudentEmail: res.StudentEmail,
			StudentName:  res.StudentName,
			ClassroomId:  res.ClassroomId,
			Status:       user.Status(res.Status),
			ID:           res.ID_2,
		},
		Classroom: user.Classroom{
			ID:          res.ID_3,
			RoomNumber:  res.RoomNumber,
			TeacherName: res.TeacherName,
			TeacherId:   res.TeacherId.String,
			Comment:     res.Comment.String,
			IsFlex:      res.IsFlex.Bool,
		},
	}, nil
}
