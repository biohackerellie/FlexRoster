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
  available: z.string().optional(),
  studentName: z.string().optional(),
  teacherName: z.string().optional(),
  filter: z.string().optional(),
});

export type TableSearchParams = z.infer<typeof searchParamsValidator>;

export const createCommentSchema = z.object({
  comment: z.string(),
});

export type CreateCommentSchema = z.infer<typeof createCommentSchema>;

export const datePickerSchema = z.object({
  requestedDate: z.date({
    required_error: "Requested date is required",
  }),
});
export type DatePickerSchema = z.infer<typeof datePickerSchema>;

export const teacherDatePickerSchema = z.object({
  dates: z.array(
    z.date({
      required_error: "Requested date is required",
    }),
  ),
});
export type TeacherDatePickerSchema = z.infer<typeof teacherDatePickerSchema>;

export * from "./nameHelpers";
export * from "./pgValidators";

interface PreferredNames {
  givenName: string;
  preferredName: string;
}

export * from "./logger";
