import { db, eq, schema } from "@local/db";

export async function setRoomStatus() {
  console.log("Setting room status to available");
  try {
    await db.transaction(async (tx) => {
      await tx
        .update(schema.classrooms)
        .set({
          available: true,
        })
        .where(eq(schema.classrooms.available, false));
    });
    process.exit(0);
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
}

setRoomStatus();
