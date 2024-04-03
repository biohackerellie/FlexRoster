ALTER TABLE "session" RENAME COLUMN "expires_at" TO "expires";--> statement-breakpoint
ALTER TABLE "session" ADD PRIMARY KEY ("sessionToken");--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "expires" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "session" DROP COLUMN IF EXISTS "id";