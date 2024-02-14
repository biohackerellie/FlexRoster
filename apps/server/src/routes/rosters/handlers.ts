import { NotFoundError } from "elysia";

import { db, eq, schema } from "@local/db";

import {
  getClassRoomKV,
  getRequestKV,
  setClassRoomKV,
  setRequestKV,
} from "~/lib/utils";

const today = new Date();

export async function getRosters() {
  try {
    return await db.query.classRosters.findMany({});
  } catch (e) {
    throw new NotFoundError("No rosters found");
  }
}

export async function getRostersById(id: string) {
  try {
    return await db.query.classRosters.findMany({
      where: eq(schema.classRosters.classroomId, id),
      with: {
        classroom: true,
      },
    });
  } catch (e) {
    throw new NotFoundError("No roster found with that ID");
  }
}

export async function getStudentRoster(email: string) {
  try {
    const classroom = await getClassRoomKV(email);
    console.log("classroom", classroom);
    if (classroom) {
      return classroom;
    } else {
      const roster = await db.query.classRosters.findFirst({
        where: eq(schema.classRosters.studentEmail, email),
        with: {
          classroom: true,
        },
      });
      if (roster) {
        await setClassRoomKV(
          email,
          `Room ${roster.classroom.roomNumber} with ${roster.classroom.teacherName}`,
          86400,
        );
        return `Room ${roster.classroom.roomNumber} with ${roster.classroom.teacherName}`;
      } else {
        throw new NotFoundError("No roster found with that email");
      }
    }
  } catch (e) {
    throw new NotFoundError("No roster found with that email");
  }
}

export async function setStudentRoster(
  email: string,
  roomNumber: string,
  teacherName: string,
) {
  try {
    console.log("step one");
    const previousRequest = await getRequestKV(email);
    console.log("previousRequest", previousRequest);
    if (previousRequest) {
      console.log("You have already requested a transfer today");
      return new Response("You have already requested a transfer today", {
        status: 301,
      });
    }
    await setClassRoomKV(
      email,
      `Room ${roomNumber} with ${teacherName}`,
      86400,
    );
    await setRequestKV(email);
    await db.insert(schema.transferLogs).values({
      studentEmail: email,
      roomNumber: roomNumber,
      teacherName: teacherName,
    });
    return new Response("OK", { status: 200 });
  } catch (e) {
    throw new NotFoundError("No roster found with that email");
  }
}

export async function getTeacherRoster(email: string) {
  const [firstName, lastName] = (email.split("@")[0] ?? "")
    .split("_")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1));

  const formattedName = `${lastName}, ${firstName}`;
  console.log("formattedName", formattedName);
  try {
    return await db.query.classRosters.findMany({
      where: eq(schema.classrooms.teacherName, formattedName),
      with: {
        classroom: true,
      },
    });
  } catch (e) {
    throw new NotFoundError("No roster found with that email");
  }
}
