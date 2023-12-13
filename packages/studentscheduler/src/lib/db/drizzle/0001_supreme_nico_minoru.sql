DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('admin', 'student', 'teacher', 'secretary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "role" DEFAULT 'student' NOT NULL;