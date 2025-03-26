// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import robotsTxt from "astro-robots-txt";

// For type-safe environment variables, check this
// https://docs.astro.build/en/guides/environment-variables/#type-safe-environment-variables

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
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
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    favicons(),
    robotsTxt(),
    sitemap(),
  ],
});
