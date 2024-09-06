import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginAstro from "eslint-plugin-astro";
import tailwind from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["node_modules/*", "dist/*"],
  },
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    files: ["src/**/*.{ts,tsx,js}", "./*.{ts,tsx,js}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  ...tailwind.configs["flat/recommended"],
  {
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: "tailwind.config.mjs",
      },
    },
    rules: {
      "tailwindcss/classnames-order": [
        "warn",
        {
          officialSorting: true,
        },
      ],
      "tailwindcss/no-custom-classname": "off",
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
);
