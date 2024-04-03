export async function register() {
  if (process.env.NEXT_RUNETIME === "nodejs") {
    await require("pino");
    await require("next-logger");
  }
}
