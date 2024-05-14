import type { BunFile } from "bun";
import * as p from "@clack/prompts";
import chalk from "chalk";
import ora, { oraPromise } from "ora";
import { set } from "zod";

import { asc, db, desc, schema } from "@local/db";
import { ConfigSchema } from "@local/validators";

import {
  excludedTeachers,
  isRedisCluster,
  preferredNames,
  secretaries,
  semesterClassName,
} from "~/config";
import {
  addStringsToArray,
  CreateTemplateConfig,
  CurrentConfigString,
  removeItemsFromArray,
} from "~/lib/utils";
import { logger } from "~/lib/utils/logger";

function onCancel() {
  return;
}

type PreferredName = {
  givenName: string;
  preferredName: string;
} | null;

export async function editConfigurationMenu() {
  const configFile = Bun.file("src/config/config.ts");
  const exists = await configFile.exists();
  let shouldContinue = true;
  const worker = createWorker("updateConfig.ts");
  let defaultOptions: ConfigSchema = {
    secretaries: null,
    preferredNames: null,
    excludedTeachers: null,
    semesterClassName: null,
    isRedisCluster: true,
    createdAt: new Date(),
  };

  if (exists) {
    defaultOptions = {
      secretaries: secretaries,
      preferredNames: preferredNames,
      excludedTeachers: excludedTeachers,
      semesterClassName: semesterClassName,
      isRedisCluster: isRedisCluster,
      createdAt: new Date(),
    };
  }
  try {
    while (shouldContinue) {
      const configMenu = await p.select({
        message: chalk.bold.cyan("Edit Configuration."),
        options: [
          { value: 1, label: "(1) Teacher Exclusions" },
          { value: 2, label: "(2) Secretaries" },
          { value: 3, label: "(3) Preferred Names" },
          { value: 4, label: "(4) Semester Class Name" },
          { value: 5, label: "(5) Save Changes" },
          { value: 6, label: "(6) View Current Config" },
          { value: 7, label: "(7) Exit" },
        ],
      });
      switch (configMenu) {
        case 1:
          const teacherExclusions = await p.select({
            message: "Edit Teacher Exclusions",
            options: [
              { value: 1, label: "(1) Add Teacher" },
              { value: 2, label: "(2) Remove Teacher" },
              { value: 3, label: "(3) Exit" },
            ],
          });
          switch (teacherExclusions) {
            case 1:
              const addTeacher = await p.text({
                message: "Enter the teacher to add, separated by commas",
                validate: (value) => {
                  if (value.length === 0) return "Please enter a teacher";
                },
                defaultValue: "",
              });
              addStringsToArray({
                items: defaultOptions.excludedTeachers!,
                itemsToAdd: [addTeacher as string],
              });
              break;
            case 2:
              const removeTeacher = await p.select({
                message: "Select a teacher to remove",
                options: defaultOptions.excludedTeachers!.map((teacher) => ({
                  value: teacher,
                  label: teacher,
                })),
              });
              defaultOptions.excludedTeachers = removeItemsFromArray({
                items: defaultOptions.excludedTeachers!,
                itemsToRemove: [removeTeacher as string],
              });
              break;
            default:
              break;
          }
          break;
        case 2:
          const secretariesMenu = await p.select({
            message: "Edit Secretaries",
            options: [
              { value: 1, label: "(1) Add Secretary" },
              { value: 2, label: "(2) Remove Secretary" },
              { value: 3, label: "(3) Exit" },
            ],
          });
          switch (secretariesMenu) {
            case 1:
              const addSecretary = await p.text({
                message: "Enter the secretary to add",
                validate: (value) => {
                  if (value.length === 0)
                    return "Please enter a secretary or ctrl+c to exit";
                },
                defaultValue: "",
              });
              addStringsToArray({
                items: defaultOptions.secretaries!,
                itemsToAdd: [addSecretary as string],
              });
              break;
            case 2:
              const removeSecretary = await p.select({
                message: "Select a secretary to remove",
                options: defaultOptions.secretaries!.map((secretary) => ({
                  value: secretary,
                  label: secretary,
                })),
              });
              defaultOptions.secretaries = removeItemsFromArray({
                items: defaultOptions.secretaries!,
                itemsToRemove: [removeSecretary as string],
              });
              break;
            default:
              break;
          }
          break;
        case 3:
          const preferredNamesMenu = await p.select({
            message: "Edit Preferred Names",
            options: [
              { value: 1, label: "(1) Add Preferred Name" },
              { value: 2, label: "(2) Remove Preferred Name" },
              { value: 3, label: "(3) Exit" },
            ],
          });
          switch (preferredNamesMenu) {
            case 1:
              const addGivenName = await p.text({
                message: "Enter the given name",
                validate: (value) => {
                  if (value.length === 0)
                    return "Please enter a given name or ctrl+c to exit";
                },
                defaultValue: "",
              });
              const addPreferredName = await p.text({
                message: "Enter the preferred name",
                validate: (value) => {
                  if (value.length === 0)
                    return "Please enter a preferred name or ctrl+c to exit";
                },
                defaultValue: "",
              });
              defaultOptions.preferredNames?.push({
                givenName: addGivenName as string,
                preferredName: addPreferredName as string,
              });
              break;
            case 2:
              const removePreferredName = await p.select({
                message: "Select a preferred name to remove",
                options: defaultOptions.preferredNames!.map((name) => ({
                  value: name.givenName,
                  label: name.givenName,
                })),
              });
              defaultOptions.preferredNames =
                defaultOptions.preferredNames?.filter(
                  (preferredName: PreferredName) =>
                    preferredName?.givenName !== removePreferredName,
                )!;
              break;
            default:
              break;
          }
          break;
        case 4:
          const semesterClassName = await p.text({
            message: "Enter the semester class name",
            validate: (value) => {
              if (value.length === 0)
                return "Please enter a semester class name";
            },
            defaultValue: "",
          });
          defaultOptions.semesterClassName = semesterClassName as string;
          break;
        case 5:
          const s = p.spinner();
          s.start("Saving changes...");
          worker.postMessage(defaultOptions);
          s.stop();
          break;
        case 6:
          logger.info(CurrentConfigString(defaultOptions));
          break;
        default:
          shouldContinue = false;
      }
    }
  } catch (err) {
    logger.error("error in config menu", err);
  }
}

function createWorker(fileName: string) {
  const url = new URL(fileName, import.meta.url).href;
  const worker = new Worker(url);

  worker.onmessage = (event) => {
    logger.success(event.data);
  };
  worker.onerror = (err) => {
    logger.error(err);
    worker.terminate();
  };
  return worker;
}
