import { auth } from "@local/auth";

import { client } from "@/lib/eden";
import { ClassroomProvider } from "./context";

export default async function ClassroomLayout(props: {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}) {
  const params = await props.params;

  const { children } = props;

  let classroom = undefined;
  const session = await auth();
  const teacherId = params.id;
  let isTeacher = false;
  if (session) {
    const userId = session?.user?.id;
    if (userId === teacherId) {
      isTeacher = true;
    }
  }
  const teacherData = await getTeacherData(teacherId);
  if (teacherData) {
    classroom = {
      teacherId: teacherId,
      authorized: isTeacher,
      classroomId: teacherData.id,
      available: teacherData.available,
      roomNumber: teacherData.roomNumber,
      teacherName: teacherData.teacherName,
      comment: teacherData.comment,
    };
  }
  return (
    <ClassroomProvider classroom={classroom}>{children}</ClassroomProvider>
  );
}
async function getTeacherData(id: string) {
  const { data: res, error } = await client.api.classes.id({ id: id }).get();

  if (error) {
    throw new Error("something went wrong 👌", { cause: error.value });
  }
  if (!res) {
    return undefined;
  }

  return res;
}
