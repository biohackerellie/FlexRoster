import { NotFoundError } from "elysia";

import type { Request, Student, User } from "@local/utils";
import { db, eq, schema, sql } from "@local/db";
import { logger } from "@local/utils";

import {
  allStudentDetails,
  allStudentRequests,
  userQuery,
  userRosterQuery,
} from "~/lib/sql";

export async function getDBUser(id: string) {
  try {
    const user = await userQuery.execute({ id: id });
    logger.info("User found in DB", { user });
    const result = user[0] ?? null;
    if (result === null) {
      throw new NotFoundError("No user found with that ID");
    }
    return result;
  } catch (e) {
    throw new NotFoundError("No user found with that ID");
  }
}

export async function getStudent(id: string) {
  try {
    const results = await userRosterQuery.execute({ id: id });

    if (results.length === 0) {
      throw new NotFoundError("No student found with that ID");
    }
    const student = results[0];
    if (student?.classrooms === null) {
      throw new NotFoundError("No Classroom found for student");
    }
    return student;
  } catch (e) {
    throw new NotFoundError("No student found with that ID");
  }
}

export async function getStudentDetails(id: string) {
  try {
    const studentId = parseInt(id);
    const [student] = await allStudentDetails.execute({ id: studentId });
    if (!student) {
      throw new NotFoundError("No student found with that ID");
    }
    let requests: Request[] = [];
    if (student.user) {
      requests = await allStudentRequests.execute({
        studentId: student.user.id,
      });
    }
    return { student, requests };
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message, e.cause);
    }
    throw new NotFoundError("No student found with that ID");
  }
}
