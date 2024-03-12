"use server";

import { revalidateTag } from "next/cache";

import { fetch } from "@local/eden";

export async function Attendance(student: string, status: string) {
  const { data, error } = await fetch("/api/rosters/attendance/", {
    method: "POST",
    body: {
      student: student,
      status: status,
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
