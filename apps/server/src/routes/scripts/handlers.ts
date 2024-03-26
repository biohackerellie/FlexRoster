import { db, eq, schema } from "@local/db";

type SyncTeachers = {
  email: string;
  name: string;
  id: string;
}[];

export async function syncTeachers(body: SyncTeachers) {
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
    return new Response("OK", { status: 200 });
  } catch (error) {
    throw new Error();
  }
}
