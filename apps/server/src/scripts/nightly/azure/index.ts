/**
 * This script is used to fetch all students and teachers from Azure AD and store them in the database.
 */

import { db, eq, schema } from "@local/db";

import { env } from "~/env";
import azureAuth from "~/lib/azure";
import { AzureResponse, AzureUser } from "~/lib/types";
import { fetcher } from "~/lib/utils";

/**
 * Helper function to fetch all users from Azure AD.
 */
async function fetchAllUsers(
  link: string | undefined,
  token: string,
): Promise<AzureUser[]> {
  let users: AzureUser[] = [];
  while (link) {
    const res: AzureResponse<AzureUser> = await fetcher<
      AzureResponse<AzureUser>
    >(link, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        ConsistencyLevel: "eventual",
      },
    });
    if (res.value && res.value.length > 0) {
      users = users.concat(res.value);
    }
    link = res["@odata.nextLink"];
  }
  return users;
}

/**
 * Main function to fetch all students and teachers from Azure AD and store them in the database.
 */

async function azureStudents(): Promise<AzureUser[]> {
  try {
    const token = await azureAuth();
    let studentLink: string | undefined = env.AZURE_STUDENT_QUERY;
    let staffLink: string | undefined = env.AZURE_TEACHER_QUERY;

    // Use promise.all with the helper function to fetch all users from Azure AD at the same time
    const studentPromise = fetchAllUsers(studentLink, token);
    const staffPromise = fetchAllUsers(staffLink, token);
    const [studentData, staffData] = await Promise.all([
      studentPromise,
      staffPromise,
    ]);

    // Fetch all classrooms from the database
    const dbClassRooms = await db.query.classrooms.findMany();

    // reduce the classrooms to an array of teacher names
    const classrooms = dbClassRooms.map((room) => room.teacherName);

    let teacherCount = 0;
    let studentCount = 0;
    // Use a transaction to insert all the users into the database at the same time
    await db.transaction(async (tx) => {
      for (const teacher of staffData) {
        // if classrooms does not include teacher.displayName, skip entry to filter out people who may have been in the teacher group but are not actually teachers
        if (!classrooms.includes(teacher.displayName)) {
          continue;
        }
        await tx
          .insert(schema.users)
          .values({
            id: teacher.id,
            name: teacher.displayName,
            email: teacher.userPrincipalName,
            role: "teacher",
          })
          .onConflictDoNothing();
        teacherCount++;
      }
      for (const student of studentData) {
        await tx
          .insert(schema.users)
          .values({
            id: student.id,
            name: student.displayName,
            email: student.userPrincipalName,
            role: "student",
          })
          .onConflictDoNothing();
        studentCount++;
      }
    });
    console.log(`Added ${teacherCount} teachers and ${studentCount} students`);
    process.exit(0);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

azureStudents();
