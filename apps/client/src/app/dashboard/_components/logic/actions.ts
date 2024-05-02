"use server";

import {
  unstable_noStore as noStore,
  revalidatePath,
  revalidateTag,
} from "next/cache";

import type {
  CreateCommentSchema,
  DatePickerSchema,
  requestFormType,
  TableSearchParams,
} from "@local/validators";
import { auth } from "@local/auth";

import { client } from "@/lib/eden";
import { getErrorMessage } from "@/lib/errorHandler";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

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

export async function RequestRoom(
  input: DatePickerSchema & { teacherId: string },
) {
  noStore();
  try {
    const session = await auth();
    const studentId = session?.user?.id!;

    const { data, error } = await client.api.requests.new.post({
      studentId: studentId,
      newTeacher: input.teacherId,
      dateRequested: input.requestedDate,
    });
    if (error) {
      throw error.value;
    }
    await pusherServer.trigger(
      toPusherKey(`request:${input.teacherId}`),
      "new-request",
      { studentId },
    );
    revalidatePath("/", "layout");

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
