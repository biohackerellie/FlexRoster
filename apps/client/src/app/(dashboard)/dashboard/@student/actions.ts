"use server";

import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import { Message, messageValidator } from "@local/validators";

export async function setRoster(
  email: string,
  roomNumber: string,
  teacherName: string,
) {
  if (!email) {
    return;
  }
  const res = await client.api.rosters.student[`${email}`]?.post({
    roomNumber,
    teacherName,
  });
  revalidatePath("/student", "layout");
  if (res?.error) {
    throw new Error("You have already made a request today.", res.error);
  }
  return 200;
}

export async function sendMessage(chatId: string, formData: FormData) {
  const text = formData.get("text") as string;

  try {
    if (!chatId) throw new Error("ChatId is required");
    const session = await auth();

    const [studentId, teacherName] = chatId.split("--");
    if (!session) {
      throw new Error("You are not logged in");
    }
    const timestamp = Date.now();

    const messageData: Message = {
      id: nanoid(),
      senderId: session.user.id,
      text,
      timestamp,
    };
    const message = messageValidator.parse(messageData);

    const chat = client.api.inbox[`${chatId}`]?.subscribe();

    chat?.send(message);

    await client.api.inbox[`${chatId}`]?.post({
      timestamp: timestamp,
      message: text,
    });

    return "success";
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
