import { NotFoundError } from 'elysia';
import prisma from '@/lib/prisma';
import { getClassRoomKV, setClassRoomKV } from '@/lib/utils';

const today = new Date();

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

export async function setStudentRoster(
  email: string,
  roomNumber: string,
  teacherName: string
) {
  try {
    const previousRequest = await prisma.transferLogs.findFirst({
      where: {
        studentEmail: email,
        createdAt: {
          gte: today,
        },
      },
    });
    if (previousRequest) {
      throw new NotFoundError('You have already requested a transfer today');
    }
    await setClassRoomKV(
      email,
      `Room ${roomNumber} with ${teacherName}`,
      86400
    );
    const newRequest = await prisma.transferLogs.create({
      data: {
        studentEmail: email,
        roomNumber: roomNumber,
        teacherName: teacherName,
      },
    });
    return new Response('OK', { status: 200 });
  } catch (e) {
    throw new NotFoundError('No roster found with that email');
  }
}
