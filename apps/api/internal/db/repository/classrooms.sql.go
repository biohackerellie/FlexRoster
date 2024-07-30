// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: classrooms.sql

package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const availabilityQuery = `-- name: AvailabilityQuery :many
SELECT id, "classroomId", date, available, "teacherId" FROM "availability"
`

func (q *Queries) AvailabilityQuery(ctx context.Context) ([]Availability, error) {
	rows, err := q.db.Query(ctx, availabilityQuery)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Availability
	for rows.Next() {
		var i Availability
		if err := rows.Scan(
			&i.ID,
			&i.ClassroomId,
			&i.Date,
			&i.Available,
			&i.TeacherId,
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

const classroomQuery = `-- name: ClassroomQuery :many
SELECT 
  c."id", 
  c."roomNumber", 
  c."teacherName", 
  c."teacherId", 
  c."comment",
  c."isFlex",
  COALESCE(a."available", FALSE) AS "available" 
FROM "classrooms" c
LEFT JOIN
  "availability" a ON c."id" = a."classroomId" AND a."date" = CURRENT_DATE
`

type ClassroomQueryRow struct {
	ID          string
	RoomNumber  string
	TeacherName string
	TeacherId   pgtype.Text
	Comment     pgtype.Text
	IsFlex      pgtype.Bool
	Available   bool
}

func (q *Queries) ClassroomQuery(ctx context.Context) ([]ClassroomQueryRow, error) {
	rows, err := q.db.Query(ctx, classroomQuery)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []ClassroomQueryRow
	for rows.Next() {
		var i ClassroomQueryRow
		if err := rows.Scan(
			&i.ID,
			&i.RoomNumber,
			&i.TeacherName,
			&i.TeacherId,
			&i.Comment,
			&i.IsFlex,
			&i.Available,
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

const classroomScheduleQuery = `-- name: ClassroomScheduleQuery :many
SELECT availability.id, availability."classroomId", availability.date, availability.available, availability."teacherId" FROM "availability" WHERE availability."classroomId" = $1 OR availability."teacherId" = $1
`

type ClassroomScheduleQueryRow struct {
	Availability Availability
}

func (q *Queries) ClassroomScheduleQuery(ctx context.Context, classroomid string) ([]ClassroomScheduleQueryRow, error) {
	rows, err := q.db.Query(ctx, classroomScheduleQuery, classroomid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []ClassroomScheduleQueryRow
	for rows.Next() {
		var i ClassroomScheduleQueryRow
		if err := rows.Scan(
			&i.Availability.ID,
			&i.Availability.ClassroomId,
			&i.Availability.Date,
			&i.Availability.Available,
			&i.Availability.TeacherId,
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

const classroomsWithRosterCount = `-- name: ClassroomsWithRosterCount :many
SELECT c.id, c."roomNumber", c."teacherName", c."teacherId", c.comment, c."isFlex", (
  SELECT COUNT(*)
  FROM "students" s
  WHERE s."classroomId" = c."classroomId"
) AS "count"
FROM "classrooms" c
`

type ClassroomsWithRosterCountRow struct {
	ID          string
	RoomNumber  string
	TeacherName string
	TeacherId   pgtype.Text
	Comment     pgtype.Text
	IsFlex      pgtype.Bool
	Count       int64
}

func (q *Queries) ClassroomsWithRosterCount(ctx context.Context) ([]ClassroomsWithRosterCountRow, error) {
	rows, err := q.db.Query(ctx, classroomsWithRosterCount)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []ClassroomsWithRosterCountRow
	for rows.Next() {
		var i ClassroomsWithRosterCountRow
		if err := rows.Scan(
			&i.ID,
			&i.RoomNumber,
			&i.TeacherName,
			&i.TeacherId,
			&i.Comment,
			&i.IsFlex,
			&i.Count,
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

const countRosterByClassroomId = `-- name: CountRosterByClassroomId :one
SELECT COUNT(*)
FROM "students"
WHERE "classroomId" = $1
`

func (q *Queries) CountRosterByClassroomId(ctx context.Context, classroomid string) (int64, error) {
	row := q.db.QueryRow(ctx, countRosterByClassroomId, classroomid)
	var count int64
	err := row.Scan(&count)
	return count, err
}

type CreateAvailabilityParams struct {
	ID          string
	TeacherId   pgtype.Text
	ClassroomId string
	Date        pgtype.Date
	Available   bool
}

const createComment = `-- name: CreateComment :exec
UPDATE "classrooms" SET "comment" = $2
WHERE "teacherId" = $1
`

type CreateCommentParams struct {
	TeacherId pgtype.Text
	Comment   pgtype.Text
}

func (q *Queries) CreateComment(ctx context.Context, arg CreateCommentParams) error {
	_, err := q.db.Exec(ctx, createComment, arg.TeacherId, arg.Comment)
	return err
}

const deleteAvailability = `-- name: DeleteAvailability :exec
DELETE FROM "availability"
WHERE "teacherId" = $1 AND "date" = $2
`

type DeleteAvailabilityParams struct {
	TeacherId pgtype.Text
	Date      pgtype.Date
}

func (q *Queries) DeleteAvailability(ctx context.Context, arg DeleteAvailabilityParams) error {
	_, err := q.db.Exec(ctx, deleteAvailability, arg.TeacherId, arg.Date)
	return err
}

const deleteComment = `-- name: DeleteComment :exec
UPDATE "classrooms" SET "comment" = NULL
WHERE "teacherId" = $1
`

func (q *Queries) DeleteComment(ctx context.Context, teacherid pgtype.Text) error {
	_, err := q.db.Exec(ctx, deleteComment, teacherid)
	return err
}

const roomByIdQuery = `-- name: RoomByIdQuery :one
SELECT
  c."id",
  c."roomNumber",
  u."name" as "teacherName",
  u."id" as "teacherId",
  COALESCE(a."available", FALSE) AS "available"
FROM "classrooms" c
JOIN "user" u ON c."teacherId" = u."id"
LEFT JOIN "availability" a ON c."id" = a."classroomId" AND a."date" = CURRENT_DATE
WHERE c."id" = $1
`

type RoomByIdQueryRow struct {
	ID          string
	RoomNumber  string
	TeacherName pgtype.Text
	TeacherId   string
	Available   bool
}

func (q *Queries) RoomByIdQuery(ctx context.Context, id string) (RoomByIdQueryRow, error) {
	row := q.db.QueryRow(ctx, roomByIdQuery, id)
	var i RoomByIdQueryRow
	err := row.Scan(
		&i.ID,
		&i.RoomNumber,
		&i.TeacherName,
		&i.TeacherId,
		&i.Available,
	)
	return i, err
}

const teacherAvailableToday = `-- name: TeacherAvailableToday :one
SELECT EXISTS (
    SELECT 1
    FROM "availability"
    WHERE "teacherId" = $1 AND "date" = CURRENT_DATE
) AS "available"
`

func (q *Queries) TeacherAvailableToday(ctx context.Context, teacherid pgtype.Text) (bool, error) {
	row := q.db.QueryRow(ctx, teacherAvailableToday, teacherid)
	var available bool
	err := row.Scan(&available)
	return available, err
}

const todaysAvailability = `-- name: TodaysAvailability :many
SELECT "available", "id" 
FROM "availability"
WHERE "date" = CURRENT_DATE
`

type TodaysAvailabilityRow struct {
	Available bool
	ID        string
}

func (q *Queries) TodaysAvailability(ctx context.Context) ([]TodaysAvailabilityRow, error) {
	rows, err := q.db.Query(ctx, todaysAvailability)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []TodaysAvailabilityRow
	for rows.Next() {
		var i TodaysAvailabilityRow
		if err := rows.Scan(&i.Available, &i.ID); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
