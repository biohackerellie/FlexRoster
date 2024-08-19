-- name: AllLogsQuery :many
SELECT sqlc.embed(logs) FROM "logs" logs;

-- name: CreateLog :exec
INSERT INTO "logs" ("id", "user", "type", "action")VALUES ($1, $2, $3, $4);

