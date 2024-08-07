package handler

import (
	"encoding/json"
	"fmt"
	"net/http"

	"api/internal/lib/logger"
	"api/internal/ports"
	"github.com/go-chi/chi/v5"
)

type ClassroomHandler struct {
	ClassroomService ports.ClassroomService
	logger           *logger.Logger
}

func NewClassroomHandler(r *chi.Mux, classroomService ports.ClassroomService, logger *logger.Logger) {
	handler := &ClassroomHandler{
		ClassroomService: classroomService,
		logger:           logger,
	}
	r.Route("/classes", func(r chi.Router) {
		r.Get("/all/{id}", handler.GetClassrooms)
		r.Get("/id/{id}", handler.GetClassById)
		r.Get("/secretary", handler.ClassWithRosterCount)
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

func (h *ClassroomHandler) GetClassById(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	classroom, err := h.ClassroomService.GetSpecificClassroom(id)
	if err != nil {
		fmt.Println(err)
		http.Error(w, http.StatusText(404), 404)
		return
	}
	resp, err := json.Marshal(classroom)
	if err != nil {
		http.Error(w, http.StatusText(500), 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp)
}

func (h *ClassroomHandler) ClassWithRosterCount(w http.ResponseWriter, r *http.Request) {
	classroom, err := h.ClassroomService.RoomsWithCount()
	if err != nil {
		fmt.Println(err)
		http.Error(w, http.StatusText(404), 404)
		return
	}
	resp, err := json.Marshal(classroom)
	if err != nil {
		http.Error(w, http.StatusText(500), 500)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp)
}
