import { defineConfig } from 'astro/config'
import remarkCustomHeadingId from 'remark-custom-heading-id'
import remarkDeflist from 'remark-deflist'
import remarkToc from 'remark-toc'
import rehypeExternalLinks from 'rehype-external-links'
import nginxConfig from './src/integrations/nginxConfig.ts'
import removeTests from './src/integrations/removeTests.ts'
import { siteConfig } from './src/config/site.ts'

export default defineConfig({
	output: 'static',
	outDir: './deploy/public',
	devToolbar: {
		enabled: process.env.ASTRO_DEV_TOOLBAR_ENABLED !== '0',
	},
	markdown: {
		syntaxHighlight: 'prism',
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['noopener', 'noreferrer'],
					test: ({ properties: { href } }) =>
						/^https?:\/\//.test(href) && !href.startsWith(siteConfig.url),
				},
			],
		],
		remarkPlugins: [remarkCustomHeadingId, remarkDeflist, remarkToc],
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
