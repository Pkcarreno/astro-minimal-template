# astro-minimal-template

Minimal Astro template. Prioritizes efficient development workflows and high-performance tooling. A pure foundation for projects that requires total control. No UI included.

## usage

```bash
pnpm dlx @pkcarreno/create-astro-minimal <project-name>
```

## workflow

Use the following commands to develop and validate the project's state:

| Command         | Description                         |
| :-------------- | :---------------------------------- |
| `pnpm dev`      | Starts local development server     |
| `pnpm build`    | Builds the production-ready site    |
| `pnpm lint`     | Runs static code analysis (linting) |
| `pnpm lint:fix` | Automatically fixes linting errors  |
| `pnpm tsc`      | Runs TypeScript type-checking       |
| `pnpm check`    | Runs Astro diagnostic checks        |

## tools

- Lefthook
- Biome (with Ultracite)
- Commitlint
- Basic GitHub workflow
- TypeScript
- TailwindCSS

## recommendations

- **Use pnpm:** This project is optimized for and intended to be used with `pnpm`.
- **Enable Corepack:** It is recommended to use [Corepack](https://github.com/nodejs/corepack) to manage the package manager version.
- **CI/CD Configuration:** Remember to update the branch names in the GitHub Workflows if your primary branch is named something other than `main` or `master`.

## faq

### Styling issues

Ensure you import the global stylesheet using `import "@/global.css"` within your main layout or the top-level page component.

### Environment variables error in CI

If your Astro configuration relies on environment variables, ensure they are defined in your **GitHub Secrets**. Otherwise, the CI pipeline will fail during the build or check steps.

### CI/CD workflows not triggering

The default workflows are configured to trigger on `main` or `master` branches. If you are using a different branch name, update the `on: push: branches:` section in the `.github/workflows` files.
