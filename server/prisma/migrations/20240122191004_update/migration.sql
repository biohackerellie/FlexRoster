-- AlterTable
ALTER TABLE "VerificationToken" ALTER COLUMN "code" SET DEFAULT FLOOR(RANDOM()*1000000),
ALTER COLUMN "expires" SET DEFAULT CURRENT_DATE + INTERVAL '12 HOUR';

-- AlterTable
ALTER TABLE "classrooms" ALTER COLUMN "available" SET DEFAULT 'Available',
ALTER COLUMN "available" SET DATA TYPE TEXT;
