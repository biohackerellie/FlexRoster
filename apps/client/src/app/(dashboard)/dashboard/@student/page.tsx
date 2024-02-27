import { auth } from "@local/auth";
import { client } from "@local/eden";

import { ChatInput, Messages } from "@/components/chat";
import { greetings } from "@/lib/constants";
import { StudentTable } from "@/lib/types";
import { chatHrefConstructor, formatTeacherNames } from "@/lib/utils";
import { ClassListComponent } from "./_components/ClassList";

async function getData(email: string, userid: string) {
  const { data: data, error } = await client.api.classes[""].get();
  if (error) {
    return [];
  }
  const mappedData: StudentTable[] = data.map((rooms) => {
    const formattedTeacherName = formatTeacherNames(rooms.teacherName);
    return {
      roomNumber: rooms.roomNumber,
      teacherName: formattedTeacherName,
      available: rooms.available,
      email: email,
      chatId: `/chat/${chatHrefConstructor(userid, rooms.teacherId!)}`,
    };
  });
  return mappedData as StudentTable[];
}

async function getClass(email: string) {
  const res = (await client.api.rosters.student[`${email}`]?.get()) ?? {
    error: null,
    data: [],
  };
  if (res.error) {
    return [];
  }
  return res.data;
}

async function allData(email: string, userid: string) {
  const [availableClasses, currentClass] = await Promise.all([
    getData(email, userid),
    getClass(email),
  ]);
  return { availableClasses, currentClass };
}

export default async function StudentDashboard() {
  const session = await auth();

  const firstName = session?.user?.name!.split(" ")[0];
  const userId = session?.user?.id!;
  const email = session?.user?.email!;

  const { availableClasses, currentClass } = await allData(email, userId);

  const getRandomGreeting = () => {
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const greeting = getRandomGreeting();
  return (
    <div className="container mx-auto py-10">
      <h1 className="pb-2 text-center text-4xl font-semibold">
        {greeting} {firstName}!
      </h1>
      <p className="pb-2 text-center text-2xl font-medium">
        Your STEAM class today is {currentClass}
      </p>
      <div className="max-h-2xl container flex max-w-4xl flex-col justify-center p-4">
        <ClassListComponent data={availableClasses} />
      </div>
    </div>
  );
}
