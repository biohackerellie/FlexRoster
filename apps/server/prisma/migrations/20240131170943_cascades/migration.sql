-- DropForeignKey
ALTER TABLE "classRosters" DROP CONSTRAINT "classRosters_classroomId_fkey";

-- AddForeignKey
ALTER TABLE "classRosters" ADD CONSTRAINT "classRosters_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "classrooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
