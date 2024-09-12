-- name: UserRequestQuery :many
SELECT sqlc.embed(requests) FROM "requests"
WHERE "studentId" = $1 OR "teacherId" = $1 OR "currentTeacher" = $1;


-- name: StudentRequestsQuery :many
SELECT sqlc.embed(requests), sqlc.embed(s), sqlc.embed(c), sqlc.embed(u) 
FROM "requests" 
JOIN "user" u ON requests."studentId" = u."id"
JOIN "students" s ON u."email" = s."studentEmail"
JOIN "classrooms" c ON requests."newTeacher" = c."teacherId"
WHERE requests."dateRequested" >= CURRENT_DATE;



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
