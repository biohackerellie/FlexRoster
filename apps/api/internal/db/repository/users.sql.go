// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: users.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const getTeacher = `-- name: GetTeacher :one
SELECT "user".id, name, email, "emailVerified", image, role, classrooms.id, "roomNumber", "teacherName", "teacherId", comment, "isFlex" FROM "user"
LEFT JOIN "classrooms" ON "classrooms"."teacherId" = "user"."id"
WHERE "user"."id" = $1 LIMIT 1
`

type GetTeacherRow struct {
	ID            string           `db:"id" json:"id"`
	Name          pgtype.Text      `db:"name" json:"name"`
	Email         string           `db:"email" json:"email"`
	EmailVerified pgtype.Timestamp `db:"emailVerified" json:"emailVerified"`
	Image         pgtype.Text      `db:"image" json:"image"`
	Role          string           `db:"role" json:"role"`
	ID_2          pgtype.Text      `db:"id_2" json:"id_2"`
	RoomNumber    pgtype.Text      `db:"roomNumber" json:"roomNumber"`
	TeacherName   pgtype.Text      `db:"teacherName" json:"teacherName"`
	TeacherId     pgtype.Text      `db:"teacherId" json:"teacherId"`
	Comment       pgtype.Text      `db:"comment" json:"comment"`
	IsFlex        pgtype.Bool      `db:"isFlex" json:"isFlex"`
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
	ID    string      `db:"id" json:"id"`
	Name  pgtype.Text `db:"name" json:"name"`
	Email string      `db:"email" json:"email"`
	Role  string      `db:"role" json:"role"`
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
SELECT "user".id, name, email, "emailVerified", image, role, "studentEmail", "studentName", "classroomId", status, s.id, c.id, "roomNumber", "teacherName", "teacherId", comment, "isFlex" FROM "user"
JOIN "students" s ON s."studentEmail" = "user"."email"
JOIN "classrooms" c ON c."id" = s."classroomId"
WHERE "user"."id" = $1
`

type UserRosterQueryRow struct {
	ID            string           `db:"id" json:"id"`
	Name          pgtype.Text      `db:"name" json:"name"`
	Email         string           `db:"email" json:"email"`
	EmailVerified pgtype.Timestamp `db:"emailVerified" json:"emailVerified"`
	Image         pgtype.Text      `db:"image" json:"image"`
	Role          string           `db:"role" json:"role"`
	StudentEmail  string           `db:"studentEmail" json:"studentEmail"`
	StudentName   string           `db:"studentName" json:"studentName"`
	ClassroomId   string           `db:"classroomId" json:"classroomId"`
	Status        Status           `db:"status" json:"status"`
	ID_2          int32            `db:"id_2" json:"id_2"`
	ID_3          string           `db:"id_3" json:"id_3"`
	RoomNumber    string           `db:"roomNumber" json:"roomNumber"`
	TeacherName   string           `db:"teacherName" json:"teacherName"`
	TeacherId     pgtype.Text      `db:"teacherId" json:"teacherId"`
	Comment       pgtype.Text      `db:"comment" json:"comment"`
	IsFlex        pgtype.Bool      `db:"isFlex" json:"isFlex"`
}

func (q *Queries) UserRosterQuery(ctx context.Context, id string) (UserRosterQueryRow, error) {
	row := q.db.QueryRow(ctx, userRosterQuery, id)
	var i UserRosterQueryRow
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Email,
		&i.EmailVerified,
		&i.Image,
		&i.Role,
		&i.StudentEmail,
		&i.StudentName,
		&i.ClassroomId,
		&i.Status,
		&i.ID_2,
		&i.ID_3,
		&i.RoomNumber,
		&i.TeacherName,
		&i.TeacherId,
		&i.Comment,
		&i.IsFlex,
	)
	return i, err
}