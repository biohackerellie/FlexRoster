ALTER TABLE "classRoster" ADD COLUMN "classroomId" text;--> statement-breakpoint
ALTER TABLE "dailyLog" ADD COLUMN "classroom_id" text;--> statement-breakpoint
ALTER TABLE "eventLog" ADD COLUMN "classroom_id" text;--> statement-breakpoint
ALTER TABLE "transferRequest" ADD COLUMN "classroomId" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "classroomID" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "classRoster" ADD CONSTRAINT "classRoster_classroomId_classroom_id_fk" FOREIGN KEY ("classroomId") REFERENCES "classroom"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dailyLog" ADD CONSTRAINT "dailyLog_classroom_id_classroom_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "classroom"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "eventLog" ADD CONSTRAINT "eventLog_classroom_id_classroom_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "classroom"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transferRequest" ADD CONSTRAINT "transferRequest_classroomId_classroom_id_fk" FOREIGN KEY ("classroomId") REFERENCES "classroom"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
