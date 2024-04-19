"use server";

import type { requestFormType } from "@local/validators";
import { auth } from "@local/auth";

import { client } from "@/lib/eden";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export async function RequestRoom(data: requestFormType) {
  const session = await auth();
  const studentId = session?.user?.id!;
  console.log(data);
  const res = await client.api.requests.new.post({
    userId: studentId,
    teacherId: data.teacherId,
    dateRequested: data.dateRequested,
  });

  if (res?.error) {
    return res?.error.status;
  } else {
    await pusherServer.trigger(
      toPusherKey(`request:${data.teacherId}`),
      "new-request",
      { studentId, data },
    );

    return res.status;
  }
}
