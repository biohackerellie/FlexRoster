import { db, schema, eq } from '@local/db';

console.info('Clearing database ...');
const classroomsToDelete = await db.query.classrooms.findMany({});
console.info(`Deleting ${classroomsToDelete.length} classrooms ...`);
let count = 0;
await db.transaction(async (tx) => {
  for (const i of classroomsToDelete) {
    await tx.delete(schema.classrooms).where(eq(schema.classrooms.id, i.id));
    count++;
    console.info(`Deleted ${count} classrooms`);
  }
});
console.info('Database cleared');
