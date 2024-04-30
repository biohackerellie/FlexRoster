/**
 * Validators and Types for Postgres using Drizzle's Zod plugin,
 * giving us a way to validate and typecheck our SQL queries between applications.
 * @see https://orm.drizzle.team/docs/zod
 */

import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { schema } from "@local/db";

/**
 * Users
 */

export const selectUserValidator = createSelectSchema(schema.users);
export const userArrayValidator = z.array(selectUserValidator);
export const insertUserValidator = createInsertSchema(schema.users);

export type User = z.infer<typeof selectUserValidator>;

/**
 * Student Profiles
 */

export const studentStatusSchema = z.enum([
  "default",
  "transferredA",
  "transferredN",
]);
export type StudentStatus = z.infer<typeof studentStatusSchema>;

export const selectStudentValidator = createSelectSchema(schema.students);
export const studentArrayValidator = z.array(selectStudentValidator);
export const insertStudentValidator = createInsertSchema(schema.students);

export type Student = z.infer<typeof selectStudentValidator>;

/**
 * Classrooms
 */

export const selectClassroomValidator = createSelectSchema(schema.classrooms);
export const classroomArrayValidator = z.array(selectClassroomValidator);
export const insertClassroomValidator = createInsertSchema(schema.classrooms);

export type Classroom = z.infer<typeof selectClassroomValidator>;

/**
 * Query Validation
 */

export const AllStudentValidator = z.object({
  rosterId: z.number(),
  studentEmail: z.string(),
  studentName: z.string(),
  status: studentStatusSchema,
  teacherName: z.string(),
});

export const allStudentsArrayValidator = z.array(AllStudentValidator);

export type AllStudents = z.infer<typeof AllStudentValidator>;

export const selectRequestsValidator = createSelectSchema(schema.requests);
export const requestsArrayValidator = z.array(selectRequestsValidator);
export const insertRequestsValidator = createInsertSchema(schema.requests);

export type Requests = z.infer<typeof selectRequestsValidator>;

export interface JoinedStudentUser {
  students?: Student;
  user?: User | null | undefined;
  requests?: Requests[] | null | undefined;
}
