package strings

import (
	arrays "api/internal/lib/arrays"
	classroom "api/internal/service"
	"crypto/sha256"
	"fmt"
	"regexp"
	"slices"
	"strconv"
	"strings"
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
func StrToInt(i string) (int, error) {
	id, err := strconv.Atoi(i)
	if err != nil {
		return 0, err
	}
	return id, nil
}
func IntToString(i int) string {
	return strconv.Itoa(i)
}
func CacheKey(t string, i string) string {
	return GetHashKey(t + ":" + i)
}

/**
 * Formats the teacher name by reversing the order of the name parts and removing the middle initial.
 * @param teacherName - The name of the teacher.
 * @returns The formatted teacher name.
 */
func FormatTeacherNames(teacherName string) string {
	parts := strings.Split(teacherName, ", ")
	slices.Reverse(parts)
	formattedName := strings.Join(parts, " ")

	formattedParts := strings.Split(formattedName, " ")
	if len(formattedParts) > 2 {
		formattedParts = arrays.EZFilter(formattedParts, func(el string) bool {
			return len(el) > 1
		})
	}
	teacher := strings.Join(formattedParts, " ")
	return teacher
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

func SafeStringPtr(s *string) string {
	if s != nil {
		return *s
	}
	return ""
}
func SafeBoolPointer(b *bool) bool {
	if b != nil {
		return *b
	}
	return false
}

var nicknameMap = map[string]string{
	"mike":  "michael",
	"matt":  "matthew",
	"steve": "steven",
	"jim":   "james",
	"jimmy": "james",
	"liz":   "elizabeth",
	"beth":  "elizabeth",
	"dan":   "daniel",
	"chris": "christopher",
	"jon":   "jonathan",
	"jonny": "jonathan",
	"john":  "jonathan",
	"joe":   "joseph",
	"nick":  "nicholas",
	"jen":   "jennifer",
	"dave":  "david",
	"doug":  "douglas",
	"dug":   "douglas",
	"kate":  "katherine",
}

func Normalize(name string) []string {
	lower := strings.ToLower(name)
	split := regexp.MustCompile(`\s+|,|\.`).Split(lower, -1)
	for i, part := range split {
		part = strings.Trim(part, " ")
		if val, ok := nicknameMap[part]; ok {
			split[i] = val
		}
	}
	return split
}
