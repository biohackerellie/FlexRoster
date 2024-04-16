/**
 * Retrieve rosters for each class and insert into database
 */

import { db, schema } from "@local/db";

import type { RosterResponse } from "~/lib/types";
import { env } from "~/env";
import { fetcher, icAuth } from "~/lib/utils";

export async function RosterSync() {
  try {
    const token = await icAuth();
    const classes = await db.query.classrooms.findMany({});
    const rosterData = [];

    let count = 0;
    for (const c of classes) {
      const id = c.id;
      const data = await fetcher<RosterResponse>(
        `${env.IC_BASE_QUERY}/classes/${id}/students?limit=100&ext_basic=true`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-XSRF-TOKEN": env.XSRF_TOKEN,
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const mappedStudents = data.users.map((s) => {
        const fullName = `${s.givenName} ${s.familyName}`;
        return {
          studentEmail: s.email,
          studentName: fullName,
          classroomId: id,
        };
      });
      for (const s of mappedStudents) {
        rosterData.push(s);
        count++;
      }
    }
    await db.insert(schema.students).values(rosterData);
    console.log(`Completed. ${count} students added to roster.`);
    process.exit(0);
  } catch (error: any) {
    throw new Error(error);
  }
}

RosterSync();
