// import "server-only";

import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

import type { TableSearchParams } from "@local/utils";
import { logger } from "@local/utils";

import { client } from "@/lib/eden";

export async function getTableData(search: TableSearchParams) {
  noStore();
  const { data, error } = await client.api.rosters.all.get();

  if (error) {
    logger.error(error);
    return [];
  }
  if (!search) {
    return data;
  }
  let result = data;

  if (search.studentName) {
    const searchLower = search.studentName.toLowerCase();
    result = result.filter((student) =>
      student.studentName.toLowerCase().includes(searchLower),
    );
  }
  if (search.teacherName) {
    const searchLower = search.teacherName.toLowerCase();
    result = result.filter((teacher) =>
      teacher.teacherName.toLowerCase().includes(searchLower),
    );
  }
  if (search.status) {
    const statusArray = search.status.split(".");
    result = result.filter((student) => statusArray.includes(student.status));
  }
  return result;
}

export async function getData(rosterId: string) {
  noStore();
  const { data, error } = await client.api.users.student
    .details({ id: rosterId })
    .get();

  if (error) {
    logger.error(error);
    return notFound();
  }
  if (!data) {
    return notFound();
  }
  const student = data.student;
  const requests = data.requests;
  return { student, requests };
}

export async function getDefaultRoster(
  teacherId: string,
  search: TableSearchParams,
) {
  noStore();
  const { data, error } = await client.api.rosters.teacher
    .roster({ userId: teacherId })
    .get();

  if (error) {
    logger.error(error);
    return null;
  }
  if (!data) {
    return null;
  }
  const teacher = data.teacherRoster;
  const requestCount = data.requestCount;
  const chatCount = data.chatCount;
  let result = teacher.map((student) => ({
    ...student,
    firstName: student.studentName.split(" ")[0]!,
    lastName: student.studentName.split(" ")[1]!,
  }));
  if (!search) {
    return { result, requestCount, chatCount };
  }

  if (search.studentName) {
    const searchLower = search.studentName.toLowerCase();
    result = result.filter((student) =>
      student.studentName.toLowerCase().includes(searchLower),
    );
  }

  if (search.status) {
    const statusArray = search.status.split(".");
    result = result.filter((student) => statusArray.includes(student.status));
  }
  return { result, requestCount, chatCount };
}

export async function getRosters(search: TableSearchParams) {
  noStore();
  const { data, error } = await client.api.classes.secretary.get();
  if (error) {
    logger.error(error);
  }
  if (!data) {
    return [];
  }
  if (!search) {
    return data;
  }
  let result = data;
  if (search.teacherName) {
    const searchLower = search.teacherName.toLowerCase();
    result = result.filter((teacher) =>
      teacher.teacherName.toLowerCase().includes(searchLower),
    );
  }
  return result;
}

export async function getStudentClassesData(
  userId: string,
  search: TableSearchParams,
) {
  noStore();

  const { data, error } = await client.api.classes.all({ id: userId }).get();
  if (error) {
    logger.error(error);
  }
  if (!data) {
    return { tableData: [], currentClass: "" };
  }
  const currentClass = data.currentClass;
  let tableData = data.classes;

  if (search.teacherName) {
    const searchLower = search.teacherName.toLowerCase();
    tableData = tableData.filter((student) =>
      student.teacherName.toLowerCase().includes(searchLower),
    );
  }
  if (search.available) {
    const searchLower = search.available.toLowerCase();
    tableData = tableData.filter((student) =>
      student.available?.toString().toLowerCase().includes(searchLower),
    );
  }

  return { tableData, currentClass };
}

export async function getStudentRequests(userId: string) {
  noStore();
  const { data, error } = await client.api.requests
    .student({ userId: userId })
    .get();
  if (error) {
    logger.error(error);
  }
  if (!data) {
    return [];
  }
  return data;
}
export async function getMessages(teacherId: string) {
  const { data, error } = await client.api.inbox
    .alerts({ userId: teacherId })
    .get();
  if (error) {
    logger.error(error);
  }
  return data;
}
