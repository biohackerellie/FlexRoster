package scripts

import (
	arrays "api/internal/lib/arrays"
	str "api/internal/lib/strings"
	"api/internal/service"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"sync"
	"time"
)

func (s *Scripts) GetClasses() ([]*service.Classroom, error) {
	token, err := s.IcAuth()
	if err != nil {
		return nil, err
	}
	client := &http.Client{
		Timeout: time.Second * 10,
	}
	req, err := http.NewRequest("GET", s.ICClassQuery(), nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-XSRF-TOKEN", s.config.XSRFToken)
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	var res ClassResponse
	s.log.Info("IC Response", "status", resp.Status)

	err = json.NewDecoder(resp.Body).Decode(&res)
	if err != nil {
		return nil, err
	}
	result := s.mutateClassData(res.Classes)
	return result, nil

}

// func that performs multiple mutations on the class data

func (s *Scripts) mutateClassData(c []ClassInfo) []*service.Classroom {
	var semesterClassName = s.config.SemesterClassName
	var wg sync.WaitGroup
	classChan := make(chan *service.Classroom, len(c)) // Buffered channel to collect results

	// Flex classes filter
	wg.Add(1)
	go func() {
		defer wg.Done()
		flexClasses := arrays.EZFilter(c, func(el ClassInfo) bool {
			return strings.Contains(el.Title, semesterClassName)
		})
		for _, class := range flexClasses {
			classChan <- &service.Classroom{
				Id:          class.SourcedId,
				TeacherName: class.ClassCode,
				RoomNumber:  str.SafeStringPtr(class.Location), // Use a helper to avoid nil dereferencing
				IsFlex:      true,
			}
		}
	}()

	// Non-flex classes filter
	wg.Add(1)
	go func() {
		defer wg.Done()
		otherClasses := arrays.EZFilter(c, func(el ClassInfo) bool {
			return !strings.Contains(el.Title, semesterClassName)
		})
		for _, class := range otherClasses {
			classChan <- &service.Classroom{
				Id:          class.SourcedId,
				TeacherName: class.ClassCode,
				RoomNumber:  str.SafeStringPtr(class.Location),
				IsFlex:      false,
			}
		}
	}()

	// Close the channel after all data is processed
	go func() {
		wg.Wait()
		close(classChan)
	}()

	// filter out duplicate teachers
	teacherMap := make(map[string]*service.Classroom)
	for class := range classChan {
		if _, ok := teacherMap[class.TeacherName]; !ok {
			teacherMap[class.TeacherName] = class
		} else if class.IsFlex {
			// Keep flex class if it's a duplicate
			teacherMap[class.TeacherName] = class
		}
	}
	result := make([]*service.Classroom, 0, len(teacherMap))

	for _, v := range teacherMap {
		result = append(result, v)
	}

	return result
}

// Get classRooms from Infinite Campus

func (s *Scripts) ICQuery() string {
	appName := s.config.OnerosterAppName
	url := fmt.Sprintf("https://mtdecloud2.infinitecampus.org/campus/api/oneroster/v1p2/%s/ims/oneroster/rostering/v1p2", appName)
	return url
}

func (s *Scripts) ICClassQuery() string {
	SourceID := s.config.SourceID
	url := fmt.Sprintf("%s/schools/%s/classes?limit=1200", s.ICQuery(), SourceID)
	return url
}

func (s *Scripts) IcStudentQuery(classId string) string {
	url := fmt.Sprintf("%s/classes/%s/students", s.ICQuery(), classId)
	return url
}

func (s *Scripts) GetICStudents(classId string) ([]*service.Student, error) {
	token, err := s.IcAuth()
	if err != nil {
		return nil, err
	}
	client := &http.Client{
		Timeout: time.Second * 10,
	}
	requestUrl := s.IcStudentQuery(classId)
	req, err := http.NewRequest("GET", requestUrl, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-XSRF-TOKEN", s.config.XSRFToken)
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	var res RosterResponse

	err = json.NewDecoder(resp.Body).Decode(&res)
	if err != nil {
		return nil, err
	}
	result := make([]*service.Student, 0)
	for _, student := range res.Users {
		fullName := fmt.Sprintf("%s %s", student.GivenName, student.FamilyName)
		status := service.Status_default
		result = append(result, &service.Student{
			StudentEmail:       student.Email,
			StudentName:        fullName,
			ClassroomId:        classId,
			DefaultClassroomId: classId,
			Status:             status,
		})
	}
	return result, nil
}
