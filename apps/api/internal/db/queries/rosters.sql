-- name: RosterQuery :many
SELECT * FROM "students";

-- name: AllStudentsMap :many
SELECT "students"."id", "students"."studentEmail", "students"."studentName", "students"."status", "classrooms"."teacherName"
FROM "students"
JOIN "classrooms" ON "students"."classroomId" = "classrooms"."id";

-- name: RosterById :many
SELECT * FROM "students" WHERE "id" = $1;

-- name: RosterByTeacherId :many
SELECT "students"."studentEmail", "students"."studentName","students"."status", "user"."id" AS "studentId", "classrooms"."roomNumber", "classrooms"."teacherName", "classrooms"."id" AS "classroomId", "classrooms"."comment"
FROM "students"
JOIN "classrooms" ON "students"."classroomId" = "classrooms"."id"
LEFT JOIN "user" ON "students"."studentEmail" = "user"."email"
WHERE "classrooms"."teacherId" = $1;

-- name: AllStudentDetails :many
SELECT * FROM "students"
LEFT JOIN "user" ON "students"."studentEmail" = "user"."email"
LEFT JOIN "classrooms" ON "students"."classroomId" = "classrooms"."id"
WHERE "students"."id" = $1;

