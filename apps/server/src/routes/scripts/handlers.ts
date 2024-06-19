import { db, eq, schema } from "@local/db";
import { logger } from "@local/utils";

import type { ClassResponse } from "~/lib/types";
import { env } from "~/env";
import { fetcher, icAuth, icClassQueryFunction } from "~/lib/utils";

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

export async function pong() {
  try {
    const token = await icAuth();
    const res = await fetcher<ClassResponse>(
      icClassQueryFunction(env.LHS_SOURCE_ID, env.ONEROSTER_APPNAME),
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-XSRF-TOKEN": env.XSRF_TOKEN,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res;
  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
}
