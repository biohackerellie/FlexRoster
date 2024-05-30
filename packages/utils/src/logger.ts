import chalk from "chalk";

export const logger = {
  error(...args: unknown[]) {
    console.log(chalk.red(chalk.bold("[ERROR]"), ...args));
  },
  warn(...args: unknown[]) {
    console.log(chalk.yellow(chalk.bold("[WARN]"), ...args));
  },
  info(...args: unknown[]) {
    console.log(chalk.blue(chalk.bold("[INFO]"), ...args));
  },
  debug(...args: unknown[]) {
    console.log(chalk.magenta(chalk.bold("[DEBUG]"), ...args));
  },
  success(...args: unknown[]) {
    console.log(chalk.green(chalk.bold("[SUCCESS]"), ...args));
  },
};
