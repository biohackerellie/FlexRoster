-- name: GetUser :one
SELECT "id", "name", "email", "role"
FROM "user"
WHERE "id" = $1 LIMIT 1;


-- name: GetTeacher :one
SELECT * FROM "user"
LEFT JOIN "classrooms" ON "classrooms"."teacherId" = "user"."id"
WHERE "user"."id" = $1 LIMIT 1;

-- name: UserRosterQuery :one
SELECT sqlc.embed(u), sqlc.embed(s), sqlc.embed(c) 
FROM "user" u
JOIN "students" s ON s."studentEmail" = u."email"
JOIN "classrooms" c ON c."id" = s."classroomId"
WHERE "user"."id" = $1;

-- name: CreateUser :exec
INSERT INTO "user" ("id", "name", "email", "role") VALUES ($1, $2, $3, $4) ON CONFLICT("id") DO UPDATE SET "name" = $2, "email" = $3, "role" = $4; 

-- name: GetAllTeacherIds :many
SELECT "id" FROM "user" WHERE "role" = 'teacher'; 

-- name: GetAllTeachers :many
SELECT sqlc.embed(u) FROM "user" u WHERE "role" = 'teacher';