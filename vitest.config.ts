import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./test", "./**/*.{test,spec}.ts(x)?"],
    exclude: ["**/node_modules/**", "**/dist/**", "./temp/**"],
  },
});
