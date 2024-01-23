-- AlterTable
ALTER TABLE "VerificationToken" ALTER COLUMN "code" SET DEFAULT FLOOR(RANDOM()*1000000),
ALTER COLUMN "expires" SET DEFAULT CURRENT_DATE + INTERVAL '12 HOUR';

-- CreateTable
CREATE TABLE "transferLogs" (
    "id" SERIAL NOT NULL,
    "studentEmail" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transferLogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transferLogs" ADD CONSTRAINT "transferLogs_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "classrooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
