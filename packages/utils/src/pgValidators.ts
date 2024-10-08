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

export const selectAvailabilityValidator = createSelectSchema(
  schema.availability,
);
export const availabilityArrayValidator = z.array(selectAvailabilityValidator);
export const insertAvailabilityValidator = createInsertSchema(
  schema.availability,
);

export type Availability = z.infer<typeof selectAvailabilityValidator>;

/**
 * Query Validation
 */

export const AllStudentValidator = z.object({
  rosterId: z.number(),
  studentEmail: z.string(),
  studentName: z.string(),
  status: studentStatusSchema,
  teacherName: z.string(),
  studentId: z.string().nullable(),
});

export const allStudentsArrayValidator = z.array(AllStudentValidator);

export type AllStudents = z.infer<typeof AllStudentValidator>;

export const requestValidator = createSelectSchema(schema.requests);
export const modifiedRequestValidator = requestValidator.extend({
  dateRequested: z.union([z.string().datetime({ offset: true }), z.date()]),
});
export const requestArrayValidator = z.array(modifiedRequestValidator);
export const insertRequestsValidator = createInsertSchema(schema.requests);

export type Request = z.infer<typeof modifiedRequestValidator>;

export interface JoinedStudentUser {
  students?: Student;
  user?: User | null | undefined;
  requests?: Request[] | null | undefined;
}

export const TeacherRosterValidator = z.object({
  studentEmail: z.string(),
  studentName: z.string(),
  status: studentStatusSchema,
  studentId: z.string().nullable(),
  classroomId: z.string().optional(),
  defaultClassroomId: z.string().optional(),
  chatId: z.string().nullable(),
  rosterId: z.union([z.string(), z.number()]),
});

export const teacherRosterArrayValidator = z.array(TeacherRosterValidator);
export type TeacherRoster = z.infer<typeof TeacherRosterValidator>;

export const StudentClassesValidator = z.object({
  roomNumber: z.string(),
  comment: z.string().nullable(),
  teacherName: z.string(),
  available: z.boolean().nullable(),
  teacherId: z.string(),
  chatId: z.string().optional(),
  id: z.string().optional(),
  availableDates: z.array(z.coerce.date()).optional(),
});

export const studentClassesArrayValidator = z.array(StudentClassesValidator);
export type StudentClasses = z.infer<typeof StudentClassesValidator>;

export const StudentDashboardDataValidator = z.object({
  classes: studentClassesArrayValidator,
  currentClass: z.string(),
});
export type StudentDashboardData = z.infer<
  typeof StudentDashboardDataValidator
>;

export const teacherRequestQueryValidator = z.object({
  incomingRequests: z.array(modifiedRequestValidator),
  outgoingRequests: z.array(modifiedRequestValidator),
});

export type TeacherRequestQuery = z.infer<typeof teacherRequestQueryValidator>;
