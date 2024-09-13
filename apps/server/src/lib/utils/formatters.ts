import type { StudentClasses } from "@local/utils";
import { formatTeacherNames } from "@local/utils";

import { chatHrefConstructor } from "./chatHrefConstructor";

export function formatClasses(classes: StudentClasses[], studentId: string) {
  return classes.map((room) => {
    const teacherName = formatTeacherNames(room.teacherName);
    return {
      ...room,
      teacherName: teacherName,
      chatId: `/dashboard/chat/${chatHrefConstructor(studentId, room.teacherId)}`,
    };
  });
}

export function removeItemsFromArray<T>({
  items,
  itemsToRemove,
}: {
  items: T[];
  itemsToRemove: T[];
}) {
  return items.filter((item) => !itemsToRemove.includes(item));
}

export function addStringsToArray({
  items,
  itemsToAdd,
}: {
  items: string[];
  itemsToAdd: string[];
}) {
  itemsToAdd.forEach((item) => {
    if (!items.includes(item.trim()) && item.trim() !== "") {
      items.push(item.trim());
    }
  });
}
export function convertUTCDateToLocalDate(date: Date): Date {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString([], {
      timeZone: "UTC",
    }),
  );
}
