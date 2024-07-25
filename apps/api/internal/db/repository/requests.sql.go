// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: requests.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const allStudentRequests = `-- name: AllStudentRequests :many
SELECT id, "studentId", "studentName", "newTeacher", "newTeacherName", "currentTeacher", "currentTeacherName", "dateRequested", status, arrived, timestamp FROM "requests"
WHERE "studentId" = $1
ORDER BY "dateRequested" DESC
`

func (q *Queries) AllStudentRequests(ctx context.Context, studentid string) ([]Request, error) {
	rows, err := q.db.Query(ctx, allStudentRequests, studentid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Request
	for rows.Next() {
		var i Request
		if err := rows.Scan(
			&i.ID,
			&i.StudentId,
			&i.StudentName,
			&i.NewTeacher,
			&i.NewTeacherName,
			&i.CurrentTeacher,
			&i.CurrentTeacherName,
			&i.DateRequested,
			&i.Status,
			&i.Arrived,
			&i.Timestamp,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const studentRequestsQuery = `-- name: StudentRequestsQuery :many
SELECT requests.id, "studentId", "studentName", "newTeacher", "newTeacherName", "currentTeacher", "currentTeacherName", "dateRequested", requests.status, arrived, timestamp, "user".id, name, email, "emailVerified", image, role, "studentEmail", "studentName", "classroomId", students.status, students.id, classrooms.id, "roomNumber", "teacherName", "teacherId", comment, "isFlex" FROM "requests"
JOIN "user" ON "requests"."studentId" = "user"."id"
JOIN "students" ON "user"."email" = "students"."studentEmail"
JOIN "classrooms" ON "requests.newTeacher" = "classrooms"."teacherId"
WHERE "requests"."dateRequested" >= GETDATE()
`

type StudentRequestsQueryRow struct {
	ID                 int32
	StudentId          string
	StudentName        string
	NewTeacher         string
	NewTeacherName     string
	CurrentTeacher     string
	CurrentTeacherName string
	DateRequested      pgtype.Date
	Status             RequestStatus
	Arrived            pgtype.Bool
	Timestamp          string
	ID_2               string
	Name               pgtype.Text
	Email              string
	EmailVerified      pgtype.Timestamp
	Image              pgtype.Text
	Role               string
	StudentEmail       string
	StudentName_2      string
	ClassroomId        string
	Status_2           Status
	ID_3               int32
	ID_4               string
	RoomNumber         string
	TeacherName        string
	TeacherId          pgtype.Text
	Comment            pgtype.Text
	IsFlex             pgtype.Bool
}

func (q *Queries) StudentRequestsQuery(ctx context.Context) ([]StudentRequestsQueryRow, error) {
	rows, err := q.db.Query(ctx, studentRequestsQuery)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []StudentRequestsQueryRow
	for rows.Next() {
		var i StudentRequestsQueryRow
		if err := rows.Scan(
			&i.ID,
			&i.StudentId,
			&i.StudentName,
			&i.NewTeacher,
			&i.NewTeacherName,
			&i.CurrentTeacher,
			&i.CurrentTeacherName,
			&i.DateRequested,
			&i.Status,
			&i.Arrived,
			&i.Timestamp,
			&i.ID_2,
			&i.Name,
			&i.Email,
			&i.EmailVerified,
			&i.Image,
			&i.Role,
			&i.StudentEmail,
			&i.StudentName_2,
			&i.ClassroomId,
			&i.Status_2,
			&i.ID_3,
			&i.ID_4,
			&i.RoomNumber,
			&i.TeacherName,
			&i.TeacherId,
			&i.Comment,
			&i.IsFlex,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const userRequestQuery = `-- name: UserRequestQuery :many
SELECT id, "studentId", "studentName", "newTeacher", "newTeacherName", "currentTeacher", "currentTeacherName", "dateRequested", status, arrived, timestamp FROM "requests"
WHERE "studentId" = $1 OR "teacherId" = $1 OR "currentTeacher" = $1
`

func (q *Queries) UserRequestQuery(ctx context.Context, studentid string) ([]Request, error) {
	rows, err := q.db.Query(ctx, userRequestQuery, studentid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Request
	for rows.Next() {
		var i Request
		if err := rows.Scan(
			&i.ID,
			&i.StudentId,
			&i.StudentName,
			&i.NewTeacher,
			&i.NewTeacherName,
			&i.CurrentTeacher,
			&i.CurrentTeacherName,
			&i.DateRequested,
			&i.Status,
			&i.Arrived,
			&i.Timestamp,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
