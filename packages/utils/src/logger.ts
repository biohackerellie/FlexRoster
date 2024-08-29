import chalk from "chalk";

// export const logger = {
//   error(...args: unknown[]) {
//     console.error(chalk.red(chalk.bold("[ERROR]"), ...args));
//   },
//   warn(...args: unknown[]) {
//     console.log(chalk.yellow(chalk.bold("[WARN]"), ...args));
//   },
//   info(...args: unknown[]) {
//     console.log(chalk.blue(chalk.bold("[INFO]"), ...args));
//   },
//   debug(...args: unknown[]) {
//     console.log(chalk.magenta(chalk.bold("[DEBUG]"), ...args));
//   },
//   success(...args: unknown[]) {
//     console.log(chalk.green(chalk.bold("[SUCCESS]"), ...args));
//   },
// };

// export type Logger = typeof logger;
//

export class Logger {
  caller: string;
  constructor(caller: string) {
    this.caller = caller;
  }

  error(...args: unknown[]) {
    console.error(
      chalk.red(chalk.bold("[ERROR]")),
      chalk.dim(`[${this.caller}]`),
      ...args,
    );
  }

  warn(...args: unknown[]) {
    console.log(
      chalk.yellow(chalk.bold("[WARN]")),
      chalk.dim(`[${this.caller}]`),
      ...args,
    );
  }

  info(...args: unknown[]) {
    console.log(
      chalk.blue(chalk.bold("[INFO]")),
      chalk.dim(`[${this.caller}]`),
      ...args,
    );
  }

  debug(...args: unknown[]) {
    console.log(
      chalk.magenta(chalk.bold("[DEBUG]")),
      chalk.dim(`[${this.caller}]`),
      ...args,
    );
  }

  success(...args: unknown[]) {
    console.log(
      chalk.green(chalk.bold("[SUCCESS]")),
      chalk.dim(`[${this.caller}]`),
      ...args,
    );
  }
}


export const logger = new Logger("Logger");



