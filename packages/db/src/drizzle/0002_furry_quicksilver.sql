ALTER TABLE "requests" ALTER COLUMN "dateRequested" SET DATA TYPE date USING "dateRequested"::date;--> statement-breakpoint
ALTER TABLE "requests" ALTER COLUMN "dateRequested" DROP NOT NULL;