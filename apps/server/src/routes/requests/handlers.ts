import { NotFoundError } from "elysia";

import type { Logs, Request, RequestStatus } from "@local/utils";
import { db, eq, schema } from "@local/db";
import {
  logger,
  requestArrayValidator,
  requestValidator,
  teacherRequestQueryValidator,
} from "@local/utils";

import { newLog } from "~/lib/redis";
import {
  getClassroomIdByTeacher,
  userQuery,
  userRequestQuery,
  userRosterQuery,
} from "~/lib/sql";
// import { getHashKey } from "~/lib/utils";
import sendEmail from "~/lib/utils/sendEmail";

type insertRequest = typeof schema.requests.$inferInsert;
type newRequestProps = Partial<insertRequest>;
interface RequestProps extends newRequestProps {
  teacherRequest?: boolean;
}

export async function newRequest({
  studentId,
  newTeacher,
  dateRequested,
  teacherRequest,
}: RequestProps) {
  try {
    logger.debug(
      "studentId",
      studentId,
      "newTeacher",
      newTeacher,
      "dateRequested",
      dateRequested,
    );

    // const requests: Request[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let status: RequestStatus = "pending";
    if (teacherRequest) {
      status = "approved";
    }
    // requests = await userRequestQuery.execute({ userId: studentId });
    // if (requests.length > 0) {
    //   for (const r of requests) {
    //     if (r.dateRequested === dateRequested!) {
    //       if (r.status !== "denied") {
    //         throw new NoRequestForUError(
    //           "You already have a request for that date 🤡",
    //         );
    //       }
    //     }
    //   }
    // }
    const studentRaw = await userRosterQuery.execute({ id: studentId });
    if (studentRaw.length === 0) {
      throw new NotFoundError("No student found with that ID");
    }
    const student = studentRaw[0];
    const [currentTeacherRaw] = await userQuery.execute({
      id: student?.classrooms?.teacherId,
    });

    const currentTeacher = currentTeacherRaw?.id ?? " ";
    const currentTeacherName = student?.classrooms?.teacherName ?? " ";
    const newTeacherRaw = await userQuery.execute({ id: newTeacher });
    if (newTeacherRaw.length === 0) {
      throw new NotFoundError("No teacher found with that ID");
    }
    const newTeacherData = newTeacherRaw[0];
    let log: Logs;
    const timestamp = Date.now().toString();
    const readable = new Date(timestamp).toLocaleString();

    const requestData: insertRequest = {
      status: status,
      studentName: student?.user.name ?? " ",
      studentId: student?.user.id ?? " ",
      dateRequested: dateRequested!,
      currentTeacher: currentTeacher,
      currentTeacherName,
      newTeacher: newTeacher!,
      newTeacherName: newTeacherData?.name ?? "",
      arrived: null,
      timestamp,
      id: Math.floor(Math.random() * 1000000),
    };
    const validatedRequest = requestValidator.parse(requestData);
    let emailData = {
      to: "",
      subject: "Transfer Request",
      message: `<h1>Transfer Request</h1> <p>Your request to transfer to a new teacher has been ${status}</p>`,
    };
    if (teacherRequest) {
      const newClassroomId = await getClassroomIdByTeacher.execute({
        teacherId: newTeacher,
      });
      await db.transaction(async (tx) => {
        if (
          validatedRequest.dateRequested.toISOString() === today.toISOString()
        ) {
          await tx
            .update(schema.students)
            .set({
              classroomId: newClassroomId[0]?.classroomId,
              status: "transferredN",
            })
            .where(eq(schema.students.studentEmail, student?.user.email ?? ""));
        }
        await tx.insert(schema.requests).values(validatedRequest);
      });
      log = {
        type: "request",
        action: `${newTeacherData?.name} transferred  ${student?.user?.name} from ${currentTeacherName} at ${readable}`,
        user: newTeacherData?.name ?? "",
      };
      emailData = {
        to: currentTeacherRaw?.email ?? "",
        subject: "New Transfer Request",
        message: `<h1>Transfer Request</h1> <p>${newTeacherData?.name} has requested to transfer ${student?.user?.name} to their class on ${validatedRequest.dateRequested.toISOString().split("T")[0]}</p>`,
      };
    } else {
      await db.insert(schema.requests).values(validatedRequest);
      log = {
        type: "request",
        action: `${student?.user?.name} requested to transfer to ${newTeacherData?.name} from ${currentTeacherName} at ${timestamp}`,
        user: studentId!,
      };
      emailData = {
        to: newTeacherData?.email ?? "",
        subject: "New Transfer Request",
        message: `<h1>Transfer Request</h1> <p>${student?.user.name} has requested to transfer to your class on ${validatedRequest.dateRequested.toISOString().split("T")[0]}</p>`,
      };
    }
    await newLog(log!);

    await sendEmail(emailData);
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e);
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

export async function getTeacherRequests(userId: string) {
  try {
    const requests = await userRequestQuery.execute({ userId: userId });
    if (requests.length === 0) {
      return { incomingRequests: [], outgoingRequests: [] };
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(today.getDate() - 1);
    const incomingRequests: Request[] = [];
    const outgoingRequests: Request[] = [];
    const pendingRequests = requests.filter(
      (r) =>
        r.status !== "denied" &&
        r.dateRequested.toISOString() >= today.toISOString(),
    );
    logger.debug("requests", JSON.stringify(pendingRequests));
    for (const request of pendingRequests) {
      if (request.newTeacher === userId) {
        incomingRequests.push(request);
      } else if (request.currentTeacher === userId) {
        outgoingRequests.push(request);
      }
    }

    const validatedRequests = teacherRequestQueryValidator.parse({
      incomingRequests,
      outgoingRequests,
    });

    return validatedRequests;
  } catch (e) {
    logger.error("Error processing requests", e);
    throw new Error(
      e instanceof Error
        ? e.message
        : "Unknown error during request processing",
    );
  }
}

export async function getRequests(userId: string) {
  try {
    const requests = await userRequestQuery.execute({ userId: userId });
    if (requests.length === 0) {
      return;
    }
    const validatedRequests = requestArrayValidator.parse(requests);
    return validatedRequests;
  } catch (e) {
    logger.error(e);
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

/**
 * Function for approving or denying a request
 */

export async function requestApproval(
  requestId: string,
  studentId: string,
  teacherId: string,
  newTeacherId: string,
  status: "approved" | "denied",
) {
  try {
    // clear student request cache

    const [student] = await userRosterQuery.execute({ id: studentId });
    if (!student) throw new NotFoundError("No student found with that ID");
    const teacherEmail = await db.query.users.findFirst({
      where: eq(schema.users.id, teacherId),
      columns: { email: true },
    });
    const newTeacherNameRaw = await db.query.users.findFirst({
      where: eq(schema.users.id, newTeacherId),
      columns: { name: true },
    });
    const newTeacherName = newTeacherNameRaw?.name ?? "A new teacher";
    // get new teacher's roster
    const newClassroomId = await getClassroomIdByTeacher.execute({
      teacherId: newTeacherId,
    });
    if (!newClassroomId)
      throw new NotFoundError("No classroom found with that teacherId");

    // update request status
    const request = await db.transaction(async (tx) => {
      if (status === "approved") {
        // if approved update student's classroomId in db
        await tx
          .update(schema.students)
          .set({
            classroomId: newClassroomId[0]?.classroomId,
            status: "transferredN",
          })
          .where(eq(schema.students.studentEmail, student.user.email));
      }
      // update request status in db
      await tx
        .update(schema.requests)
        .set({ status: status })
        .where(eq(schema.requests.id, parseInt(requestId)));
      const [req] = await tx
        .select({
          timestamp: schema.requests.timestamp,
          dateRequested: schema.requests.dateRequested,
        })
        .from(schema.requests)
        .where(eq(schema.requests.id, parseInt(requestId)));
      return req;
    });

    const log: Logs = {
      user: newTeacherId,
      type: "request",
      action: `User ${newTeacherId} ${status} request ${requestId} for student ${student.user.id} from teacher ${teacherId} to teacher ${newTeacherId}`,
    };
    const emailData = {
      to: student.user.email,
      subject: "Transfer Request",
      message: `<h1>Transfer Request</h1> <p>Your request to transfer to ${newTeacherName} has been ${status}</p>`,
    };
    if (status === "approved") {
      const teacherEmailData = {
        to: teacherEmail?.email ?? "",
        subject: "Transfer Request",
        message: `<h1>Transfer Request</h1> <p>${student.user.name}'s request to transfer to ${newTeacherName} has been ${status} for ${request?.dateRequested}</p>`,
      };
      await sendEmail(teacherEmailData);
    }
    await sendEmail(emailData);
    await newLog(log);
    return new Response("OK", { status: 200 });
  } catch (e) {
    throw new NotFoundError("No requests found");
  }
}

export async function getAllRequests() {
  const data = await db.select().from(schema.requests);

  return data;
}
