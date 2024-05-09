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

export function createAzureQueryString(groupId: string) {
  return `https://graph.microsoft.com/v1.0/groups/${groupId}/members?$count=true&$select=id%2cdisplayName%2cuserPrincipalName&$filter=accountEnabled eq true`;
}

export function icQuery(appName: string) {
  return `https://mtdecloud2.infinitecampus.org/campus/api/oneroster/v1p2/${appName}/ims/oneroster/rostering/v1p2`;
}

export function icStudentQuery(classId: string, appName: string) {
  return `${icQuery(appName)}/classes/${classId}/students?limit=100&ext_basic=true`;
}

export function icClassQueryFunction(
  IC_SchoolSourceId: string,
  appName: string,
) {
  return `${icQuery(appName)}/classes?filter=school.sourceId%3D%27${IC_SchoolSourceId}%27&limit=1200`;
}
