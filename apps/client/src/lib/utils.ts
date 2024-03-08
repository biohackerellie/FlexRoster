import { join } from "path";
import type { ClassValue } from "clsx";
import { NextRequest } from "next/server";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { auth } from "@local/auth";
import { schema } from "@local/db";
import { client } from "@local/eden";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function chatHrefConstructor(id1: string, id2: string) {
  const sortedIds = [id1, id2].sort();
  return `${sortedIds[0]}--${sortedIds[1]}`;
}

export function requestIDConstructor(studentId: string, toTeacherId: string) {
  const sortedIds = [studentId, toTeacherId].sort();
  return `request:${sortedIds[0]}--${sortedIds[1]}`;
}

export function formatTeacherNames(teacherName: string) {
  const formattedTeacherName = teacherName?.split(", ").reverse().join(" ");

  //remove the middle initial from 'firstname middleinitial lastname'
  const teacher = formattedTeacherName
    ?.split(" ")
    .filter((name) => name.length > 1)
    .join("-");

  return teacher;
}

export async function chatUsersByRole(
  role: "student" | "teacher" | "admin" | "secretary" = "student",
) {
  if (role === "student") {
    const data = await client.api.users.teachers?.get();

    if (!data || data?.error) {
      throw new Error("Error fetching teachers");
    }

    return data.data;
  } else if (role === "teacher") {
    const data = await client.api.users.teachers?.get();
    if (!data || data.error) {
      throw new Error("Error fetching teachers");
    }
    return data.data;
  }
}

export function toPusherKey(key: string) {
  return key.replace(/:/g, "__");
}
