-- name: GetUser :one
SELECT "id", "name", "email", "role"
FROM "user"
WHERE "id" = $1 LIMIT 1;


-- name: GetTeacher :one
SELECT * FROM "user"
LEFT JOIN "classrooms" ON "classrooms"."teacherId" = "user"."id"
WHERE "user"."id" = $1 LIMIT 1;

-- name: UserRosterQuery :one
SELECT * FROM "user"
JOIN "students" s ON s."studentEmail" = "user"."email"
JOIN "classrooms" c ON c."id" = s."classroomId"
WHERE "user"."id" = $1;
