package scripts

import (
	"api/internal/service"
	"context"
	"sync"
)

type InitialData struct {
	studentData []*service.Student
	classData   []*service.Classroom
	requestData []*service.Request
	err         error
}

func (s *Scripts) SyncStudents(ctx context.Context) error {
	results := make(chan InitialData)

	var wg sync.WaitGroup
	wg.Add(3)
	go func() {
		defer wg.Done()
		students, err := s.studentRepo.GetAllStudents(ctx)
		results <- InitialData{studentData: students, err: err}
	}()
	go func() {
		defer wg.Done()
		classes, err := s.classroomRepo.GetFlexClasses(ctx)
		results <- InitialData{classData: classes, err: err}
	}()
	go func() {
		defer wg.Done()
		requests, err := s.requestRepo.GetAllRequests(ctx)
		results <- InitialData{requestData: requests, err: err}
	}()

	go func() {
		wg.Wait()
		close(results)
	}()

	var (
		dbStudents  []*service.Student
		flexClasses []*service.Classroom
		dbRequests  []*service.Request
		fetchErr    error
	)

	for res := range results {
		if res.err != nil {
			fetchErr = res.err
			break
		}
		if res.studentData != nil {
			dbStudents = res.studentData
			s.log.Info("DB Students fetched", "count", len(dbStudents))
		} else {
			s.log.Warn("No students found in database")
		}
		if res.classData != nil {
			flexClasses = res.classData
			s.log.Info("Campus Students fetched", "count", len(flexClasses))
		} else {
			s.log.Warn("No students found in Infinite Campus")
		}
		if res.requestData != nil {
			dbRequests = res.requestData
			s.log.Info("DB Requests fetched", "count", len(dbRequests))
		} else {
			s.log.Warn("No requests found in database")
		}
	}
	if fetchErr != nil {
		return fetchErr
	}
	return nil
}

func (s *Scripts) GetStudentsPerClass()
