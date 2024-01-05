ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "classRoster" ADD CONSTRAINT "classRoster_studentEmail_user_email_fk" FOREIGN KEY ("studentEmail") REFERENCES "user"("email") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;