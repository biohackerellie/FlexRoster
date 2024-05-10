ALTER TABLE "config" ADD PRIMARY KEY ("createdAt");--> statement-breakpoint
ALTER TABLE "config" ALTER COLUMN "secretaries" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "config" ALTER COLUMN "excludedTeachers" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "config" ALTER COLUMN "semesterClassName" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "config" ALTER COLUMN "createdAt" SET NOT NULL;