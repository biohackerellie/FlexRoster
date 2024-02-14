"use server";

import { revalidatePath } from "next/cache";

import { client } from "@local/eden";

export async function setRoster(
  email: string,
  roomNumber: string,
  teacherName: string,
) {
  if (!email) {
    return;
  }
  const res = await client.api.rosters.student[`${email}`].post({
    roomNumber,
    teacherName,
  });
  revalidatePath("/student", "layout");
  if (res.error) {
    throw new Error("You have already made a request today.", res.error);
  }
  return 200;
}
