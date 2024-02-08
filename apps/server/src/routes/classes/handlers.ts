import { NotFoundError } from 'elysia';
import prisma from '~/lib/prisma';

export async function getClasses() {
  console.log('hi');
  try {
    return await prisma.classrooms.findMany();
  } catch (e) {
    console.log(e);
    throw new NotFoundError('No classes found', e);
  }
}

export async function getClassById(id: string) {
  try {
    return await prisma.classrooms.findUnique({
      where: {
        id: id,
      },
    });
  } catch (e) {
    throw new NotFoundError('No class found with that ID');
  }
}
