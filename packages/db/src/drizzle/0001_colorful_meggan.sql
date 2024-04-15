ALTER TABLE "requests" ADD COLUMN "studentId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "requests" DROP COLUMN IF EXISTS "requester";