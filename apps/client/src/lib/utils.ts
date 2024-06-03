export function chatHrefConstructor(id1: string, id2: string) {
  const sortedIds = [id1, id2].sort();
  return `${sortedIds[0]}--${sortedIds[1]}`;
}

export function requestIDConstructor(studentId: string, toTeacherId: string) {
  const sortedIds = [studentId, toTeacherId].sort();
  return `request:${sortedIds[0]}--${sortedIds[1]}`;
}

export function formatTeacherNames(teacherName: string) {
  const formattedTeacherName = teacherName?.split(", ").reverse().join(" ");

  //remove the middle initial from 'firstname middleinitial lastname'
  const teacher = formattedTeacherName
    ?.split(" ")
    .filter((name) => name.length > 1)
    .join("-");

  return teacher;
}

export function toPusherKey(key: string) {
  return key.replace(/:/g, "__");
}
export function convertUTCDateToLocalDate(date: Date | string): Date {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString([], {
      timeZone: "UTC",
    }),
  );
}
