CREATE UNIQUE INDEX IF NOT EXISTS "email_idx" ON "students" ("studentEmail");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "classrooms" ADD CONSTRAINT "classrooms_teacherId_user_id_fk" FOREIGN KEY ("teacherId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
