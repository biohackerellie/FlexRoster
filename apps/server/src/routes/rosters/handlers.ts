import { NotFoundError } from "elysia";

import { db, eq, schema, sql } from "@local/db";
import { Request, requestValidator } from "@local/validators";

import {
  createClient,
  getClassRoomKV,
  getRequestKV,
  setClassRoomKV,
  setRequestKV,
} from "~/lib/redis";

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

const rosterQuery = db.query.classRosters
  .findFirst({
    where: eq(schema.classRosters.studentEmail, sql.placeholder("email")),
    with: {
      classroom: true,
    },
  })
  .prepare("roster");

export async function getStudentRoster(email: string) {
  try {
    const roster = await rosterQuery.execute({ email });

    return roster;
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

export async function newRequest(requestId: string, request: Request) {
  const requestData = requestValidator.parse(request);
  const client = createClient();
  const parsedData = JSON.stringify(requestData);
  const res = await client.hgetall(requestId);

  if (Object.keys(res).length > 0) {
    throw new Error("You have already made a request today");
  } else {
    await client.hset(requestId, requestData);
    await client.zadd(
      `request:${requestData.newTeacher}`,
      requestData.timestamp,
      parsedData,
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
