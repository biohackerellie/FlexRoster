/*
  Warnings:

  - You are about to drop the column `classroomId` on the `transferLogs` table. All the data in the column will be lost.
  - Added the required column `roomNumber` to the `transferLogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherName` to the `transferLogs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transferLogs" DROP CONSTRAINT "transferLogs_classroomId_fkey";

-- AlterTable
ALTER TABLE "VerificationToken" ALTER COLUMN "code" SET DEFAULT FLOOR(RANDOM()*1000000),
ALTER COLUMN "expires" SET DEFAULT CURRENT_DATE + INTERVAL '12 HOUR';

-- AlterTable
ALTER TABLE "transferLogs" DROP COLUMN "classroomId",
ADD COLUMN     "roomNumber" TEXT NOT NULL,
ADD COLUMN     "teacherName" TEXT NOT NULL;
