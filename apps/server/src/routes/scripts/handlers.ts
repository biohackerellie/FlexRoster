import { db, eq, schema } from "@local/db";

type SyncTeachers = {
  email: string;
  name: string;
  id: string;
}[];

export async function syncTeachers(body: SyncTeachers) {
  console.log("body", body);

  try {
    const teachers = body.map((teacher) => {
      return {
        id: teacher.id,
        email: teacher.email,
        name: teacher.name,
      };
    });

    let count = 0;
    await db.transaction(async (tx) => {
      for (const teacher of teachers) {
        await tx
          .insert(schema.users)
          .values({
            id: teacher.id,
            email: teacher.email,
            name: teacher.name,
            role: "student",
          })
          .onConflictDoNothing({ target: schema.users.id });
        count++;
      }
    });
    console.log(`Completed ${count} teachers added`);
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
}
