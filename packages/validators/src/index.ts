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

export const createCommentSchema = z.object({
  comment: z.string(),
});

export type CreateCommentSchema = z.infer<typeof createCommentSchema>;

export * from "./nameHelpers";
export * from "./pgValidators";
