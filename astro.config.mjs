import { defineConfig } from 'astro/config'
import remarkCustomHeadingId from 'remark-custom-heading-id'
import remarkToc from 'remark-toc'
import nginxConfig from './src/integrations/nginxConfig.ts'
import removeTests from './src/integrations/removeTests.ts'

export default defineConfig({
	output: 'static',
	outDir: './deploy/public',
	devToolbar: {
		enabled: process.env.ASTRO_DEV_TOOLBAR_ENABLED !== '0',
	},
	build: {
		exclude: ['/tests/*', '/tests/*/*'],
	},
	markdown: {
		rehypePlugins: [],
		remarkPlugins: [
			remarkCustomHeadingId,
			[remarkToc, { heading: 'Table of Contents' }],
		],
	},
	vite: {
		build: {
			assetsDir: 'assets',
		},
	},
	integrations: [
		nginxConfig({
			template: 'src/nginx.conf.ejs',
			output: 'nginx/dress.css.conf',
		}),
		removeTests(),
	],
})
