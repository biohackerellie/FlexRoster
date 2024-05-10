import chalk from "chalk";
import chalkAnimation from "chalk-animation";

import { logger } from "../lib/utils/logger";
import { renderTitle } from "../lib/utils/renderTitle";
import { runCli } from "./cli";
import { DEFAULT_APP_NAME } from "./constants";

const main = async () => {
  console.clear();
  renderTitle();

  while (true) {
    await runCli();
  }
};

main().catch((err) => {
  logger.error("fuck 💩");
});
