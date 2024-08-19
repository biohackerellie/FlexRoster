package scripts

import (
	"context"
	"fmt"
	"math/rand"
	"strings"
	"time"

	"api/internal/service"
)

var (
	ADJ = []string{
		"bright", "cheerful", "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Gregory", "Frank", "Alexander", "Raymond", "Patrick", "Jack", "Dennis", "Jerry", "gloomy", "brave", "calm", "eager", "fierce", "gentle", "happy", "jolly", "kind", "lively", "mighty", "noble", "proud", "quiet", "rich", "strong", "tender", "vast", "warm", "zealous", "graceful", "humble", "innocent", "jovial", "keen", "loyal", "merry", "nervous", "obedient", "polite", "quick", "reliable", "sincere", "trustworthy", "upright", "victorious", "witty", "youthful", "zany", "angry", "bold", "charming", "daring", "elegant", "fearless", "glorious", "heroic", "intelligent", "curious", "courageous", "energetic", "focused", "humorous", "imaginative", "jubilant", "meticulous", "optimistic", "persistent", "resilient", "thoughtful", "vigilant", "wonderful", "zesty",
	}

	NOUNS = []string{
		"tree", "ocean", "mountain", "river", "cloud", "star", "moon", "sun", "forest", "desert", "island", "valley", "city", "village", "bridge", "road", "car", "house", "castle", "tower", "garden", "flower", "bird", "animal", "fish", "insect", "book", "computer", "phone", "table", "chair", "window", "door", "bottle", "cup", "pen", "pencil", "notebook", "clock", "watch", "hat", "shoe", "bag", "coat", "ring", "key", "coin", "stone", "shell", "plane", "train", "boat", "ship", "bicycle", "motorcycle", "spaceship", "rocket", "planet", "starfish", "whale", "dolphin", "shark", "eagle", "lion", "tiger", "elephant", "giraffe", "monkey", "panda", "kangaroo",
	}
)

type Generator struct {
	random *rand.Rand
}

func (r *Generator) randomName() string {
	first := ADJ[r.random.Intn(len(ADJ))]
	last := NOUNS[r.random.Intn(len(NOUNS))]

	return fmt.Sprintf("%s %s", first, last)
}

func getName(seed int64) *Generator {
	nameGenerator := &Generator{
		random: rand.New(rand.New(rand.NewSource(time.Now().UnixNano()))),
	}
	nameGenerator.random.Seed(seed)

	return nameGenerator
}

var (
	randomLetters = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
	randomSource  = rand.NewSource(time.Now().UnixNano())
)

func randString(n int) string {
	b := make([]byte, n)
	for i := range b {
		b[i] = randomLetters[randomSource.Int63()%int64(len(randomLetters))]
	}
	return string(b)
}

func (s *Scripts) SeedDatabase(ctx context.Context) error {
	teacherAmount := 5
	classroomAmount := 5

	uniqueNames := make(map[string]struct{})
	names := make([]string, 0, 50)
	count := 0
	for i := 0; i < 50; i++ {
		count += 1
		name := getName(int64(i)).randomName()
		if _, exists := uniqueNames[name]; !exists {
			uniqueNames[name] = struct{}{}
			names = append(names, name)
		}
	}

	teacherNames := names[:5]
	studentNames := names[5:]

	teachers := make([]*service.User, teacherAmount)
	s.log.Info("Creating Teachers")
	for i := 0; i < teacherAmount; i++ {

		Id := randString(5)
		name := teacherNames[i]
		emailName := strings.ReplaceAll(name, " ", "_")
		teacher := &service.User{
			Name:  name,
			Email: fmt.Sprintf("%s@domain.com", emailName),
			Role:  "teacher",
			Id:    Id,
		}

		teachers[i] = teacher
		s.log.Info("Creating Teacher", "teacher", teacher)
	}
	if err := s.userRepo.CreateUserTx(ctx, teachers); err != nil {
		s.log.Error("error creating teachers", "err", err)
	}
	s.log.Info("Creating Classrooms")
	classrooms := make([]*service.Classroom, classroomAmount)
	for i := 0; i < classroomAmount; i++ {

		ID := randString(5)
		classroom := &service.Classroom{
			Id:          ID,
			TeacherName: teachers[i].Name,
			TeacherId:   teachers[i].Id,
			RoomNumber:  fmt.Sprintf("%d", i+1),
		}
		classrooms[i] = classroom

	}
	if err := s.classroomRepo.NewClassroomTx(ctx, classrooms); err != nil {
		s.log.Error("error creating classrooms", "err", err)
	}
	s.log.Info("Creating Students")
	students := make([]*service.Student, len(studentNames))
	classroomCount := len(classrooms)

	for i, name := range studentNames {

		classroomIndex := i % classroomCount
		emailName := strings.ReplaceAll(name, " ", "")
		student := &service.Student{
			Id:           int32(i),
			StudentName:  name,
			StudentEmail: fmt.Sprintf("%s@domain.com", emailName),
			ClassroomId:  classrooms[classroomIndex].Id,
		}
		students[i] = student

	}
	if err := s.studentRepo.NewStudentTx(ctx, students); err != nil {
		s.log.Error("error creating students", "err", err)
	}

	return nil
}
