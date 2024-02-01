import prisma from '@/lib/prisma';
import { $ } from 'bun';

console.info('Clearing database ...');
const classroomsToDelete = await prisma.classrooms.findMany({});
console.info(`Deleting ${classroomsToDelete.length} classrooms ...`);
let count = 0;
for (const i of classroomsToDelete) {
  await prisma.classrooms.delete({
    where: { id: i.id },
  });
  count++;
  console.info(`Deleted ${count} classrooms`);
}
console.info('Database cleared');
