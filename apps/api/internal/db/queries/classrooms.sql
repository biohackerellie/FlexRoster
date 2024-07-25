-- name: TodaysAvailability :many
SELECT "available", "id" 
FROM "availability"
WHERE "date" >= CURRENT_DATE;


-- name: AvailabilityQuery :many
SELECT * FROM "availability";



-- name: ClassroomQuery :many
SELECT 
    "classrooms"."id", 
    "roomNumber", 
    "teacherName", 
    "classrooms"."teacherId", 
    "availability"."available", 
    "comment"
FROM 
    "classrooms"
LEFT JOIN 
    "availability" 
ON 
    "classrooms"."id" = "availability"."classroomId" 
    AND "availability"."date" >= CURRENT_DATE;



-- name: TeacherAvailableToday :one
SELECT "availability"."available"
FROM "availability"
WHERE "teacherId" = $1 AND "date" = CURRENT_DATE;


-- name: CountRosterByClassroomId :one
SELECT COUNT(*)
FROM "students"
WHERE "classroomId" = $1;

