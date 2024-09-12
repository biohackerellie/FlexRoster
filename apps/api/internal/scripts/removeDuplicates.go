package scripts

import (
	"api/internal/lib/arrays"
	"api/internal/service"
	"context"
)

func (s *Scripts) RemoveDuplicates(ctx context.Context) error {
	students, err := s.studentRepo.GetAllStudents(ctx)

	if err != nil {
		return err
	}
	emails := arrays.EZMap(students, func(student *service.Student) string {
		return student.StudentEmail
	})

	duplicates := arrays.EZFilter(emails, func(email string) bool {
		return arrays.EZIndexOf(emails, email) != arrays.EZLastIndexOf(emails, email)
	})

	if len(duplicates) == 0 {
		s.log.Info("No duplicates found")
		return nil
	}
	s.log.Info("Duplicates found", "count", len(duplicates))
	toDelete := make([]*service.Student, 0)
	for _, email := range duplicates {
		user, _ := arrays.EZFind(students, func(student *service.Student) bool {
			return student.StudentEmail == email
		})
		toDelete = append(toDelete, user)
	}

	if err := s.studentRepo.DeleteStudentTx(ctx, toDelete); err != nil {
		return err
	}
	return nil
}
