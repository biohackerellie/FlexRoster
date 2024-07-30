-- name: UserRequestQuery :many
SELECT sqlc.embed(requests) FROM "requests"
WHERE "studentId" = $1 OR "teacherId" = $1 OR "currentTeacher" = $1;


-- name: StudentRequestsQuery :many
SELECT sqlc.embed(requests) FROM "requests"
JOIN "user" ON "requests"."studentId" = "user"."id"
JOIN "students" ON "user"."email" = "students"."studentEmail"
JOIN "classrooms" ON "requests.newTeacher" = "classrooms"."teacherId"
WHERE "requests"."dateRequested" >= CURRENT_DATE;



-- name: AllStudentRequests :many
SELECT * FROM "requests"
WHERE "studentId" = $1
ORDER BY "dateRequested" DESC;

-- name: ALlRequests :many
SELECT * FROM "requests";


-- name: NewRequest :exec
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
);

-- name: UpdateRequest :exec
UPDATE "requests"
SET "status" = $2
WHERE "id" = $1;
