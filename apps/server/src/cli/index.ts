import { runCli } from "./cli";
import { logger } from "./utils/logger";
import { renderTitle } from "./utils/renderTitle";

const main = async () => {
  renderTitle();
  await runCli();
  logger.success("yay");
  process.exit(0);
};

main().catch((err) => {
  logger.error("fuck");
});
