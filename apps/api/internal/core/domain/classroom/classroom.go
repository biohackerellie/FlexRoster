package classroom

import (
	"time"
)

type ClassroomResponses interface {
	isClassroomResponses()
}

type Classroom struct {
	ID          string `json:"id"`
	RoomNumber  string `json:"roomNumber"`
	TeacherName string `json:"teacherName"`
	TeacherId   string `json:"teacherId"`
	Comment     string `json:"comment"`
	Available   bool   `json:"available"`
	IsFlex      bool   `json:"isFlex"`
}

func (Classroom) isClassroomResponses() {}

type Availability struct {
	Date        time.Time `json:"date"`
	ID          string    `json:"id"`
	ClassroomId string    `json:"classroomId"`
	TeacherId   string    `json:"teacherId"`
	Available   bool      `json:"available"`
}

type ClassroomWithChatID struct {
	ChatId string `json:"chatId"`
	Classroom
	AvailableDates []time.Time `json:"availableDates"`
}

func (ClassroomWithChatID) isClassroomResponses() {}

type TodaysAvailability struct {
	ID        string `json:"id"`
	Available bool   `json:"available"`
}

type ClassroomWithAvailable struct {
	Classroom
	AvailableDates []time.Time `json:"availableDates"`
}

func (ClassroomWithAvailable) isClassroomResponses() {}

type ClassroomWithCount struct {
	Classroom
	Count int64 `json:"count"`
}

func (ClassroomWithCount) isClassroomResponses() {}
