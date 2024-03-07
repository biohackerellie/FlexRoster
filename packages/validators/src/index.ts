import { z } from "zod";

export const messageValidator = z.object({
  id: z.string().optional(),
  senderId: z.string(),
  text: z.string(),
  timestamp: z.union([z.string(), z.number()]),
});

export const messageArrayValidator = z.array(messageValidator);

export type Message = z.infer<typeof messageValidator>;

export const requestValidator = z.object({
  id: z.string(),
  studentId: z.string(),
  currentTeacher: z.string(),
  newTeacher: z.string(),
  status: z
    .string()
    .refine((value) => ["pending", "approved", "denied"].includes(value), {
      message: "Invalid status value",
    }),
  timestamp: z.number(),
});

export const requestArrayValidator = z.array(requestValidator);
export type Request = z.infer<typeof requestValidator>;

export * from "./nameHelpers";
