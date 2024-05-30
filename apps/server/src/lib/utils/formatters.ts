import type { ConfigSchema, StudentClasses } from "@local/utils";
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

interface PreferredNames {
  givenName: string;
  preferredName: string;
}

export function CreateTemplateConfig({ ...args }: ConfigSchema) {
  const secretaries = args?.secretaries?.join('","') ?? "";
  const excludedTeachers = args?.excludedTeachers?.join('","') ?? "";
  const preferredNames =
    args.preferredNames?.map((names) => {
      return `{givenName: "${names.givenName}", preferredName: "${names.preferredName}"}`;
    }) ?? [];
  return `
	//This File is automatically generated, do not edit  \n
	\n

	export const secretaries = ["${secretaries}"]; \n

	export const preferredNames = [${preferredNames}]; \n
	export const excludedTeachers = ["${excludedTeachers}"]; \n
	export const semesterClassName = "${args.semesterClassName || ""}"; \n
	export const isRedisCluster: boolean = ${args.isRedisCluster || true}; \n
	`;
}

export function CurrentConfigString({ ...args }: ConfigSchema) {
  const secretaries = args?.secretaries?.join('","') ?? "";
  const excludedTeachers = args?.excludedTeachers?.join('","') ?? "";
  const preferredNames =
    args.preferredNames?.map((names) => {
      return `{givenName: "${names.givenName}", preferredName: "${names.preferredName}"}`;
    }) ?? [];

  return `
	\n
	This includes changes you've currently made in this menu. \n
	Secretaries : "${secretaries}" \n
	Preferred Names : ${preferredNames} \n
	Excluded Teachers : "${excludedTeachers}" \n
	Semester Class Name : ${args.semesterClassName || ""} \n
	`;
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
  const newDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return newDate;
}
