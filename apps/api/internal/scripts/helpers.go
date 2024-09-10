package scripts

import (
	"api/internal/config"
	arrays "api/internal/lib/arrays"
	str "api/internal/lib/strings"
	"api/internal/service"
	"fmt"
	"slices"
	"strings"
	"sync"
)

var preferredNames = env.PreferredNames

func (s *Scripts) Formatting(class *service.Classroom, users []*service.User) (teacher string, userId string, errors error) {
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
