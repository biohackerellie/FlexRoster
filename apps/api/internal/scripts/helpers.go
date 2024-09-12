package scripts

import (
	"api/internal/config"
	arrays "api/internal/lib/arrays"
	helpers "api/internal/lib/helpers"
	str "api/internal/lib/strings"
	"api/internal/service"
	"context"
	"fmt"
	"slices"
	"strings"
	"sync"

	"golang.org/x/sync/errgroup"
)

func (s *Scripts) Formatting(class *service.Classroom, users []*service.User) (teacher string, userId string, errors error) {
	var preferredNames = s.config.PreferredNames
	teacherName := str.FormatTeacherNames(class.TeacherName)
	preferredName := slices.IndexFunc(preferredNames, func(c config.PreferredNames) bool {
		return c.GivenName == teacherName
	})
	if preferredName != -1 {
		teacher = preferredNames[preferredName].PreferredName
	} else {
		teacher = teacherName
	}
	user := s.FindUserIdByName(teacher, users)
	if user != "" {
		userId = user
	} else {
		s.log.Error("No user found for teacher", "teacher", teacher)
		return "", "", fmt.Errorf("no user found for teacher %s", teacher)
	}
	return teacher, userId, nil
}

func (s *Scripts) FindUserIdByName(name string, users []*service.User) string {
	searchWords := str.Normalize(name) // normalized name to search for
	for _, user := range users {
		baseWords := strings.Join(str.Normalize(user.Name), " ")
		if arrays.EZEvery(searchWords, func(word string) bool {
			return strings.Contains(baseWords, word)
		}) {
			return user.Id
		}
	}
	return ""
}

type Sets struct {
	availableSet map[string]struct{}
	existingSet  map[string]struct{}
	fetchedSet   map[string]struct{}
}

func (s *Scripts) CreateClassSets(availableClasses, dbClasses, campusClasses []*service.Classroom) (map[string]struct{}, map[string]struct{}, map[string]struct{}) {
	var wg sync.WaitGroup
	results := make(chan Sets)
	wg.Add(3)
	go func() {
		defer wg.Done()
		results <- Sets{availableSet: arrays.EZSet(availableClasses, func(class *service.Classroom) string {
			return class.Id
		})}
	}()
	go func() {
		defer wg.Done()
		results <- Sets{existingSet: arrays.EZSet(dbClasses, func(class *service.Classroom) string {
			return class.Id
		})}
	}()
	go func() {
		defer wg.Done()
		results <- Sets{fetchedSet: arrays.EZSet(campusClasses, func(class *service.Classroom) string {
			return class.Id
		})}
	}()
	go func() {
		wg.Wait()
		close(results)
	}()
	var (
		availableIds map[string]struct{}
		existingIds  map[string]struct{}
		fetchedIds   map[string]struct{}
	)

	for res := range results {
		if res.availableSet != nil {
			availableIds = res.availableSet
		}
		if res.existingSet != nil {
			existingIds = res.existingSet
		}
		if res.fetchedSet != nil {
			fetchedIds = res.fetchedSet
		}
	}
	return availableIds, existingIds, fetchedIds
}

func RunInMutex(sem chan struct{}, mu *sync.Mutex, f func() error) error {
	sem <- struct{}{}
	defer func() { <-sem }()
	mu.Lock()
	defer mu.Unlock()
	return f()
}
func (s *Scripts) GetStudentsWithRequestsToday(requests []*service.RequestWithNewClassroom, students []*service.Student, ctx context.Context) []*service.Student {
	var studentsWithRequestsToday []*service.Student
	mu := sync.Mutex{}
	concurrencyLimit := 10
	sem := make(chan struct{}, concurrencyLimit)
	g, ctx := errgroup.WithContext(ctx)
	for _, student := range students {
		student := student
		sem <- struct{}{}
		g.Go(func() error {
			defer func() { <-sem }()
			ok, id := s.doesStudentHaveRequestToday(requests, student.StudentName)

			if ok {

				mu.Lock()
				studentsWithRequestsToday = append(studentsWithRequestsToday, &service.Student{
					StudentEmail:       student.StudentEmail,
					StudentName:        student.StudentName,
					Status:             service.Status_transferredN,
					ClassroomId:        id,
					DefaultClassroomId: student.DefaultClassroomId,
					Id:                 student.Id,
				},
				)
				mu.Unlock()
			}
			return nil
		})
	}
	if err := g.Wait(); err != nil {
		return nil
	}
	if len(studentsWithRequestsToday) == 0 {
		s.log.Warn("No students with requests found today")
		return nil
	}
	s.log.Info("Students with requests found today", "count", len(studentsWithRequestsToday))
	return studentsWithRequestsToday
}

