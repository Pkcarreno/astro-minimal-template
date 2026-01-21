// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const site = "https://example.org";

// https://astro.build/config
export default defineConfig({
  site,
  env: {
    schema: {
      // API_URL: envField.string({
      //   context: "client",
      //   access: "public",
      // }),
      // PORT: envField.number({
      //   context: "server",
      //   access: "public",
      //   default: 4321,
      // }),
      // API_SECRET: envField.string({ context: "server", access: "secret" }),
    },
  },
  compressHTML: true,
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
