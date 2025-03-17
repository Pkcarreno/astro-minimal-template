// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

await import("./src/env/client");
await import("./src/env/server");

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
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
    robotsTxt(),
    sitemap(),
  ],
});
