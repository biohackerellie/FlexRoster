package classroom

import "time"

type Classroom struct {
	ID          string
	RoomNumber  string
	TeacherName string
	TeacherId   string
	Comment     string
	IsFlex      bool
}

type Availability struct {
	Date        time.Time
	ID          string
	ClassroomId string
	TeacherId   string
	Available   bool
}

type ClassroomWithAvailability struct {
	Classroom
	AvailableDates []time.Time
}

type TodaysAvailability struct {
	ID        string
	Available bool
}

type ClassroomWithAvailable struct {
	Classroom
	Available bool
}
