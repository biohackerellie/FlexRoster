import { DefaultConfigSchema } from "@local/validators";

import "./config.json";

import fs from "fs-extra";

// parse config.json file with zod validator
export default function Config() {
  const file = fs.readFileSync("config.json");
  const config = DefaultConfigSchema.parse(file);
  return config;
}
