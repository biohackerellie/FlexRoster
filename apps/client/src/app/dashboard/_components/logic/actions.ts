"use server";

import type { DateRange } from "react-day-picker";
import {
  unstable_noStore as noStore,
  revalidatePath,
  revalidateTag,
} from "next/cache";

import type { CreateCommentSchema, DatePickerSchema } from "@local/utils";
import { auth } from "@local/auth";
import { logger } from "@local/utils";

import { client } from "@/lib/eden";
import { getErrorMessage } from "@/lib/errorHandler";
import { pusherServer } from "@/lib/pusher";
import { convertUTCDateToLocalDate, toPusherKey } from "@/lib/utils";

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

export async function setAvailability(
  range: DateRange,
  classroomId: string,
  teacherId: string,
) {
  try {
    //calculate all of the dates in the date range from date.from to date.to
    const dates: Date[] = [];
    if (!range.to) {
      dates.push(convertUTCDateToLocalDate(range.from!));
    } else {
      for (
        let date = range.from!;
        date <= range.to;
        date.setDate(date.getDate() + 1)
      ) {
        dates.push(convertUTCDateToLocalDate(date));
      }
    }
    if (dates.length > 0) {
      logger.info("dates", dates);
      await client.api.classes.availability.post({
        classroomId: classroomId,
        teacherId: teacherId,
        dates: dates,
      });
      revalidatePath("/");
    }
  } catch (err) {
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function setTodayAvailability(
  classroomId: string,
  teacherId: string,
  availability: boolean,
) {
  try {
    const today = convertUTCDateToLocalDate(new Date());
    today.setHours(0, 0, 0, 0);
    if (availability === true) {
      const dates = [today];
      const res = await client.api.classes.availability.post({
        classroomId: classroomId,
        teacherId: teacherId,
        dates: dates,
      });
      revalidatePath("/");
      logger.debug(res);
      return {
        data: null,
        error: null,
      };
    } else {
      await client.api.classes.availability.delete({
        id: teacherId,
        date: today,
      });
      logger.debug("deleting", today);
      revalidatePath("/");
      return {
        data: null,
        error: null,
      };
    }
  } catch (err) {
    logger.error("something went wrong", err);
    return {
      data: null,
      error: getErrorMessage(err),
    };
  }
}

export async function getAvailability(id: string) {
  const today = convertUTCDateToLocalDate(new Date());
  today.setHours(0, 0, 0, 0);
  try {
    const { data, error } = await client.api.classes
      .availability({ id: id })
      .get();
    if (error) {
      throw error.value;
    }
    const filteredDates = data.filter((date) => date.date >= today);
    return filteredDates;
  } catch (err) {
    logger.error("something went wrong", err);
    return [];
  }
}

export async function RequestRoom(
  input: DatePickerSchema & {
    teacherId?: string;
    studentId?: string;
  },
) {
  noStore();
  try {
    let student = "";
    let teacher = "";
    let teacherRequest = false;
    const session = await auth();
    const userId = session?.user?.id!;
    if (input.studentId) {
      student = input.studentId;
      teacher = userId;
      teacherRequest = true;
    } else if (input.teacherId) {
      student = userId;
      teacher = input.teacherId;
    }
    logger.info("requested Date", input.requestedDate);
    const { data, error } = await client.api.requests.new.post({
      studentId: student,
      newTeacher: teacher,
      dateRequested: input.requestedDate,
      teacherRequest: teacherRequest,
    });
    if (error) {
      throw error.value;
    }
    await pusherServer.trigger(
      toPusherKey(`request:${teacher}`),
      "new-request",
      { student },
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
