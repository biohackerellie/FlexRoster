"use server";

import {
  unstable_noStore as noStore,
  revalidatePath,
  revalidateTag,
} from "next/cache";

import type { CreateCommentSchema, TableSearchParams } from "@local/validators";

import { client } from "@/lib/eden";
import { getErrorMessage } from "@/lib/errorHandler";

export async function Attendance(studentId: string) {
  const { data: res, error } = await client.api.rosters.attendance[""].post({
    studentId: studentId,
  });

  if (error) {
    console.error(error);
    throw new Error("something went wrong 👌", { cause: error.value });
  }
  if (!res) {
    throw new Error("No data found");
  }

  revalidateTag("roster");
  revalidatePath("/dashboard/teacher", "layout");
}

export async function getTableData(search: TableSearchParams) {
  const { data, error } = await client.api.rosters.all.get();
  if (error) {
    console.error(error);
    return [];
  }

  if (search) {
    if (search.status && !search.studentName) {
      const statusArray = search.status.split(".");
      return data.filter((student) => {
        statusArray.includes(student.status);
      });
    } else if (search.studentName && !search.status) {
      const searchLower = search.studentName.toLowerCase();
      return data.filter((student) =>
        student.studentName.toLowerCase().includes(searchLower),
      );
    } else if (search.status && search.studentName) {
      const searchLower = search.studentName.toLowerCase();
      const statusArray = search.status.split(".");
      return data.filter(
        (student) =>
          student.studentName.toLowerCase().includes(searchLower) &&
          statusArray.includes(student.status),
      );
    }
  }
  return data;
}

export async function RequestApproval(
  requestId: string | number,
  status: "approved" | "denied",
  studentId: string,
  teacherId: string,
  newTeacherId: string,
) {
  const { data: res, error } = await client.api.requests
    .update({ requestId: requestId })
    .post({
      studentId: studentId,
      teacherId: teacherId,
      newTeacherId: newTeacherId,
      status: status,
    });

  if (error) {
    console.error(error);
    throw new Error("something went wrong 👌", { cause: error.value });
  }
  if (!res) {
    throw new Error("No data found");
  }

  revalidateTag("roster");
  revalidateTag("requests");
  revalidatePath("/dashboard", "layout");
}

export async function createComment(
  input: CreateCommentSchema & { id: string },
) {
  noStore();
  try {
    const { data, error } = await client.api.classes.comments
      .create({
        id: input.id,
      })
      .patch({ comment: input.comment });

    revalidatePath(`/dashboard/staff/${input.id}`, `page`);
    revalidateTag("roster");
    if (error) {
      throw new Error(error.value, { cause: error });
    }
    return {
      data: null,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}
export async function deleteComment(id: string) {
  try {
    await client.api.classes.comments.delete.post({ id: id });

    revalidatePath(`/dashboard/staff/${id}`, `page`);
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function setAvailability(id: string, status: boolean) {
  try {
    await client.api.classes.availability.post({ id, status });
    revalidatePath("/");
    revalidatePath(`/dashboard/staff/${id}`, `page`);
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}
