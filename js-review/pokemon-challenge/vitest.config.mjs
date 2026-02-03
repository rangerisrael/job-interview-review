import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true, // Use global test APIs (no imports needed)
    environment: "node", // or 'jsdom' for browser-like environment
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
    verbose: true,
    // reporters: ["verbose"],
  },
});
