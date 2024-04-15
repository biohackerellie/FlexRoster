"use server";

import { revalidatePath, revalidateTag } from "next/cache";

import { client } from "@/lib/eden";

export async function RequestApproval(
  requestId: string | number,
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

export async function Attendance(rosterId: number) {
  const { data: res, error } = await client.api.rosters.attendance[""].post({
    rosterId: rosterId,
  });

  if (error) {
    console.error(error);
    throw new Error("something went wrong 👌", { cause: error.value });
  }
  if (!res) {
    throw new Error("No data found");
  }

  revalidateTag("roster");
  revalidatePath("/(dashboard)/dashboard", "layout");
}
