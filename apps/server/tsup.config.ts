import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["src/cli/index.ts"],
  format: ["esm"],
  minify: true,
  target: "esnext",
  outDir: "bin",
});
