"use server";

import {
  unstable_noStore as noStore,
  revalidatePath,
  revalidateTag,
} from "next/cache";
import { DateRange } from "react-day-picker";

import type {
  CreateCommentSchema,
  DatePickerSchema,
  requestFormType,
  TableSearchParams,
  TeacherDatePickerSchema,
} from "@local/utils";
import { auth } from "@local/auth";

import { client } from "@/lib/eden";
import { getErrorMessage } from "@/lib/errorHandler";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export async function Attendance(studentId: string) {
  const { data: res, error } = await client.api.rosters.attendance.post({
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

export async function setAvailability(range: DateRange, classroomId: string) {
  try {
    //calculate all of the dates in the date range from date.from to date.to
    const dates = [];
    if (!range.to) {
      dates.push(range.from!);
    } else {
      for (
        let date = range.from!;
        date <= range.to;
        date.setDate(date.getDate() + 1)
      ) {
        dates.push(new Date(date));
      }
    }
    await client.api.classes.availability.post({
      id: classroomId,
      dates: dates,
    });
    revalidatePath("/");
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
