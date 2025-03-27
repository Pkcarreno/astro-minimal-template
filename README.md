[Spanish](./README-ES.md)

# Astro Minimal Template

Yet another Astro.js template. No default pages or UI components, just base config to improve the developer experience so you can start your projects without worrying about extra steps.

## Features

- [TailwindCSS](https://tailwindcss.com/) for styling.
- [T3 Env](https://env.t3.gg/) for env.
- TypeScript, ESLint and Prettier to improve code quality and prevent bugs throughout the project.
- Husky and Lint-Staged to run automations on certain Git commands and force following standards.
- GitHub Actions workflows to automate project management.
- Minimal helper libraries:
  - [astro-seo](https://github.com/jonasmerlin/astro-seo) for easy implementation of important meta tags.
  - [astro-font](https://github.com/rishi-raj-jain/astro-font/) to import fonts from Google Font or other CDN easily.
- Generic Link Component based on [astro-link](https://github.com/JulianCataldo/web-garden/tree/develop/components/Link).
- Astro.js Sitemap integration

## Motivation

When starting a project, you always have to spend time installing and setting up the libraries that help manage the project before even dealing with the UI and business logic. So I created this template with all the basics to help you get started faster. It is strongly inspired by [Obytes's React Native template](https://github.com/obytes/react-native-template-obytes/tree/master), which I recommend visiting even if your project is not React Native.

## Considerations

The project is intended to be used with the `pnpm` package manager.

## Installation

Run the command:

```bash
pnpm create @pkcarreno/create-astro-minimal@latest
```

And follow the instructions.

## License

[MIT](./LICENSE)
