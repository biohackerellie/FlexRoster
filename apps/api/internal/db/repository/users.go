package db

import (
	"context"

	config "api/internal/config"
	errors "api/internal/lib/errors"
	"api/internal/lib/logger"
	str "api/internal/lib/strings"
	"api/internal/service"
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
			Name:  *res.Name,
			Email: res.Email,
			Role:  res.Role,
		},
		Classroom: &user.Classroom{
			Id:          *res.ID_2,
			RoomNumber:  *res.RoomNumber,
			TeacherName: *res.TeacherName,
			TeacherId:   *res.TeacherId,
			Comment:     *res.Comment,
			IsFlex:      *res.IsFlex,
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
		Name:  *res.Name,
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
			Name:  *res.User.Name,
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
			TeacherId:   *res.Classroom.TeacherId,
			Comment:     *res.Classroom.Comment,
			IsFlex:      *res.Classroom.IsFlex,
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
		TeacherId:    *res.Classroom.TeacherId,
	}, nil
}

func (s *UsersDBService) CreateUserTx(ctx context.Context, users []*user.User) error {
	tx, err := s.db.Begin(ctx)
	if err != nil {
		return err
	}
	defer errors.ExecuteAndIgnoreErrorF(tx.Rollback, ctx)
	qtx := s.q.WithTx(tx)
	for _, u := range users {
		err := qtx.CreateUser(ctx, CreateUserParams{
			ID:    u.Id,
			Name:  &u.Name,
			Email: u.Email,
			Role:  u.Role,
		})
		if err != nil {
			return err
		}
	}
	return tx.Commit(ctx)
}

func (s *UsersDBService) GetexistingTeachers(ctx context.Context) ([]string, error) {
	res, err := s.q.GetAllTeacherIds(ctx)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func (s *UsersDBService) GetAllTeachers(ctx context.Context) ([]*service.User, error) {
	res, err := s.q.GetAllTeachers(ctx)
	if err != nil {
		return nil, err
	}
	result := make([]*service.User, 0)
	for _, r := range res {
		result = append(result, &service.User{
			Id:    r.User.ID,
			Name:  str.SafeStringPtr(r.User.Name),
			Email: r.User.Email,
			Role:  r.User.Role,
		})
	}
	return result, nil
}
