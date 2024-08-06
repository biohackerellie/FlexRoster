package handler

import (
	"encoding/json"
	"fmt"
	"net/http"

	"api/internal/ports"

	"github.com/go-chi/chi/v5"
)

type ClassroomHandler struct {
	ClassroomService ports.ClassroomService
}

func NewClassroomHandler(r *chi.Mux, classroomService ports.ClassroomService) {
	handler := &ClassroomHandler{
		ClassroomService: classroomService,
	}
	r.Route("/classes", func(r chi.Router) {
		r.Get("/{id}", handler.GetClassrooms)
	})
}

// GetClassrooms godoc
// @Summary Get classrooms
// @Return @type []*classroom.GetClassroomsWithAvailability
func (h *ClassroomHandler) GetClassrooms(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	classrooms, err := h.ClassroomService.GetClasses(id)
	if err != nil {
		fmt.Println(err)
		http.Error(w, http.StatusText(404), 404)
		return
	}
	resp, err := json.Marshal(classrooms)
	if err != nil {
		http.Error(w, http.StatusText(500), 500)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(resp)
}
