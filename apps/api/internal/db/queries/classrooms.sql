-- name: TodaysAvailability :many
SELECT "available", "id" 
FROM "availability"
WHERE "date" = CURRENT_DATE;


-- name: AvailabilityQuery :many
SELECT * FROM "availability";



-- name: ClassroomQuery :many
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
  "availability" a ON c."id" = a."classroomId" AND a."date" = CURRENT_DATE;
  



-- name: TeacherAvailableToday :one
SELECT EXISTS (
    SELECT 1
    FROM "availability"
    WHERE "teacherId" = $1 AND "date" = CURRENT_DATE
) AS "available";


-- name: CountRosterByClassroomId :one
SELECT COUNT(*)
FROM "students"
WHERE "classroomId" = $1;


-- name: ClassroomsWithRosterCount :many
SELECT c.*, (
  SELECT COUNT(*)
  FROM "students" s
  WHERE s."classroomId" = c."classroomId"
) AS "count"
FROM "classrooms" c;

-- name: RoomByIdQuery :one
SELECT
  c."id",
  c."roomNumber",
  u."name" as "teacherName",
  u."id" as "teacherId",
  COALESCE(a."available", FALSE) AS "available"
FROM "classrooms" c
JOIN "user" u ON c."teacherId" = u."id"
LEFT JOIN "availability" a ON c."id" = a."classroomId" AND a."date" = CURRENT_DATE
WHERE c."id" = $1;
