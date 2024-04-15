import { z } from "zod";

export const messageValidator = z.object({
  id: z.string().optional(),
  senderId: z.string(),
  text: z.string(),
  timestamp: z.union([z.string(), z.number()]),
});

export const messageArrayValidator = z.array(messageValidator);

export type Message = z.infer<typeof messageValidator>;

const requestStatusSchema = z.enum(["pending", "approved", "denied"]);

export const requestValidator = z.object({
  id: z.union([z.string(), z.number()]),
  studentId: z.number(),
  studentName: z.string(),
  currentTeacher: z.string(),
  currentTeacherName: z.string(),
  newTeacher: z.string(),
  newTeacherName: z.string(),
  dateRequested: z.string().datetime(),
  status: requestStatusSchema,
  arrived: z.boolean().optional(),
  timestamp: z.string().datetime(),
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

export * from "./nameHelpers";
