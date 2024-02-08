import { StudentTable } from '@/lib/types';
import { auth } from '@/lib/auth';
import { greetings } from '@/lib/constants';
import { client } from 'eden';
import { ClassListComponent } from './_components/ClassList';

type rooms = {
  roomNumber: string;
  teacherName: string;
  available: boolean;
  id: string;
};

async function getData(email: string) {
  const { data: data, error } = await client.api.classes[''].get();
  if (error) {
    console.log('something went wrong', error);
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
  const res = await client.api.rosters.student[`${email}`].get();
  if (res.error) {
    console.log('something went wrong', res.error);
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

  const firstName = session?.user?.name!.split(' ')[0];
  const email = session?.user?.email!;

  const { availableClasses, currentClass } = await allData(email);

  const getRandomGreeting = () => {
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const greeting = getRandomGreeting();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-4xl font-semibold pb-2">
        {greeting} {firstName}!
      </h1>
      <p className="text-center text-2xl font-medium pb-2">
        Your STEAM class today is {currentClass}
      </p>
      <div className="container max-w-4xl max-h-2xl p-4 justify-center flex flex-col">
        <ClassListComponent data={availableClasses} />
      </div>
    </div>
  );
}
