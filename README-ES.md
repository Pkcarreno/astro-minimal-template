[English](./README.md)

# Astro Minimal Template

Otra plantilla de Astro.js. Sin páginas por defecto ni componentes de UI, solo configuración base para mejorar la experiencia de desarrollo y que puedas empezar tus proyectos sin preocuparte por pasos extras.

## Características principales

- [TailwindCSS](https://tailwindcss.com/) para el estilizado de la página.
- [T3 Env](https://env.t3.gg/) para gestionar variables de entorno.
- TypeScript, ESLint y Prettier para mejorar la calidad del código y prevenir bugs a lo largo del proyecto.
- Husky y Lint-Staged para ejecutar automatizaciones en ciertos comandos de Git y forzar seguir estándares.
- Flujos de GitHub Actions para automatizar la gestión del proyecto.
- Librerías de ayuda mínimas
  - [astro-seo](https://github.com/jonasmerlin/astro-seo) para una implementación sencilla de las meta etiquetas importantes.
  - [astro-font](https://github.com/rishi-raj-jain/astro-font/) para importar las fuentes desde Google Font u otro CDN fácilmente.
- Componente genérico de Link basado en [astro-link](https://github.com/JulianCataldo/web-garden/tree/develop/components/Link).
- La integración de Astro.js Sitemap que genera un mapa de tu página al compilarla.

## Motivación

Al iniciar un proyecto siempre hay que dedicar tiempo a instalar y configurar las librerías que te ayudan a gestionar el mismo antes de siquiera lidiar con la UI y la lógica de negocio. Entonces decidí crear esta plantilla con todo lo básico para poder comenzar más rápido los proyectos. Está fuertemente inspirado en [la plantilla de React Native de Obytes](https://github.com/obytes/react-native-template-obytes/tree/master), el cual recomiendo visitar aunque tu proyecto no sea de React Native.

## Consideraciones

El proyecto está pensado para ser usado con el gestor de paquetes `pnpm`.

## Instalación

Ejecute el comando:

```bash
pnpm create @pkcarreno/create-astro-minimal@latest
```

Y siga las instrucciones.

## Licencia

[MIT](./LICENSE)
