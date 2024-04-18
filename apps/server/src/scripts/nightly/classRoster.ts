/**
 * Retrieve rosters for each class and insert into database
 */

import { db, eq, gt, or, schema, SelectClassRoster } from "@local/db";

import type { RosterResponse } from "~/lib/types";
import { env } from "~/env";
import { rosterQuery, studentRequestsQuery } from "~/lib/sql";
import { fetcher, icAuth } from "~/lib/utils";

interface Roster {
  studentEmail: string;
  studentName: string;
  classroomId: string;
}

export async function RosterSync() {
  try {
    /**
     * variables
     */
    const token = await icAuth(); // Helper function to get InfinteCampus auth token
    const classes = await db.query.classrooms.findMany({}); // Gets all classes from the database, synced from syncRoster.ts script
    const allStudents = await rosterQuery.execute({}); // Gets all existing students in local DB
    const existingStudentEmails = new Set(
      allStudents.map((s) => s.studentEmail),
    );
    const rosterData: Roster[] = []; // Initialize array to store IC roster data
    const studentsWithRequestToday: SelectClassRoster[] = []; // Initialize array to store students with requests for today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const requests = await studentRequestsQuery.execute({}); // Gets all requests with the related student data from the database

    let studentsUpdated = 0;
    let studentsAdded = 0;
    let studentsDeleted = 0;
    /**
     * Fetches all student data from IC OneRoster api for each class and maps it to the Roster interface
     */

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
      data.users.forEach((user) => {
        rosterData.push({
          studentEmail: user.email,
          studentName: `${user.givenName} ${user.familyName}`,
          classroomId: c.id,
        });
      });
    }

    /**
     * Compares todays date with date on each request, if they match, the student is added to the studentsWithRequestToday array
     */
    if (requests && requests.length > 0) {
      for (const r of requests) {
        if (
          new Date(r.requests.dateRequested).setHours(0, 0, 0, 0) ===
            today.getTime() &&
          r.requests.status === "approved"
        ) {
          studentsWithRequestToday.push({
            ...r.students,
            classroomId: r.classrooms?.id!,
            transferred: true,
            arrived: false,
          });
        }
      }
    }
    /**
     * Postgres transaction to update, insert, or delete students in the local database
     * we use transactions to ensure that all operations are completed successfully
     * @see https://orm.drizzle.team/docs/transactions
     */
    await db.transaction(async (tx) => {
      // Update students with requests for today with their requested classroom
      for (const s of studentsWithRequestToday) {
        await tx
          .update(schema.students)
          .set({
            ...s,
          })
          .where(eq(schema.students.studentEmail, s.studentEmail));
        studentsUpdated++;
      }
    });

    // variable for students that exist in the db but not in the roster
    const studentsToDelete = allStudents.filter(
      (s) =>
        !rosterData.some((r) => r.studentEmail === s.studentEmail) &&
        !ignoredStudentUsers.includes(s.studentEmail),
    );

    // ignore rosterData for students with requests today, and set other students back to default

    const studentsToUpdate = rosterData.filter(
      (s) =>
        existingStudentEmails.has(s.studentEmail) &&
        !studentsWithRequestToday.some(
          (r) => r.studentEmail === s.studentEmail,
        ),
    );
    // new students to insert
    const studentsToInsert = rosterData.filter(
      (s) =>
        !existingStudentEmails.has(s.studentEmail) &&
        !studentsWithRequestToday.some(
          (r) => r.studentEmail === s.studentEmail,
        ),
    );

    await db.transaction(async (tx) => {
      for (const s of studentsToUpdate) {
        await tx
          .update(schema.students)
          .set({
            classroomId: s.classroomId,
            arrived: false,
            transferred: false,
          })
          .where(eq(schema.students.studentEmail, s.studentEmail));
        studentsUpdated++;
      }
      if (studentsToInsert.length > 0) {
        await tx.insert(schema.students).values(studentsToInsert);
        studentsAdded = studentsToInsert.length;
      }
      if (studentsToDelete.length > 0) {
        for (const s of studentsToDelete) {
          await tx
            .delete(schema.students)
            .where(eq(schema.students.studentEmail, s.studentEmail));
          studentsDeleted++;
        }
      }
    });
    console.info(
      `${studentsUpdated} students updated, ${studentsAdded} students added, ${studentsDeleted} students deleted.`,
    );
    process.exit(0);
  } catch (error: any) {
    throw new Error(error);
  }
}

RosterSync();

const ignoredStudentUsers = ["elliana_kerns@laurel.k12.mt.us"];
