import { createEnv } from "@t3-oss/env-core";
// import { z } from "astro/zod";

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    // PUBLIC_ENDPOINT: z.string().url(),
  },
  runtimeEnv: process.env,
});
