import { setTimeout } from "node:timers/promises";
import * as p from "@clack/prompts";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { Command } from "commander";

import { getUserPkgManager } from "~/lib/utils/getUserPkgManager";
import { logger } from "~/lib/utils/logger";
import { DEFAULT_APP_NAME } from "../constants";
import { editConfigurationMenu } from "./editConfig";

function onCancel() {
  p.cancel("Operation Cancelled. 😒");
  process.exit(0);
}

export async function runCli() {
  const s = p.spinner();

  await setTimeout(1000);
  p.intro(`Welcome to the ${chalk.blue.bold(DEFAULT_APP_NAME)} CLI! 🚀`);

  const mainMenu = await p.select({
    message: "What would you like to do",
    options: [
      { value: 1, label: "(1) Edit Configuration" },
      { value: 3, label: "(2) Build & Deploy" },
      { value: 4, label: "(3) Exit" },
    ],
  });

  switch (mainMenu) {
    case 1:
      await editConfigurationMenu();

    case 2:
      await onCancel();
      break;
    case 3:
      onCancel();
      break;
    default:
      break;
  }

  p.outro("Bye Felicia! 😏 👋");
  // process.exit(0);
}
