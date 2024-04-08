"use server";

import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

import type { Logs, Request } from "@local/validators";
import { auth } from "@local/auth";
import { client } from "@local/eden";
import { requestValidator } from "@local/validators";

import { pusherServer } from "@/lib/pusher";
import { requestIDConstructor, toPusherKey } from "@/lib/utils";

export async function RequestRoom(teacherId: string) {
  const session = await auth();
  const studentId = session?.user?.id!;
  const { data: student, error } = await client.api.users
    .student({ id: studentId })
    .get();

  if (error) throw new Error("Error fetching student data");

  const { data: newTeacher, error: booboo } = await client.api
    .users({ id: teacherId })
    .get();

  const currentTeacher = student?.classrooms?.teacherId!;
  const currentTeacherName = student?.classrooms?.teacherName!;
  const timestamp = Date.now();
  const requestData: Request = {
    status: "pending",
    studentName: student?.user?.name!,
    id: nanoid(),
    studentId: student?.classRosters?.id!,
    currentTeacher,
    currentTeacherName,
    newTeacher: teacherId,
    newTeacherName: newTeacher?.name!,
    timestamp,
  };

  const request = requestValidator.parse(requestData);
  const requestId = `request:${currentTeacher}:${studentId}`;
  const toTeacher = `request:${teacherId}:${studentId}`;
  const res = await client.api.requests.id({ requestId: requestId }).post({
    request,
  });

  if (res?.error) {
    return res?.error.status;
  } else {
    const log: Logs = {
      type: "request",
      action: `${student?.user?.name} requested to transfer to ${newTeacher?.name} from ${currentTeacherName} at ${timestamp}`,
      user: studentId,
    };
    await client.api.requests.id({ requestId: toTeacher }).post({
      request,
    });
    await client.api.logs.new.post({
      log,
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
