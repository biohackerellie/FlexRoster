import { auth } from "@local/auth";
import { client } from "@local/eden";

import { greetings } from "@/lib/constants";
import { StudentTable } from "@/lib/types";
import { ClassListComponent } from "./_components/ClassList";

type rooms = {
  roomNumber: string;
  teacherName: string;
  available: boolean;
  id: string;
};

async function getData(email: string) {
  const { data: data, error } = await client.api.classes[""].get();
  if (error) {
    console.log("something went wrong", error);
    return [];
  }
  const mappedData: StudentTable[] = data.map((rooms: rooms) => {
    return {
      roomNumber: rooms.roomNumber,
      teacherName: rooms.teacherName,
      available: rooms.available,
      email: email,
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
    console.log("something went wrong", res.error);
    return [];
  }
  return res.data;
}

async function allData(email: string) {
  const [availableClasses, currentClass] = await Promise.all([
    getData(email),
    getClass(email),
  ]);
  return { availableClasses, currentClass };
}

export default async function StudentDashboard() {
  const session = await auth();

  const firstName = session?.user?.name!.split(" ")[0];
  const email = session?.user?.email!;

  const { availableClasses, currentClass } = await allData(email);

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
