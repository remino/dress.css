import { defineConfig } from 'astro/config'
import remarkCustomHeadingId from 'remark-custom-heading-id'
import remarkToc from 'remark-toc'

export default defineConfig({
	output: 'static',
	outDir: './deploy/public',
	devToolbar: {
		enabled: process.env.ASTRO_DEV_TOOLBAR_ENABLED !== '0',
	},
	markdown: {
		rehypePlugins: [],
		remarkPlugins: [remarkCustomHeadingId, [remarkToc, { heading: 'Table of Contents' }]],
	},
	vite: {
		build: {
			assetsDir: 'assets',
		},
	},
})
