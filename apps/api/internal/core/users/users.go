package users

import (
	"context"

	stringHelpers "api/internal/lib/strings"
	"api/internal/service"
)

func (a *Adapter) GetUser(ctx context.Context, id string) (*service.User, error) {
	user, err := a.UsersRepo.GetUser(ctx, id)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (a *Adapter) GetStudent(ctx context.Context, id string) (*service.StudentWithUser, error) {
	student, err := a.UsersRepo.GetStudent(ctx, id)
	if err != nil {
		return nil, err
	}
	return student, nil
}

func (a *Adapter) GetStudentDetails(ctx context.Context, id string) (*service.StudentDetails, error) {
	stId, _ := stringHelpers.StrToInt64(id)
	student, err := a.UsersRepo.GetStudent(ctx, id)
	if err != nil {
		return nil, err
	}
}
