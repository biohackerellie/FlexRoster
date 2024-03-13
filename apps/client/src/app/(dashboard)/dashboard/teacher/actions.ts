"use server";

import { revalidateTag } from "next/cache";

import { auth } from "@local/auth";
import { fetch } from "@local/eden";

export async function Attendance(rosterId: string, status: string) {
  const session = await auth();
  const userId = session?.user?.id!;
  const { data, error } = await fetch("/api/rosters/attendance/", {
    method: "POST",
    body: {
      userId: userId,
      status: status,
      rosterId: rosterId,
    },
  });
  if (error) {
    console.error(error);
    throw new Error(error.message, { cause: error.cause });
  }
  if (!data) {
    throw new Error("No data found");
  }
  revalidateTag("roster");
  return data;
}
