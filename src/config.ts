export const config = {
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://www.demo.com"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "/",
};
