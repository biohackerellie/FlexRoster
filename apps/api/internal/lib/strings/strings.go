package strings

import (
	"crypto/sha256"
	"fmt"
	"slices"
	"strconv"
	"strings"

	classroom "api/internal/service"
)

const TimeFormat = "00:00"

const DateFormat = "2006-01-02 00:00:00"

func StrToInt64(i string) (int64, error) {
	id, err := strconv.ParseInt(i, 10, 0)
	if err != nil {
		return 0, err
	}
	return id, nil
}

func CacheKey(t string, i string) string {
	return fmt.Sprintf("%s:%s", t, i)
}

/**
 * Formats the teacher name by reversing the order of the name parts and removing the middle initial.
 * @param teacherName - The name of the teacher.
 * @returns The formatted teacher name.
 */
func FormatTeacherNames(teacherName string) string {
	// Split the teacher name into parts.
	parts := strings.Split(teacherName, ", ")
	// Reverse the order of the parts.
	slices.Reverse(parts)
	// delete middle initial
	switch len(parts) {
	case 3:
		parts = append(parts[:1], parts[2:]...)
	}
	// Join the parts back together.
	return strings.Join(parts, " ")
}

func ChatHrefConstructor(id1 string, id2 string) string {
	sorted := []string{id1, id2}
	slices.Sort(sorted)
	return fmt.Sprintf("%s--%s", sorted[0], sorted[1])
}

func FormatClasses(class *classroom.ClassroomWithAvailable, studentId string) *classroom.ClassroomWithChatID {
	ChatId := ChatHrefConstructor(class.Classroom.TeacherId, studentId)
	formattedTeacherName := FormatTeacherNames(class.Classroom.TeacherName)
	return &classroom.ClassroomWithChatID{
		ChatId: ChatId,
		Classroom: &classroom.Classroom{
			Id:          class.Classroom.Id,
			RoomNumber:  class.Classroom.RoomNumber,
			TeacherName: formattedTeacherName,
			TeacherId:   class.Classroom.TeacherId,
			Comment:     class.Classroom.Comment,
			Available:   class.Classroom.Available,
			IsFlex:      class.Classroom.IsFlex,
		},
		AvailableDates: class.AvailableDates,
	}
}

func GetHashKey(_filter string) string {
	h := sha256.New()
	h.Write([]byte(_filter))
	bs := h.Sum(nil)

	return fmt.Sprintf("%x", bs)
}
