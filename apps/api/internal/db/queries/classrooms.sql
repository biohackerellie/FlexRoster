-- name: TodaysAvailability :many
SELECT "available", "id" 
FROM "availability"
WHERE "date" >= CURRENT_DATE;


-- name: AvailabilityQuery :many
SELECT * FROM "availability"



-- name: ClassroomQuery :many
SELECT 
    "id", 
    "roomNumber", 
    "teacherName", 
    "teacherId", 
    "availability"."available", 
    "comment"
FROM 
    "classrooms"
LEFT JOIN 
    "availability" 
ON 
    "id" = "availability"."classroomId" 
    AND "availability"."date" >= CURRENT_DATE;

