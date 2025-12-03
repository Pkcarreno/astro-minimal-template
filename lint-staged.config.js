export default {
	'**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,md,mdx,json}': filenames => [
		`npx @biomejs/biome check --write ${filenames.map(filename => `"${filename}"`).join(' ')}`
	]
}
