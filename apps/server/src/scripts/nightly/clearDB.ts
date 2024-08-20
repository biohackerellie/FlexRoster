import { db, schema } from "@local/db";

export async function clearDB() {
  try {
    console.info("Clearing database ...");
    console.info("Deleting Classrooms ...");
    await db.delete(schema.classrooms);
    console.info("Deleting Students ...");
    await db.delete(schema.students);
    console.info("deleteting requests...");
    await db.delete(schema.requests);
    await db.delete(schema.availability);

    process.exit(0);
  } catch (e) {
    console.error(e);
  }
}
clearDB().catch((e) => {
  console.error(e);
  process.exit(1);
});
