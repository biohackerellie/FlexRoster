"use server";

import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import {
  Request,
  requestValidator,
} from "@local/validators";

import { pusherServer } from "@/lib/pusher";
import { requestIDConstructor, toPusherKey } from "@/lib/utils";

export async function RequestRoom(teacherId: string) {
  const session = await auth();
  const studentId = session?.user?.id!;
  const { data: data, error } =
    await client.api.users.student[`${studentId}`]?.get()!;

  if (error) return;

  const currentTeacher = data?.classrooms?.teacherName!;
  const timestamp = Date.now();
  const requestData: Request = {
    id: nanoid(),
    status: "pending",
    timestamp,
    studentId,
    currentTeacher,
    newTeacher: teacherId,
  };

  const request = requestValidator.parse(requestData);
  const requestId = `request:${currentTeacher}:${studentId}`;
  const toTeacher = `request:${teacherId}:${studentId}`;
  const res = await client.api.rosters.request[`${requestId}`]?.post({
    request,
  });
  if (res?.error) {
    throw new Error("You have already made a request today.", res.error);
  } else {
    await client.api.rosters.request[`${toTeacher}`]?.post({
      request,
    });
    await pusherServer.trigger(
      toPusherKey(`request:${teacherId}`),
      "new-request",
      request,
    );
    await pusherServer.trigger(
      toPusherKey(`request:${currentTeacher}`),
      "new-request",
      request,
    );
    return 200;
  }
}
