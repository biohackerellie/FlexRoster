"use server";

import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import { Request, requestValidator } from "@local/validators";

import { pusherServer } from "@/lib/pusher";
import { requestIDConstructor, toPusherKey } from "@/lib/utils";

export async function RequestRoom(teacherId: string) {
  const session = await auth();
  const studentId = session?.user?.id!;
  const { data, error } = await client.api.users
    .student({ id: studentId })
    .get();

  if (error) throw new Error("Error fetching student data");

  const currentTeacher = data?.classrooms?.teacherId!;
  const timestamp = Date.now();
  const requestData: Request = {
    status: "pending",
    id: nanoid(),
    timestamp,
    studentId,
    currentTeacher,
    newTeacher: teacherId,
  };

  const request = requestValidator.parse(requestData);
  const requestId = `request:${currentTeacher}:${studentId}`;
  const toTeacher = `request:${teacherId}:${studentId}`;
  const res = await client.api.rosters.request
    .id({ requestId: requestId })
    .post({
      request,
    });

  if (res?.error) {
    return res?.error.status;
  } else {
    await client.api.rosters.request.id({ requestId: toTeacher }).post({
      request,
    });
    await pusherServer.trigger(
      toPusherKey(`request:${teacherId}`),
      "new-request",
      request,
    );
    await pusherServer.trigger(
      toPusherKey(`request:${currentTeacher}`),
      "new-outgoing",
      request,
    );
    return 200;
  }
}
