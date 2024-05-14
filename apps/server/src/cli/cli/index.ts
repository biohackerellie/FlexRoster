import { setTimeout } from "node:timers/promises";
import * as p from "@clack/prompts";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { Command } from "commander";
import ora, { oraPromise } from "ora";

import { getUserPkgManager } from "~/lib/utils/getUserPkgManager";
import { logger } from "~/lib/utils/logger";
import { DEFAULT_APP_NAME } from "../constants";
import { editConfigurationMenu } from "./editConfig";

function onCancel() {
  p.cancel("Operation Cancelled. 😒");
  process.exit(0);
}

export async function runCli() {
  let shouldContinue = true;

  p.intro(`Welcome to the ${chalk.blue.bold(DEFAULT_APP_NAME)} CLI! 🚀`);

  while (shouldContinue) {
    const mainMenu = await p.select({
      message: "What would you like to do",
      options: [
        { value: 1, label: "(1) Edit Configuration" },
        { value: 2, label: "(2) Check for Git Updates" },

        { value: 3, label: "(3) Build & Deploy" },
        { value: 4, label: "(4) Exit" },
        { value: 5, label: "(5) Testing" },
      ],
    });

    switch (mainMenu) {
      case 1:
        await editConfigurationMenu();
        break;
      case 2:
        const s = ora("Checking for updates...").start();
        await updates();
        s.succeed("Updates checked!");
        return true;

      case 3:
        const spinner = ora("Building and deploying...").start();
        await build();
        spinner.succeed("all done! 🚀");
        return true;
      case 4:
        shouldContinue = false;
        break;
      case 5:
        break;
      default:
        break;
    }
  }
  p.outro("Bye Felicia! 😏 👋");
  process.exit(0);
}

async function configMenu() {
  let continueConfig = true;
  while (continueConfig) {
    await p.select({
      message: "update config",
      options: [
        { value: 1, label: "Update Config" },
        { value: 2, label: "Exit" },
      ],
    });
  }
}

async function updates() {
  const update = Bun.spawn(["bun", "src/cli/installers/update.ts"]);
  const text = await new Response(update.stdout).text();
  logger.info(text);
}

async function build() {
  const builder = Bun.spawn(["bun", "src/cli/installers/build.ts"]);
  const text = await new Response(builder.stdout).text();
  logger.info(text);
}
