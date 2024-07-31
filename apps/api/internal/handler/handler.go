package handler

import (
	"api/internal/ports"
)

type Handler struct {
	ClassroomService ports.ClassroomDBService
	RequestService   ports.RequestDBService
	StudentService   ports.StudentDBService
	UserService      ports.UserDBService
}

func NewHandler(classroomService ports.ClassroomDBService, requestService ports.RequestDBService, studentService ports.StudentDBService, userService ports.UserDBService) *Handler {
	return &Handler{
		ClassroomService: classroomService,
		RequestService:   requestService,
		StudentService:   studentService,
		UserService:      userService,
	}
}
