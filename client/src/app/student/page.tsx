import { StudentTable, columns, DataTable } from '@/components/tables/student';
import fetch from '@/lib/eden';
import { auth } from '@/lib/auth';

export const dynamic = 'force-dynamic';

type rooms = {
  roomNumber: string;
  teacherName: string;
  available: boolean;
  id: string;
};

async function getData(email: string): Promise<StudentTable[]> {
  const data = await fetch('/api/classes/', {});
  const mappedData: StudentTable[] = data.data.map((rooms: rooms) => {
    return {
      roomNumber: rooms.roomNumber,
      teacherName: rooms.teacherName,
      available: rooms.available,
      email: email,
    };
  });

  return mappedData;
}

async function getClass(email: string): Promise<string> {
  const data = await fetch('/api/rosters/student/:email', {
    method: 'GET',
    params: { email: email },
  });
  return data.data;
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
  const email = session?.user?.email!;
  const { availableClasses, currentClass } = await allData(email);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center text-4xl font-semibold pb-2">
        {currentClass}
      </h1>
      <DataTable columns={columns} data={availableClasses} />
    </div>
  );
}
