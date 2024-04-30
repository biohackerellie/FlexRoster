import { z } from "zod";

import { studentStatusSchema } from "./pgValidators";

export const messageValidator = z.object({
  id: z.string().optional(),
  senderId: z.string(),
  text: z.string(),
  timestamp: z.union([z.string(), z.number()]),
});

export const messageArrayValidator = z.array(messageValidator);

export type Message = z.infer<typeof messageValidator>;

const requestStatusSchema = z.enum(["pending", "approved", "denied"]);

export const requestParser = z.object({
  teacherId: z.string(),
  dateRequested: z.string().datetime(),
});

export type requestFormType = z.infer<typeof requestParser>;

export const requestValidator = z.object({
  id: z.union([z.string(), z.number()]),
  studentId: z.string(),
  studentName: z.string(),
  currentTeacher: z.string(),
  currentTeacherName: z.string(),
  newTeacher: z.string(),
  newTeacherName: z.string(),
  dateRequested: z.string(),
  status: requestStatusSchema,
  arrived: z.boolean().nullable(),
  timestamp: z.string(),
});

export const requestArrayValidator = z.array(requestValidator);
export type Request = z.infer<typeof requestValidator>;

const logTypeSchema = z.enum(["error", "request", "attendance", "message"]);

export const logValidator = z.object({
  user: z.nullable(z.string()),
  type: logTypeSchema,
  action: z.string(),
});

export interface messageAlerts {
  chatPartnerId: string;
  chatPartnerName: string;
}

export const logArrayValidator = z.array(logValidator);
export type Logs = z.infer<typeof logValidator>;

export const searchParamsValidator = z.object({
  search: z.string().optional(),
  page: z.number().optional(),
  limit: z.number().optional(),
  status: studentStatusSchema.optional(),
  studentName: z.string().optional(),
  teacherName: z.string().optional(),
  filter: z.string().optional(),
});

export type TableSearchParams = z.infer<typeof searchParamsValidator>;

export * from "./nameHelpers";
export * from "./pgValidators";
