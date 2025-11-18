import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ["src/**/*"],
      exclude: ["src/data"],
      reporter: ["text", "json-summary", "json"],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    },
  },
});
