ALTER TABLE "availability" ADD COLUMN "teacherId" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "availability" ADD CONSTRAINT "availability_teacherId_user_id_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
