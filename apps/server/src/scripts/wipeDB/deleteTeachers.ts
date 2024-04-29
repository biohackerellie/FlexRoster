import { db, eq, schema } from "@local/db";

async function deleteTeacherUsers() {
  try {
    await db.delete(schema.users).where(eq(schema.users.role, "teacher"));
    console.log("Deleted all teachers");
    process.exit(0);
  } catch (error) {
    throw new Error();
  }
}

deleteTeacherUsers().catch((e) => {
  console.error(e);
  process.exit(1);
});
