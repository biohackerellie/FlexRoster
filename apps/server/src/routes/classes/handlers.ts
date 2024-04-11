import { NotFoundError } from "elysia";

import { db, eq, schema } from "@local/db";

import type { RosterResponse } from "~/lib/types";
import { env } from "~/env";
import {
  classroomsQuery,
  getClassroomIdByTeacher,
  roomByIdQuery,
  rosterByIDQuery,
} from "~/lib/sql";
import { fetcher, icAuth } from "~/lib/utils";

type insertClassRoster = typeof schema.classRosters.$inferInsert;

export async function getClasses() {
  try {
    const res = await classroomsQuery.execute();
    return res;
  } catch (e) {
    console.error(e);
    throw new NotFoundError("No classes found");
  }
}

export async function getClassById(id: string) {
  try {
    const result = await roomByIdQuery.execute({ id });
    return result[0];
  } catch (e) {
    throw new NotFoundError("No class found with that ID");
  }
}

/**
 * Reset a single class roster by classroomID
 * @param id - classroomID
 * @returns void
 */

export async function resetOneClass(userId: string) {
  try {
    const classroomId = await getClassroomIdByTeacher.execute({
      teacherId: userId,
    });
    if (!classroomId || classroomId.length === 0) {
      console.info("No classroom found for this teacher");
      return;
    }
    const id = classroomId[0]?.classroomId!;
    const studentsToDelete = await rosterByIDQuery.execute({ id: id });
    if (studentsToDelete.length === 0) {
      console.info("No students to delete");
      return;
    }
    const token = await icAuth();
    const defaultRoster: insertClassRoster[] = [];

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
      defaultRoster.push(s);
    }
    await db.transaction(async (tx) => {
      await tx
        .delete(schema.classRosters)
        .where(eq(schema.classRosters.classroomId, id));
      await tx.insert(schema.classRosters).values(defaultRoster);
    });
  } catch (e) {
    console.error(e instanceof Error ? e.message : e);
    throw e;
  }
}
