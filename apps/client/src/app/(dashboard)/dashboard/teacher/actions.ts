"use server";

import { revalidateTag } from "next/cache";

import { auth } from "@local/auth";
import { client } from "@local/eden";

export async function Attendance(rosterId: string, status: string) {
  const session = await auth();
  const userId = session?.user?.id!;
  const { data, error } = await client.api.rosters.attendance[""].post({
    userId: userId,
    status: status,
    rosterId: rosterId,
  });

  if (error) {
    console.error(error);
    throw new Error("something went wrong 👌", { cause: error.toString() });
  }
  if (!data) {
    throw new Error("No data found");
  }
  revalidateTag("roster");
  return data;
}
