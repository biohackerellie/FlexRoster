import { z } from "zod";

export const messageValidator = z.object({
  id: z.string(),
  to: z.string(),
  from: z.string(),
  timestamp: z.number(),
  message: z.string(),
});

export const messageArrayValidator = z.array(messageValidator);

export type Message = z.infer<typeof messageValidator>;
