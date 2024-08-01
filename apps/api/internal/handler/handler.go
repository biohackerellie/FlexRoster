package handler

import (
	"api/internal/ports"

	"github.com/go-chi/chi/v5"
)

type Handler struct {
	ClassroomService ports.ClassroomService
	RequestService   ports.RequestDBService
	StudentService   ports.StudentDBService
	UserService      ports.UserDBService
}

func NewHandler(r *chi.Mux, classroomService ports.ClassroomService, requestService ports.RequestDBService, studentService ports.StudentDBService, userService ports.UserDBService) *Handler {
	return &Handler{
		ClassroomService: classroomService,
		RequestService:   requestService,
		StudentService:   studentService,
		UserService:      userService,
	}
}
