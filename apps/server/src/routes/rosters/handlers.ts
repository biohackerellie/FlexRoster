import { NotFoundError } from "elysia";

import type { Request } from "@local/validators";
import { db, eq, schema, sql } from "@local/db";
import { requestValidator } from "@local/validators";

import {
  createClient,
  getClassRoomKV,
  getRequestKV,
  setClassRoomKV,
  setRequestKV,
} from "~/lib/redis";
import { teacherQuery } from "../users/handlers";

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

const rosterQuery = db.query.users
  .findFirst({
    where: eq(schema.users.id, sql.placeholder("id")),
    with: {
      classRosters: {
        with: {
          classroom: true,
        },
      },
    },
  })
  .prepare("roster");

export async function getStudentRoster(userId: string) {
  try {
    let teacherName = "";
    let roomNumber = "";
    let message = "";
    const client = createClient();

    const request = await client.hgetall(`request:${userId}`);

    if (Object.keys(request).length > 0) {
      const teacherID = request.newTeacher!;
      const teacher = await teacherQuery.execute({ id: teacherID });
      teacherName = teacher?.name!;
      roomNumber = teacher?.classrooms?.roomNumber!;
      message = `You transfered to FLEX room ${roomNumber} with ${teacherName}`;
    } else {
      const roster = await rosterQuery.execute({ id: userId });
      teacherName = roster?.classRosters.classroom.teacherName!;
      roomNumber = roster?.classRosters.classroom?.roomNumber!;
      message = `Your FLEX class today is with ${teacherName} in room ${roomNumber}`;
    }
    return message;
  } catch (e) {
    console.log(e);
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

export async function newRequest(requestId: string, request: Request) {
  const requestData = requestValidator.parse(request);
  const client = createClient();
  const parsedData = JSON.stringify(requestData);
  const res = await client.hgetall(requestId);

  if (Object.keys(res).length > 0) {
    throw new Error("You have already made a request today");
  } else {
    await client.hset(requestId, requestData);

    await client.xadd(
      "transfers",
      "*",
      "student",
      requestData.studentId,
      "teacher",
      requestData.newTeacher,
      "status",
      "pending",
    );
    return Response.json({ message: "Request sent" }, { status: 200 });
  }
}

export async function approveRequest(requestId: string, approved: boolean) {
  const client = createClient();
  if (!approved) {
    const request = await client.hset(
      `request:${requestId}`,
      "status",
      "denied",
    );
  } else {
    const request = await client.hset(
      `request:${requestId}`,
      "status",
      "approved",
    );
  }
}
