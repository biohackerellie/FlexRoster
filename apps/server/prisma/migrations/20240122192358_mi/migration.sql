/*
  Warnings:

  - The `available` column on the `classrooms` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "VerificationToken" ALTER COLUMN "code" SET DEFAULT FLOOR(RANDOM()*1000000),
ALTER COLUMN "expires" SET DEFAULT CURRENT_DATE + INTERVAL '12 HOUR';

-- AlterTable
ALTER TABLE "classrooms" DROP COLUMN "available",
ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true;
