ALTER TABLE "classRoster" RENAME COLUMN "studentId" TO "studentEmail";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "roster_id";