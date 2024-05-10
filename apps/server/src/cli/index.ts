import { logger } from "../lib/utils/logger";
import { renderTitle } from "../lib/utils/renderTitle";
import { runCli } from "./cli";

const main = async () => {
  renderTitle();
  await runCli();
  logger.success("yay");
  process.exit(0);
};

main().catch((err) => {
  logger.error("fuck");
});
