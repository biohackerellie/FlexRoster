import { auth } from '@student_scheduler/auth';
import { api } from '@/trpc/server';

async function getData() {
  const session = await auth();
  // if (session) {
  //   const id = session.user.id;
  //   const student = await api.users.one.query({ id: id });

  //   if (student && student.classroomID !== null) {
  //     const classroom = await api.classes.one.query({
  //       classroomId: student.classroomID,
  //     });
  //     return classroom;
  //   }
  // }
  // return null;
  console.log(session);
  return null;
}

export default async function StudentHome() {
  const classroom = await getData();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-white">
        Welcome to S.T.E.A.M. Room: {classroom?.roomNumber} with{' '}
        {classroom?.teacherName}
      </h1>
    </div>
  );
}
