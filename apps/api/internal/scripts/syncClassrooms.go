package scripts

import (
	"api/internal/lib/arrays"

	"api/internal/service"
	"context"

	"fmt"
	"sync"

	"golang.org/x/sync/errgroup"
)

type ChanResponse struct {
	dbData  []*service.Classroom
	icData  []*service.Classroom
	dbUsers []*service.User
	err     error
}

func (s *Scripts) SyncClassrooms(ctx context.Context) error {
	results := make(chan ChanResponse)
	if s.classroomRepo == nil {
		return fmt.Errorf("classroomRepo is nil")
	}
	var wg sync.WaitGroup
	wg.Add(3)
	go func() {
		defer wg.Done()
		classes, err := s.classroomRepo.GetClassroomsNoDates(ctx)
		results <- ChanResponse{dbData: classes, err: err}
	}()
	go func() {
		defer wg.Done()
		icClasses, err := s.GetClasses()
		results <- ChanResponse{icData: icClasses, err: err}
	}()
	go func() {
		defer wg.Done()
		users, err := s.userRepo.GetAllTeachers(ctx)
		results <- ChanResponse{dbUsers: users, err: err}
	}()

	go func() {
		wg.Wait()
		close(results)
	}()

	var (
		dbClasses     []*service.Classroom
		campusClasses []*service.Classroom
		dbTeachers    []*service.User
		fetchErr      error
	)
	for res := range results {
		if res.err != nil {
			fetchErr = res.err
			break
		}
		if res.dbData != nil {
			dbClasses = res.dbData
			s.log.Info("DB Classrooms fetched", "count", len(dbClasses))
		} else {
			s.log.Warn("No classrooms found in DB")
		}
		if res.icData != nil {
			campusClasses = res.icData
			s.log.Info("Campus Classrooms fetched", "count", len(campusClasses))
		} else {
			s.log.Warn("No classrooms found in Infinite Campus")
		}
		if res.dbUsers != nil {
			dbTeachers = res.dbUsers
			s.log.Info("DB Teachers fetched", "count", len(dbTeachers))
		} else {
			s.log.Warn("No teachers found in DB")
		}
	}

	if fetchErr != nil {
		s.log.Error("Error retrieving data", "err", fetchErr)
		return fetchErr
	}
	if len(dbClasses) == 0 {
		err := s.AddAllClassesToDB(ctx, campusClasses, dbTeachers)
		if err != nil {
			s.log.Error("Error adding all classes to DB", "err", err)
			return err
		}
		return nil
	} else {
		err := s.UpdateExistingClasses(ctx, dbClasses, campusClasses, dbTeachers)
		if err != nil {
			s.log.Error("Error updating existing classes", "err", err)
			return err

		}
	}
	return nil
}

func (s *Scripts) AddAllClassesToDB(ctx context.Context, classes []*service.Classroom, users []*service.User) error {
	s.log.Info("No classrooms found in DB, adding all from Infinite Campus")
	var (
		dataToInsert []*service.Classroom
		mu           sync.Mutex
	)
	concurrencyLimit := 10
	sem := make(chan struct{}, concurrencyLimit)
	g, ctx := errgroup.WithContext(ctx)
	newTeacherCount := 0
	for _, class := range classes {
		class := class
		sem <- struct{}{}
		g.Go(func() error {
			defer func() { <-sem }()
			teacher, userId, err := s.Formatting(class, users)
			if err != nil {
				s.log.Warn("Error formatting teacher", "err", err)
				return nil
			}
			class.TeacherName = teacher
			class.TeacherId = userId
			mu.Lock()
			dataToInsert = append(dataToInsert, class)
			newTeacherCount++
			mu.Unlock()
			return nil
		})
	}
	if err := g.Wait(); err != nil {
		return err
	}
	s.log.Info("Adding new classrooms to DB", "count", newTeacherCount)
	err := s.classroomRepo.NewClassroomTx(context.Background(), dataToInsert)
	if err != nil {
		s.log.Error("Error inserting classrooms", "err", err)
		return err
	}
	return nil
}

func (s *Scripts) UpdateExistingClasses(ctx context.Context, dbClasses []*service.Classroom, campusClasses []*service.Classroom, users []*service.User) error {
	availableClasses := arrays.EZFilter(dbClasses, func(class *service.Classroom) bool {
		return class.Available == true
	})

	availableIds, existingIds := s.CreateClassSets(availableClasses, dbClasses, campusClasses)
	// classesToDelete := arrays.EZFilter(dbClasses, func(class *service.Classroom) bool {
	// 	_, ok := fetchedIds[class.Id]
	// 	return !ok
	// })

	// classesToDeleteIds := arrays.EZMap(classesToDelete, func(class *service.Classroom) string {
	// 	return class.Id
	// })

	classesToUpdate := arrays.EZFilter(campusClasses, func(class *service.Classroom) bool {
		return arrays.EZSome(dbClasses, func(dbClass *service.Classroom) bool {
			return dbClass.Id == class.Id &&
				dbClass.RoomNumber != class.RoomNumber &&
				availableIds[dbClass.Id] == struct{}{}
		})
	})

	classesToInsert := arrays.EZFilter(campusClasses, func(class *service.Classroom) bool {
		_, ok := existingIds[class.Id]
		return !ok
	})

	mu := sync.Mutex{}
	concurrencyLimit := 10
	sem := make(chan struct{}, concurrencyLimit)
	g, ctx := errgroup.WithContext(ctx)
	// if len(classesToDelete) > 0 {
	// 	sem <- struct{}{}
	// 	g.Go(func() error {
	// 		return RunInMutex(sem, &mu, func() error {
	// 			return s.classroomRepo.DeleteClassroomTx(ctx, classesToDeleteIds)
	// 		})
	// 	})
	// }
	if len(classesToUpdate) > 0 {
		sem <- struct{}{}
		g.Go(func() error {
			return RunInMutex(sem, &mu, func() error {
				return s.classroomRepo.UpdateClassroomTx(ctx, classesToUpdate)
			})
		})
	}
	if len(classesToInsert) > 0 {
		dataToInsert := make([]*service.Classroom, 0)
		var toInsertMu sync.Mutex
		for _, class := range classesToInsert {
			sem <- struct{}{}
			g.Go(func() error {
				defer func() { <-sem }()
				teacher, userId, err := s.Formatting(class, users)
				if err != nil {
					s.log.Warn("Error formatting teacher", "err", err)
					return nil
				}
				class.TeacherName = teacher
				class.TeacherId = userId

				toInsertMu.Lock()
				dataToInsert = append(dataToInsert, class)
				toInsertMu.Unlock()

				return nil
			})
		}
	}
	if err := g.Wait(); err != nil {
		return err
	}
	return nil

}
