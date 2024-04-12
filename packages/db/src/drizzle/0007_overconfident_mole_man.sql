CREATE TABLE IF NOT EXISTS "requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"requester" text NOT NULL,
	"toTeacher" text NOT NULL,
	"currentTeacher" text NOT NULL,
	"dateRequested" timestamp(3),
	"approved" boolean,
	"arrived" text DEFAULT 'not marked' NOT NULL
);
--> statement-breakpoint
DROP TABLE "_prisma_migrations";--> statement-breakpoint
ALTER TABLE "classrooms" ADD COLUMN "comment" text;