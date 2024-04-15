"use server";

import { auth } from "@local/auth";

import { client } from "@/lib/eden";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export async function RequestRoom(teacherId: string, dateRequested: string) {
  const session = await auth();
  const studentId = session?.user?.id!;

  const res = await client.api.requests.new.post({
    userId: studentId,
    teacherId: teacherId,
    dateRequested: dateRequested,
  });

  if (res?.error) {
    return res?.error.status;
  } else {
    await pusherServer.trigger(
      toPusherKey(`request:${teacherId}`),
      "new-request",
      { studentId, teacherId, dateRequested },
    );

    return res.status;
  }
}
