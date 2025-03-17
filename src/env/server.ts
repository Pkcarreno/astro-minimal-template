import { createEnv } from "@t3-oss/env-core";
// import { z } from "astro/zod";

export const env = createEnv({
  server: {
    // DB_URL: z.string().url(),
  },
  runtimeEnv: process.env,
});
