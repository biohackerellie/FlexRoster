DROP TABLE "account";--> statement-breakpoint
ALTER TABLE "session" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "session" RENAME COLUMN "expires" TO "expires_at";--> statement-breakpoint
ALTER TABLE "session" DROP CONSTRAINT "session_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "expires_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "session" ADD COLUMN "id" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "session" DROP COLUMN IF EXISTS "sessionToken";