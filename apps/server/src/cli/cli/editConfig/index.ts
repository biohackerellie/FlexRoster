import * as p from "@clack/prompts";
import chalk from "chalk";

import {
  excludedTeachers,
  isRedisCluster,
  preferredNames,
  secretaries,
  semesterClassName,
} from "~/config";

export async function editConfigurationMenu() {
  const configMenu = await p.select({
    message: "config options",
    options: [
      { value: 1, label: `(1) ${chalk.blue.bold("Excluded Teachers")}` },
      { value: 2, label: `(2) ${chalk.blue.bold("Preferred Names")}` },
      { value: 3, label: `(3) ${chalk.blue.bold("Secretaries")}` },
      { value: 4, label: `(4) ${chalk.blue.bold("Semester Class Name")}` },
      { value: 5, label: `(5) ${chalk.blue.bold("Redis Cluster")}` },
      { value: 6, label: `(6) ${chalk.red.bold("Back")}` },
    ],
  });
  if (configMenu === 1) {
    const excludedTeachersMenu = await p.group({
      teachers: () =>
        p.multiselect({
          message: "Would you like to remove any teachers? 🤔 ",
          options: excludedTeachers.map((teacher) => {
            return { value: teacher, label: teacher };
          }),
        }),
      addTeachers: () =>
        p.text({
          message: "Would you like to add any exclusions?",
        }),
    });
  }
}
