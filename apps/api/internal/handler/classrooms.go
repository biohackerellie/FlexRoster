package handler

import (
	"context"
	"errors"
	"fmt"
	"net/http"

	e "api/internal/lib/errors"

	"github.com/go-chi/render"

	"api/internal/core/domain/classroom"
	"api/internal/lib/logger"
	"api/internal/ports"

	"github.com/go-chi/chi/v5"
)

type ClassroomResponses interface {
	*classroom.Classroom | *classroom.ClassroomWithChatID | *classroom.ClassroomWithAvailable | *classroom.ClassroomWithCount
}

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
		r.With(handler.ClassroomCtx).Get("/id/{id}", handler.GetClassById)
		r.Get("/secretary", handler.ClassWithRosterCount)
		r.Post("/comments", handler.CreateComment)
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
	classroomInterfaces := make([]interface{}, len(classrooms))
	for i, v := range classrooms {
		classroomInterfaces[i] = v
	}

	if err := render.RenderList(w, r, NewClassroomListResponse(classrooms)); err != nil {
		render.Render(w, r, e.ErrRender(err))
		return
	}
}

func (h *ClassroomHandler) GetClassById(w http.ResponseWriter, r *http.Request) {
	classroom := r.Context().Value("classroom").(*classroom.Classroom)

	if err := render.Render(w, r, NewClassroomResponse(classroom)); err != nil {
		render.Render(w, r, e.ErrRender(err))
		return
	}
}

func (h *ClassroomHandler) ClassWithRosterCount(w http.ResponseWriter, r *http.Request) {
	classroom, err := h.ClassroomService.RoomsWithCount()
	if err != nil {
		fmt.Println(err)
		http.Error(w, http.StatusText(404), 404)
		return
	}
	if err := render.RenderList(w, r, NewClassroomListResponse(classroom)); err != nil {
		render.Render(w, r, e.ErrRender(err))
		return
	}
}

func (h *ClassroomHandler) CreateComment(w http.ResponseWriter, r *http.Request) {
	data := &CommentRequest{}
	if err := render.Bind(r, data); err != nil {
		render.Render(w, r, e.ErrInvalidRequest(err))
		return
	}

	comment := data.Comment
	id := data.Id
	err := h.ClassroomService.NewComment(id, comment)
	if err != nil {
		h.logger.Error(err)
		render.Render(w, r, e.ErrRender(err))
	}
	render.Status(r, http.StatusCreated)
	render.Render(w, r, NewCommentResponse(comment))
}

func (h *ClassroomHandler) DeleteComment(w http.ResponseWriter, r *http.Request) {
	var err error

	class := r.Context().Value("classroom").(*classroom.Classroom)
	err = h.ClassroomService.DeleteComment(class.ID)
	if err != nil {
		render.Render(w, r, e.ErrNotFound)
		return
	}

	render.Render(w, r, NewCommentResponse("Comment Deleted"))
}

func (h *ClassroomHandler) ClassroomCtx(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var cr *classroom.Classroom
		var err error
		if id := chi.URLParam(r, "id"); id != "" {
			cr, err = h.ClassroomService.GetSpecificClassroom(id)
		} else {
			render.Render(w, r, e.ErrNotFound)
			return
		}
		if err != nil {
			render.Render(w, r, e.ErrNotFound)
			return
		}
		ctx := context.WithValue(r.Context(), "classroom", cr)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

type ClassroomResponse struct {
	Classroom interface{}
	Elapsed   int64 `json:"elapsed"`
}

func (rd *ClassroomResponse) Render(w http.ResponseWriter, r *http.Request) error {
	rd.Elapsed = 10
	return nil
}

func NewClassroomResponse[T classroom.ClassroomResponses](classroom T) *ClassroomResponse {
	resp := &ClassroomResponse{Classroom: classroom}

	return resp
}

func NewClassroomListResponse[T classroom.ClassroomResponses](classrooms []T) []render.Renderer {
	list := []render.Renderer{}
	for _, classroom := range classrooms {
		list = append(list, NewClassroomResponse(classroom))
	}
	return list
}

func NewCommentResponse(comment string) *CommentResponse {
	resp := &CommentResponse{Comment: comment}

	return resp
}

func (c *CommentResponse) Render(w http.ResponseWriter, r *http.Request) error {
	c.Elapsed = 10
	return nil
}

func (c *CommentRequest) Bind(r *http.Request) error {
	if c.Comment == "" {
		return errors.New("missing required fields")
	}
	return nil
}

type (
	CommentRequest struct {
		Comment string `json:"comment,omitempty"`
		Id      string `json:"id"`
	}
	CommentResponse struct {
		Comment string
		Elapsed int64 `json:"elapsed"`
	}
)
