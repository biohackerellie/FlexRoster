"use server";

import { revalidatePath, revalidateTag } from "next/cache";

import type { Logs } from "@local/validators";

import { client } from "@/lib/eden";

export async function RequestApproval(
  requestId: string,
  status: "approved" | "denied",
  studentId: number,
  teacherId: string,
  newTeacherId: string,
) {
  const { data: res, error } = await client.api.requests
    .update({ requestId: requestId })
    .post({
      studentId: studentId,
      teacherId: teacherId,
      newTeacherId: newTeacherId,
      status: status,
    });

  if (error) {
    console.error(error);
    throw new Error("something went wrong 👌", { cause: error.value });
  }
  if (!res) {
    throw new Error("No data found");
  }

  revalidateTag("roster");
  revalidateTag("requests");
  revalidatePath("/(dashboard)/dashboard", "layout");
}
