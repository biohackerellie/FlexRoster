import { fetcher } from './generics';
import { ClassResponse } from '@/studentscheduler/lib/types';
import { db } from '@/studentscheduler/lib/db';
import { classrooms } from '@/studentscheduler/lib/db';
try {
  const data = await fetcher<ClassResponse>(
    'https://mtdecloud2.infinitecampus.org/campus/api/oneroster/v1p2/laurel/ims/oneroster/rostering/v1p2/classes?filter=school.sourcedId%3D%27D802F884-913D-4FEB-8EE5-6E01977760E8%27&limit=1200',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-XSRF-TOKEN': process.env.XSRF_TOKEN as string,
        Authorization: `Bearer ${process.env.ONEROSTER_TOKEN}` as string,
      },
    }
  );
  const filteredClasses = data.classes.filter((cls) =>
    cls.title.includes('STEAM-A')
  );

  const classTitles = filteredClasses.map((cls) => {
    return {
      teacher: cls.classCode,
      roomNumber: cls.location || 'unknown',
    };
  });

  const classroomsToCreate = [];
  let count = 0;
  for (const room of classTitles) {
    classroomsToCreate.push({
      roomNumber: room.roomNumber,
      teacherName: room.teacher,
    });
    count++;
  }
  console.log(classroomsToCreate);
  await db.insert(classrooms).values(classroomsToCreate);
  console.log(classroomsToCreate, count);

  return NextResponse.json(
    { message: 'success' },
    { status: 200, statusText: 'OK' }
  );
} catch (error) {
  console.error(error);
  return NextResponse.json({ message: 'error' }, { status: 500 });
}
