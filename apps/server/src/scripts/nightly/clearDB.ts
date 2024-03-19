import { db, eq, schema } from "@local/db";
export async function clearDB() {
console.info("Clearing database ...");
const classroomsToDelete = await db.query.classrooms.findMany({});
console.info(`Deleting ${classroomsToDelete.length} classrooms ...`);
let count = 0;
try {
  await db.transaction(async (tx) => {
    for (const i of classroomsToDelete) {
      await tx.delete(schema.classrooms).where(eq(schema.classrooms.id, i.id));
      count++;
      console.info(`Deleted ${count} classrooms`);
    }
  });
  console.info("Database cleared");
  process.exit(0);
} catch (e) {
  console.error(e);
  process.exit(1);
}
}
clearDB();