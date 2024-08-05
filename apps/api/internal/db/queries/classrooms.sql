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
  COALESCE(a."availableDates", '{}') as "availableDates"
FROM "classrooms" c
LEFT JOIN(
  SELECT
    av."classroomId",
    array_agg(
      jsonb_build_object(
        'id', av."id",
        'date', av."date",
        'available', av."available",
        'teacherId', av."teacherId"
      )
    ) as "availableDates"
  FROM "availability" av
  GROUP BY av."classroomId"
) a ON c."id" = a."classroomId";

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

-- name: ClassroomScheduleQuery :many
SELECT sqlc.embed(availability) FROM "availability" WHERE availability."classroomId" = $1 OR availability."teacherId" = $1;


-- name: CreateComment :exec 
UPDATE "classrooms" SET "comment" = $2
WHERE "teacherId" = $1;


-- name: DeleteComment :exec
UPDATE "classrooms" SET "comment" = NULL
WHERE "teacherId" = $1;


-- name: CreateAvailability :copyfrom
INSERT INTO "availability" ("id", "teacherId", "classroomId", "date", "available")
VALUES($1, $2, $3, $4, $5);

-- name: DeleteAvailability :exec
DELETE FROM "availability"
WHERE "teacherId" = $1 AND "date" = $2;


