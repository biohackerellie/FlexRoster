// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0
// source: logging.sql

package db

import (
	"context"
)

const allLogsQuery = `-- name: AllLogsQuery :many
SELECT logs.id, logs."user", logs.type, logs.action FROM "logs" logs
`

type AllLogsQueryRow struct {
	Log Log `db:"log" json:"log"`
}

func (q *Queries) AllLogsQuery(ctx context.Context) ([]AllLogsQueryRow, error) {
	rows, err := q.db.Query(ctx, allLogsQuery)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []AllLogsQueryRow
	for rows.Next() {
		var i AllLogsQueryRow
		if err := rows.Scan(
			&i.Log.ID,
			&i.Log.User,
			&i.Log.Type,
			&i.Log.Action,
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

const createLog = `-- name: CreateLog :exec
INSERT INTO "logs" ("id", "user", "type", "action")VALUES ($1, $2, $3, $4)
`

type CreateLogParams struct {
	ID     string  `db:"id" json:"id"`
	User   *string `db:"user" json:"user"`
	Type   string  `db:"type" json:"type"`
	Action string  `db:"action" json:"action"`
}

func (q *Queries) CreateLog(ctx context.Context, arg CreateLogParams) error {
	_, err := q.db.Exec(ctx, createLog,
		arg.ID,
		arg.User,
		arg.Type,
		arg.Action,
	)
	return err
}
