import { db, eq, schema } from "@local/db";

export async function clearDB() {
  console.info("Clearing database ...");
  const classroomsToDelete = await db.query.classrooms.findMany({});
  if (classroomsToDelete.length === 0) {
    console.info("No classrooms to delete");
    process.exit(0);
  }

  console.info(`Deleting ${classroomsToDelete.length} classrooms ...`);
  let count = 0;

  try {
    await db.transaction(async (tx) => {
      for (const i of classroomsToDelete) {
        await tx
          .delete(schema.classrooms)
          .where(eq(schema.classrooms.id, i.id));

        count++;
        console.info(`Deleted ${count} classrooms`);
      }
      await tx.delete(schema.students);
      console.info("Deleted class rosters");
    });
    console.info("Database cleared");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
clearDB().catch((e) => {
  console.error(e);
  process.exit(1);
});
