package scripts

import (
	"api/internal/service"
	"context"
	"sync"
	"time"

	"golang.org/x/sync/errgroup"
)

type InitialData struct {
	studentData []*service.Student
	classData   []*service.Classroom
	requestData []*service.RequestWithNewClassroom

	err error
}

func (s *Scripts) SyncStudents(ctx context.Context) error {
	results := make(chan InitialData)
	var (
		dbStudents                []*service.Student
		flexClasses               []*service.Classroom
		dbRequests                []*service.RequestWithNewClassroom
		studentsWithRequestsToday []*service.Student
		fetchErr                  error
		wg                        sync.WaitGroup
	)

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

	rosterData, err := s.GetStudentsPerClass(flexClasses)
	if err != nil {
		return err
	}

	if len(dbRequests) > 0 {
		studentsWithRequestsToday = s.GetStudentsWithRequestsToday(dbRequests, dbStudents, ctx)
	} else {
		studentsWithRequestsToday = []*service.Student{}
	}
	studentsToDelete, studentsToUpdate, studentsToAdd := s.StudentSets(studentsWithRequestsToday, dbStudents, rosterData)

	mu := sync.Mutex{}
	concurrencyLimit := 10
	sem := make(chan struct{}, concurrencyLimit)
	g, ctx := errgroup.WithContext(ctx)

	if len(studentsToDelete) > 0 {
		s.log.Info("Deleting students", "count", len(studentsToDelete))
		sem <- struct{}{}
		g.Go(func() error {
			return RunInMutex(sem, &mu, func() error {
				return s.studentRepo.DeleteStudentTx(ctx, studentsToDelete)
			})
		})
	}

	if len(studentsToUpdate) > 0 {
		s.log.Info("Updating students", "count", len(studentsToUpdate))
		sem <- struct{}{}
		g.Go(func() error {
			return RunInMutex(sem, &mu, func() error {
				return s.studentRepo.UpdateStudentsTx(ctx, studentsToUpdate)
			})
		})
	}
	if len(studentsToAdd) > 0 {
		s.log.Info("Adding students", "count", len(studentsToAdd))
		sem <- struct{}{}
		g.Go(func() error {
			return RunInMutex(sem, &mu, func() error {
				return s.studentRepo.NewStudentTx(ctx, studentsToAdd)
			})
		})
	}
	if err := g.Wait(); err != nil {
		return err
	}
	return nil

}

func (s *Scripts) GetStudentsPerClass(flexClasses []*service.Classroom) ([]*service.Student, error) {

	var (
		rosterData []*service.Student
		mu         sync.Mutex
	)

	concurrencyLimit := 5
	sem := make(chan struct{}, concurrencyLimit)
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
	defer cancel()
	g, ctx := errgroup.WithContext(ctx)

	for _, class := range flexClasses {
		class := class
		sem <- struct{}{}
		g.Go(func() error {
			defer func() { <-sem }()
			students, err := s.GetICStudents(class.Id)
			if err != nil {
				s.log.Warn("Error fetching students for class", "class", class.Id, "err", err)
				return nil
			}
			mu.Lock()
			rosterData = append(rosterData, students...)
			mu.Unlock()
			return nil
		})
	}
	if err := g.Wait(); err != nil {
		return nil, err
	}
	s.log.Info("Roster Data retrieved", "count", len(rosterData))

	return rosterData, nil
}
