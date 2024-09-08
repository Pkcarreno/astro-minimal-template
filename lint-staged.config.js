export default {
  "**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}": (filenames) => [
    `npx eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")}`,
  ],
  "**/*.(md|mdx|json)": (filenames) =>
    `npx prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")}`,
};
