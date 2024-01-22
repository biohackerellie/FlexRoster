import { StudentTable, columns, DataTable } from '@/components/tables/student';
import fetch from '@/lib/eden';

export const dynamic = 'force-dynamic';

async function getData(): Promise<StudentTable[]> {
  const data = await fetch('/api/classes/', {});
  const mappedData: StudentTable[] = data.data.map((rooms) => {
    return {
      roomNumber: rooms.roomNumber,
      teacherName: rooms.teacherName,
      available: rooms.available,
      id: rooms.id,
    };
  });

  return mappedData;
}

export default async function StudentDashboard() {
  const data = await getData();
  console.log(data);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
