import "server-only";

import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

import type { TableSearchParams } from "@local/validators";

import { client } from "@/lib/eden";
import { chatHrefConstructor } from "@/lib/utils";

export async function getTableData(search: TableSearchParams) {
  noStore();
  const { data, error } = await client.api.rosters.all.get();

  if (error) {
    console.error(error);
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
    console.error(error);
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
    console.error(error);
  }
  if (!data) {
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

  if (search.status) {
    const statusArray = search.status.split(".");
    result = result.filter((student) => statusArray.includes(student.status));
  }

  return result;
}

export async function getRosters(search: TableSearchParams) {
  noStore();
  const { data, error } = await client.api.classes.secretary.get();
  if (error) {
    console.error(error);
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
