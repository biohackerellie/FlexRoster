-- name: UserRequestQuery :many
SELECT * FROM "requests"
WHERE "studentId" = $1 OR "teacherId" = $1 OR "currentTeacher" = $1;


-- name: StudentRequestsQuery :many
SELECT * FROM "requests"
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
