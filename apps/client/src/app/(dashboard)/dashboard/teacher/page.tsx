import { auth } from "@local/auth";
import { client } from "@local/eden";

import { chatHrefConstructor } from "@/lib/utils";
import { DefaultRosterComponent } from "./_components";

export default async function TeacherDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name!.split(" ")[0];
  const teacherId = session?.user?.id!;
  console.log(firstName, teacherId);
  const roster = await getDefaultRoster(teacherId);
  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <h1 className="text-3xl font-semibold text-gray-700">
        Hello, {firstName}!
      </h1>
      <DefaultRosterComponent data={roster} />
    </div>
  );
}

async function getDefaultRoster(teacherId: string) {
  const res = await client.api.rosters.teacher.roster[`${teacherId}`]?.get();
  console.log(res);
  if (!res || res.error) {
    throw new Error(res?.error?.message || "Error fetching class");
  }

  const mapped = res.data.map((student) => {
    return {
      studentName: student.studentName,
      studentEmail: student.studentEmail,
      studentId: student.studentId,
      chatId: student.studentId
        ? `/chat/${chatHrefConstructor(teacherId, student.studentId)}`
        : null,
    };
  });
  return mapped;
}
