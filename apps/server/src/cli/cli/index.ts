import * as p from "@clack/prompts";
import chalk from "chalk";
import { Command } from "commander";

import { getUserPkgManager } from "~/lib/utils/getUserPkgManager";
import { logger } from "~/lib/utils/logger";
import { DEFAULT_APP_NAME } from "../constants";

export const runCli = async () => {
  const mainMenu = await p.select({
    message: "What would you like to do",
    options: [
      { value: 1, label: "(1) Edit Configuration" },
      { value: 2, label: "(2) View Current Configuration" },
      { value: 3, label: "(3) Build & Deploy" },
      { value: 4, label: "(4) Exit" },
    ],
  });

  if (mainMenu === 1) {
    const configMenu = await p.select({
      message: "config options",
      options: [{ value: 1, label: "(1) " }],
    });
  }
};
