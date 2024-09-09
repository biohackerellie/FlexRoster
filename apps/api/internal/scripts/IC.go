package scripts

import (
	arrays "api/internal/lib/arrays"
	"api/internal/lib/icAuth"
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
	token, err := icAuth.IcAuth(s.cache)
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
	req.Header.Set("X-XSRF-TOKEN", env.XSRF_TOKEN)
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	var res ClassResponse
	err = json.NewDecoder(resp.Body).Decode(&res)
	if err != nil {
		return nil, err
	}
	return s.mutateClassData(res.Classes), nil

}

var semesterClassName = env.SEMESTER_CLASS_NAME

// func that performs multiple mutations on the class data

func (s *Scripts) mutateClassData(c []ClassInfo) []*service.Classroom {
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
	appName := env.ONEROSTER_APPNAME
	return fmt.Sprintf("https://mtdecloud2.infinitecampus.org/campus/api/oneroster/v1p2/%s/ims/oneroster/rostering/v1p2", appName)
}

func (s *Scripts) ICClassQuery() string {
	SourceID := env.LHS_SOURCE_ID
	return fmt.Sprintf("%s/schools/%s/classes?limit=1200", s.ICQuery(), SourceID)
}
