import type { StudentClasses } from "@local/validators";
import { formatTeacherNames } from "@local/validators";

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
