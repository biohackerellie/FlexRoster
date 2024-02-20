ALTER TABLE "classRosters" ADD CONSTRAINT "classRosters_studentEmail_unique" UNIQUE("studentEmail");--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");