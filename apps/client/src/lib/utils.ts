import { join } from "path";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function chatHrefConstructor(studentId: string, teacherName: string) {
  return `${studentId}--${teacherName}`;
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
