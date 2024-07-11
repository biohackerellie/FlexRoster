interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  role: "secretary" | "teacher" | "student" | "admin";
}

const nicknameMap: Record<string, string> = {
  matt: "matthew",
  mike: "michael",
  steve: "steven",
  liz: "elizabeth",
  beth: "elizabeth",
  dan: "daniel",
  chris: "christopher",
  jon: "jonathan",
  john: "jonathan",
  joe: "joseph",
  jim: "james",
  jenny: "jennifer",
  jen: "jennifer",
};

export function normalizeName(name: string): string[] {
  return name
    .toLowerCase()
    .split(/\s+|,|\./)
    .filter((word) => word.length)
    .map((word) => nicknameMap[word] ?? word);
}

export type NormalizeName = typeof normalizeName;

export function findUserIdByName(
  searchName: string,
  userObjects: User[],
): string | null {
  const searchWords = normalizeName(searchName);

  for (const user of userObjects) {
    if (user.name) {
      const baseWords = normalizeName(user.name);
      if (searchWords.every((word) => baseWords.includes(word))) {
        return user.id;
      }
    }
  }
  return null;
}

/**
 * Formats the teacher name by reversing the order of the name parts and removing the middle initial.
 * @param teacherName - The name of the teacher.
 * @returns The formatted teacher name.
 */

export function formatTeacherNames(teacherName: string) {
  const formattedTeacherName = teacherName?.split(", ").reverse().join(" ");

  //remove the middle initial from 'firstname middleinitial lastname'
  const teacher = formattedTeacherName
    ?.split(" ")
    .filter((name) => name.length > 1)
    .join(" ");

  return teacher;
}
