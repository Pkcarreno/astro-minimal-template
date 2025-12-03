// @ts-check
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import favicons from 'astro-favicons'
import robots from 'astro-robots'

import { config } from './src/config'

// For type-safe environment variables, check this
// https://docs.astro.build/en/guides/environment-variables/#type-safe-environment-variables

// https://astro.build/config
export default defineConfig({
	site: config.site,
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
		}
	},
	build: {
		inlineStylesheets: 'always'
	},
	compressHTML: true,
	prefetch: true,
	integrations: [favicons(), robots(), sitemap()],
	vite: {
		plugins: [tailwindcss()]
	}
})
