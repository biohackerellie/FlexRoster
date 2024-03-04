"use server";

import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import {
  Message,
  messageValidator,
  Request,
  requestValidator,
} from "@local/validators";

import { pusherServer } from "@/lib/pusher";
import { Publisher, sendToInbox } from "@/lib/redis/actions";
import { requestIDConstructor, toPusherKey } from "@/lib/utils";

export async function RequestRoom(teacherId: string) {
  const session = await auth();
  const studentId = session?.user?.id!;
  const { data: data, error } =
    await client.api.users.student[`${studentId}`]?.get()!;

  if (error) return;

  const currentTeacher = data?.classRosters.classroom.teacherId!;
  const timestamp = Date.now();
  const requestData: Request = {
    id: nanoid(),
    status: "pending",
    timestamp,
    studentId,
    currentTeacher,
    newTeacher: teacherId,
  };

  const request = requestValidator.parse(requestData);
  const requestId = requestIDConstructor(studentId, teacherId, currentTeacher);
  await pusherServer.trigger(
    toPusherKey(`request:${teacherId}`),
    "new-request",
    request,
  );
  await pusherServer.trigger(
    toPusherKey(`request:${currentTeacher}`),
    "new-request",
    request,
  );
  const res = await client.api.rosters.request[`${requestId}`]?.post({
    request,
  });
  if (res?.error) {
    throw new Error("You have already made a request today.", res.error);
  }
  return 200;
}

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

export async function sendMessage(chatId: string, text: string) {
  try {
    if (!chatId) throw new Error("ChatId is required");
    const session = await auth();

    const [userId1, userId2] = chatId.split("--");
    if (!session) {
      throw new Error("You are not logged in");
    }

    const timestamp = Date.now();
    if (session.user.id !== userId1 && session.user.id !== userId2) {
      return new Response("Unauthorized", { status: 401 });
    }
    const friendId = session.user.id === userId1 ? userId2 : userId1;

    const messageData: Message = {
      id: nanoid(),
      senderId: session.user.id,
      text,
      timestamp,
    };
    const message = messageValidator.parse(messageData);
    const chat = client.api.inbox[chatId]?.subscribe();

    chat?.send(message);
    chat?.close();
    // Publisher(`chat:${chatId}`, message);
    // Publisher(`user:${friendId}:chats`, {
    //   ...message,
    //   senderName: session.user.name,
    // });

    sendToInbox(chatId, message);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
