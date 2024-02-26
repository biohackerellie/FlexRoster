import { join } from "path";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { schema } from "@local/db";
import { client } from "@local/eden";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function chatHrefConstructor(id1: string, id2: string) {
  const sortedIds = [id1, id2].sort();
  return `${sortedIds[0]}--${sortedIds[1]}`;
}

export function formatTeacherNames(teacherName: string) {
  const formattedTeacherName = teacherName?.split(", ").reverse().join(" ");
  console.log("formattedTeacherName", formattedTeacherName);
  //remove the middle initial from 'firstname middleinitial lastname'
  const teacher = formattedTeacherName
    ?.split(" ")
    .filter((name) => name.length > 1)
    .join("-");

  return teacher;
}

export async function chatUsersByRole(
  userID?: string,
  role: "student" | "teacher" | "admin" | "secretary" = "student",
) {
  if (role === "student") {
    const { data, error } = await client.api.users.teachers.get();
    if (error) {
      throw new Error("Error fetching teachers");
    }

    return data;
  } else if (role === "teacher") {
    return;
  }
  return;
}
