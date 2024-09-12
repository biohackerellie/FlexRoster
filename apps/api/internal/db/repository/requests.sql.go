// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: requests.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const aLlRequests = `-- name: ALlRequests :many
SELECT id, "studentId", "studentName", "newTeacher", "newTeacherName", "currentTeacher", "currentTeacherName", "dateRequested", status, arrived, timestamp FROM "requests"
`

func (q *Queries) ALlRequests(ctx context.Context) ([]Request, error) {
	rows, err := q.db.Query(ctx, aLlRequests)
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

const newRequest = `-- name: NewRequest :exec
INSERT INTO "requests" (
  "status",
  "studentName",
  "studentId",
  "dateRequested",
  "currentTeacher",
  "currentTeacherName",
  "newTeacher",
  "newTeacherName",
  "arrived",
  "timestamp",
  "id"
)
VALUES (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8,
  $9,
  current_timestamp,
  floor(rand()*(80+1))
)
`

type NewRequestParams struct {
	Status             RequestStatus `db:"status" json:"status"`
	StudentName        string        `db:"studentName" json:"studentName"`
	StudentId          string        `db:"studentId" json:"studentId"`
	DateRequested      pgtype.Date   `db:"dateRequested" json:"dateRequested"`
	CurrentTeacher     string        `db:"currentTeacher" json:"currentTeacher"`
	CurrentTeacherName string        `db:"currentTeacherName" json:"currentTeacherName"`
	NewTeacher         string        `db:"newTeacher" json:"newTeacher"`
	NewTeacherName     string        `db:"newTeacherName" json:"newTeacherName"`
	Arrived            *bool         `db:"arrived" json:"arrived"`
}

func (q *Queries) NewRequest(ctx context.Context, arg NewRequestParams) error {
	_, err := q.db.Exec(ctx, newRequest,
		arg.Status,
		arg.StudentName,
		arg.StudentId,
		arg.DateRequested,
		arg.CurrentTeacher,
		arg.CurrentTeacherName,
		arg.NewTeacher,
		arg.NewTeacherName,
		arg.Arrived,
	)
	return err
}

const studentRequestsQuery = `-- name: StudentRequestsQuery :many
SELECT requests.id, requests."studentId", requests."studentName", requests."newTeacher", requests."newTeacherName", requests."currentTeacher", requests."currentTeacherName", requests."dateRequested", requests.status, requests.arrived, requests.timestamp, s."studentEmail", s."studentName", s."classroomId", s.status, s."defaultClassroomId", s.id, c.id, c."roomNumber", c."teacherName", c."teacherId", c.comment, c."isFlex", u.id, u.name, u.email, u."emailVerified", u.image, u.role 
FROM "requests" 
JOIN "user" u ON requests."studentId" = u."id"
JOIN "students" s ON u."email" = s."studentEmail"
JOIN "classrooms" c ON requests."newTeacher" = c."teacherId"
WHERE requests."dateRequested" >= CURRENT_DATE
`

type StudentRequestsQueryRow struct {
	Request   Request   `db:"request" json:"request"`
	Student   Student   `db:"student" json:"student"`
	Classroom Classroom `db:"classroom" json:"classroom"`
	User      User      `db:"user" json:"user"`
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
			&i.Request.ID,
			&i.Request.StudentId,
			&i.Request.StudentName,
			&i.Request.NewTeacher,
			&i.Request.NewTeacherName,
			&i.Request.CurrentTeacher,
			&i.Request.CurrentTeacherName,
			&i.Request.DateRequested,
			&i.Request.Status,
			&i.Request.Arrived,
			&i.Request.Timestamp,
			&i.Student.StudentEmail,
			&i.Student.StudentName,
			&i.Student.ClassroomId,
			&i.Student.Status,
			&i.Student.DefaultClassroomId,
			&i.Student.ID,
			&i.Classroom.ID,
			&i.Classroom.RoomNumber,
			&i.Classroom.TeacherName,
			&i.Classroom.TeacherId,
			&i.Classroom.Comment,
			&i.Classroom.IsFlex,
			&i.User.ID,
			&i.User.Name,
			&i.User.Email,
			&i.User.EmailVerified,
			&i.User.Image,
			&i.User.Role,
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

const updateRequest = `-- name: UpdateRequest :exec
UPDATE "requests"
SET "status" = $2
WHERE "id" = $1
`

type UpdateRequestParams struct {
	ID     int32         `db:"id" json:"id"`
	Status RequestStatus `db:"status" json:"status"`
}

func (q *Queries) UpdateRequest(ctx context.Context, arg UpdateRequestParams) error {
	_, err := q.db.Exec(ctx, updateRequest, arg.ID, arg.Status)
	return err
}

const userRequestQuery = `-- name: UserRequestQuery :many
SELECT requests.id, requests."studentId", requests."studentName", requests."newTeacher", requests."newTeacherName", requests."currentTeacher", requests."currentTeacherName", requests."dateRequested", requests.status, requests.arrived, requests.timestamp FROM "requests"
WHERE "studentId" = $1 OR "teacherId" = $1 OR "currentTeacher" = $1
`

type UserRequestQueryRow struct {
	Request Request `db:"request" json:"request"`
}

func (q *Queries) UserRequestQuery(ctx context.Context, studentid string) ([]UserRequestQueryRow, error) {
	rows, err := q.db.Query(ctx, userRequestQuery, studentid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []UserRequestQueryRow
	for rows.Next() {
		var i UserRequestQueryRow
		if err := rows.Scan(
			&i.Request.ID,
			&i.Request.StudentId,
			&i.Request.StudentName,
			&i.Request.NewTeacher,
			&i.Request.NewTeacherName,
			&i.Request.CurrentTeacher,
			&i.Request.CurrentTeacherName,
			&i.Request.DateRequested,
			&i.Request.Status,
			&i.Request.Arrived,
			&i.Request.Timestamp,
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
