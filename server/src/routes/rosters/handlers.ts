import { NotFoundError } from 'elysia';
import prisma from '@/lib/prisma';
import { getClassRoomKV, setClassRoomKV } from '@/lib/utils';

export async function getRosters() {
  try {
    return await prisma.classRosters.findMany();
  } catch (e) {
    throw new NotFoundError('No rosters found');
  }
}

export async function getRostersById(id: string) {
  try {
    return await prisma.classRosters.findMany({
      where: {
        classroomId: id,
      },
      include: {
        classroom: true,
      },
    });
  } catch (e) {
    throw new NotFoundError('No roster found with that ID');
  }
}

export async function getStudentRoster(email: string) {
  try {
    const classroom = await getClassRoomKV(email);
    if (classroom) {
      return classroom;
    } else {
      const roster = await prisma.classRosters.findFirst({
        where: {
          studentEmail: email,
        },
        include: {
          classroom: true,
        },
      });
      if (roster) {
        await setClassRoomKV(
          email,
          `Room ${roster.classroom.roomNumber} with ${roster.classroom.teacherName}`,
          86400
        );
        return `Room ${roster.classroom.roomNumber} with ${roster.classroom.teacherName}`;
      } else {
        throw new NotFoundError('No roster found with that email');
      }
    }
  } catch (e) {
    throw new NotFoundError('No roster found with that email');
  }
}
