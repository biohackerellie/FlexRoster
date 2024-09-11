// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: users.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const createUser = `-- name: CreateUser :exec
INSERT INTO "user" ("id", "name", "email", "role") VALUES ($1, $2, $3, $4) ON CONFLICT("id") DO UPDATE SET "name" = $2, "email" = $3, "role" = $4
`

type CreateUserParams struct {
	ID    string  `db:"id" json:"id"`
	Name  *string `db:"name" json:"name"`
	Email string  `db:"email" json:"email"`
	Role  string  `db:"role" json:"role"`
}

func (q *Queries) CreateUser(ctx context.Context, arg CreateUserParams) error {
	_, err := q.db.Exec(ctx, createUser,
		arg.ID,
		arg.Name,
		arg.Email,
		arg.Role,
	)
	return err
}

const getAllTeacherIds = `-- name: GetAllTeacherIds :many
SELECT "id" FROM "user" WHERE "role" = 'teacher'
`

func (q *Queries) GetAllTeacherIds(ctx context.Context) ([]string, error) {
	rows, err := q.db.Query(ctx, getAllTeacherIds)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []string
	for rows.Next() {
		var id string
		if err := rows.Scan(&id); err != nil {
			return nil, err
		}
		items = append(items, id)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getAllTeachers = `-- name: GetAllTeachers :many
SELECT u.id, u.name, u.email, u."emailVerified", u.image, u.role FROM "user" u WHERE "role" = 'teacher'
`

type GetAllTeachersRow struct {
	User User `db:"user" json:"user"`
}

func (q *Queries) GetAllTeachers(ctx context.Context) ([]GetAllTeachersRow, error) {
	rows, err := q.db.Query(ctx, getAllTeachers)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GetAllTeachersRow
	for rows.Next() {
		var i GetAllTeachersRow
		if err := rows.Scan(
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

const getTeacher = `-- name: GetTeacher :one
SELECT "user".id, name, email, "emailVerified", image, role, classrooms.id, "roomNumber", "teacherName", "teacherId", comment, "isFlex" FROM "user"
LEFT JOIN "classrooms" ON "classrooms"."teacherId" = "user"."id"
WHERE "user"."id" = $1 LIMIT 1
`

type GetTeacherRow struct {
	ID            string           `db:"id" json:"id"`
	Name          *string          `db:"name" json:"name"`
	Email         string           `db:"email" json:"email"`
	EmailVerified pgtype.Timestamp `db:"emailVerified" json:"emailVerified"`
	Image         *string          `db:"image" json:"image"`
	Role          string           `db:"role" json:"role"`
	ID_2          *string          `db:"id_2" json:"id_2"`
	RoomNumber    *string          `db:"roomNumber" json:"roomNumber"`
	TeacherName   *string          `db:"teacherName" json:"teacherName"`
	TeacherId     *string          `db:"teacherId" json:"teacherId"`
	Comment       *string          `db:"comment" json:"comment"`
	IsFlex        *bool            `db:"isFlex" json:"isFlex"`
}

func (q *Queries) GetTeacher(ctx context.Context, id string) (GetTeacherRow, error) {
	row := q.db.QueryRow(ctx, getTeacher, id)
	var i GetTeacherRow
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Email,
		&i.EmailVerified,
		&i.Image,
		&i.Role,
		&i.ID_2,
		&i.RoomNumber,
		&i.TeacherName,
		&i.TeacherId,
		&i.Comment,
		&i.IsFlex,
	)
	return i, err
}

const getUser = `-- name: GetUser :one
SELECT "id", "name", "email", "role"
FROM "user"
WHERE "id" = $1 LIMIT 1
`

type GetUserRow struct {
	ID    string  `db:"id" json:"id"`
	Name  *string `db:"name" json:"name"`
	Email string  `db:"email" json:"email"`
	Role  string  `db:"role" json:"role"`
}

func (q *Queries) GetUser(ctx context.Context, id string) (GetUserRow, error) {
	row := q.db.QueryRow(ctx, getUser, id)
	var i GetUserRow
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Email,
		&i.Role,
	)
	return i, err
}

const userRosterQuery = `-- name: UserRosterQuery :one
SELECT u.id, u.name, u.email, u."emailVerified", u.image, u.role, s."studentEmail", s."studentName", s."classroomId", s.status, s."defaultClassroomId", s.id, c.id, c."roomNumber", c."teacherName", c."teacherId", c.comment, c."isFlex" 
FROM "user" u
JOIN "students" s ON s."studentEmail" = u."email"
JOIN "classrooms" c ON c."id" = s."classroomId"
WHERE "user"."id" = $1
`

type UserRosterQueryRow struct {
	User      User      `db:"user" json:"user"`
	Student   Student   `db:"student" json:"student"`
	Classroom Classroom `db:"classroom" json:"classroom"`
}

func (q *Queries) UserRosterQuery(ctx context.Context, id string) (UserRosterQueryRow, error) {
	row := q.db.QueryRow(ctx, userRosterQuery, id)
	var i UserRosterQueryRow
	err := row.Scan(
		&i.User.ID,
		&i.User.Name,
		&i.User.Email,
		&i.User.EmailVerified,
		&i.User.Image,
		&i.User.Role,
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
	)
	return i, err
}