func (s *Scripts) doesStudentHaveRequestToday(requests []*service.RequestWithNewClassroom, studentName string) (result bool, classId string) {
	result = false
	classId = ""
	for _, req := range requests {
		date := req.Request.DateRequested

		if helpers.IsDateToday(date) {
			if req.Request.StudentName == studentName {
				result = true
				classId = req.Classroom.Id
				break
			}
		}
	}
	return result, classId
}

type studentSets struct {
	withRequestsSet map[string]struct{}
	existingSet     map[string]struct{}
	rosterDataSet   map[string]struct{}
}
type Result struct {
	studentsToDelete []*service.Student
	studentsToUpdate []*service.Student
	studentsToAdd    []*service.Student
}

func (s *Scripts) StudentSets(withRequests, existingStudents, rosterData []*service.Student) (studentsToDelete, studentsToUpdate, studentsToAdd []*service.Student) {
	var wg sync.WaitGroup
	results := make(chan studentSets)

	wg.Add(3)
	go func() {
		defer wg.Done()
		results <- studentSets{withRequestsSet: arrays.EZSet(withRequests, func(student *service.Student) string {
			return student.StudentEmail
		})}
	}()
	go func() {
		defer wg.Done()
		results <- studentSets{existingSet: arrays.EZSet(existingStudents, func(student *service.Student) string {
			return student.StudentEmail
		})}
	}()
	go func() {
		defer wg.Done()
		results <- studentSets{rosterDataSet: arrays.EZSet(rosterData, func(student *service.Student) string {
			return student.StudentEmail
		})}
	}()

	go func() {
		wg.Wait()
		close(results)
	}()

	var (
		withRequestsSet map[string]struct{}
		existingSet     map[string]struct{}
		rosterDataSet   map[string]struct{}
	)

	for res := range results {
		if res.withRequestsSet != nil {
			withRequestsSet = res.withRequestsSet
		}
		if res.existingSet != nil {
			existingSet = res.existingSet
		}
		if res.rosterDataSet != nil {
			rosterDataSet = res.rosterDataSet
		}
	}
	s.log.Info("with Requests", "set", withRequestsSet)
	finalResult := make(chan Result)

	wg.Add(3)
	go func() {
		defer wg.Done()
		finalResult <- Result{studentsToDelete: arrays.EZFilter(existingStudents, func(student *service.Student) bool {
			_, ok := rosterDataSet[student.StudentEmail]
			return !ok
		})}
	}()

	go func() {
		defer wg.Done()
		finalResult <- Result{
			studentsToUpdate: arrays.EZFilter(rosterData, func(s *service.Student) bool {
				_, ok := existingSet[s.StudentEmail]
				_, ok2 := withRequestsSet[s.StudentEmail]
				return ok && !ok2
			})}
	}()
	go func() {
		defer wg.Done()
		finalResult <- Result{
			studentsToAdd: arrays.EZFilter(rosterData, func(s *service.Student) bool {
				_, ok := existingSet[s.StudentEmail]
				_, ok2 := withRequestsSet[s.StudentEmail]
				return !ok && !ok2
			})}
	}()

	go func() {
		wg.Wait()
		close(finalResult)
	}()

	// Collect the final results
	for res := range finalResult {
		if res.studentsToDelete != nil {
			studentsToDelete = res.studentsToDelete
		}
		if res.studentsToUpdate != nil {
			studentsToUpdate = res.studentsToUpdate
		}
		if res.studentsToAdd != nil {
			studentsToAdd = res.studentsToAdd
		}
	}

	return studentsToDelete, studentsToUpdate, studentsToAdd
}
