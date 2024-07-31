package classroom

import "time"

type Classroom struct {
	ID          string `json:"id"`
	RoomNumber  string `json:"roomNumber"`
	TeacherName string `json:"teacherName"`
	TeacherId   string `json:"teacherId"`
	Comment     string `json:"comment"`

	IsFlex bool `json:"isFlex"`
}

type Availability struct {
	Date        time.Time `json:"date"`
	ID          string    `json:"id"`
	ClassroomId string    `json:"classroomId"`
	TeacherId   string    `json:"teacherId"`
	Available   bool      `json:"available"`
}

type ClassroomWithAvailability struct {
	ChatId string `json:"chatId"`
	Classroom
	AvailableDates []time.Time `json:"availableDates"`
}

type TodaysAvailability struct {
	ID        string `json:"id"`
	Available bool   `json:"available"`
}

type ClassroomWithAvailable struct {
	Classroom
	Available bool `json:"available"`
}

type ClassroomWithCount struct {
	Classroom
	Count int64 `json:"count"`
}
