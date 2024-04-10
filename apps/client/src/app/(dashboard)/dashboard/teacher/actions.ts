"use server";

import { revalidatePath, revalidateTag } from "next/cache";

import type { Logs } from "@local/validators";

import { client } from "@/lib/eden";

export async function Attendance(rosterId: number) {
  const { data, error } = await client.api.rosters.attendance[""].post({
    rosterId: rosterId,
  });

  if (error) {
    console.error(error);
    throw new Error("something went wrong 👌", { cause: error.value });
  }
  if (!data) {
    throw new Error("No data found");
  }
  revalidateTag("roster");
  return data;
}

export async function RequestApproval(
  requestId: string,
  status: "approved" | "denied",
  studentId: number,
  teacherId: string,
  newTeacherId: string,
) {
  const log: Logs = {
    user: newTeacherId,
    type: "request",
    action: `User ${newTeacherId} ${status} request ${requestId} for student ${studentId} from teacher ${teacherId} to teacher ${newTeacherId}`,
  };
  await client.api.logs.new.post({ log });

  if (status === "approved") {
    const { data: res, error } = await client.api.requests
      .approve({ requestId: requestId })
      .post({
        studentId: studentId,
        teacherId: teacherId,
        newTeacherId: newTeacherId,
      });

    if (error) {
      console.error(error);
      throw new Error("something went wrong 👌", { cause: error.value });
    }
    if (!res) {
      throw new Error("No data found");
    }
  }
  if (status === "denied") {
    const { data: res, error } = await client.api.requests
      .deny({ requestId: requestId })
      .post({
        studentId: studentId,
      });

    if (error) {
      console.error(error);
      throw new Error("something went wrong 👌", { cause: error.value });
    }
    if (!res) {
      throw new Error("No data found");
    }
  }
  revalidateTag("roster");
  revalidateTag("requests");
  revalidatePath("/(dashboard)/dashboard", "layout");
}
