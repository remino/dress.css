import { defineConfig } from 'astro/config'
import remarkCustomHeadingId from 'remark-custom-heading-id'
import remarkDeflist from 'remark-deflist'
import remarkToc from 'remark-toc'
import rehypeExternalLinks from 'rehype-external-links'
import nginxConfig from './src/integrations/nginxConfig.ts'
import removeFiles from './src/integrations/removeFiles.ts'
import { siteConfig } from './src/config/site.ts'
import compress from 'astro-compress'

export default defineConfig({
	output: 'static',
	outDir: './deploy/public',
	build: {
		assets: 'dress.css',
	},
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
			assetsInlineLimit: 0,

			rollupOptions: {
				input: {
					docs: 'src/scripts/docs.ts',
					playground: 'src/scripts/playground.ts',
				},
				output: {
					inlineDynamicImports: false,
				},
			},
		},
	},
	integrations: [
		nginxConfig({
			template: 'src/nginx.conf.ejs',
			output: 'nginx/dress.css.conf',
		}),
		removeFiles({
			patterns: ['index.html', 'tests'],
		}),
		compress({
			HTML: {
				'html-minifier-terser': {
					collapseWhitespace: true,
					conservativeCollapse: false,
					removeComments: true,
					removeRedundantAttributes: true,
				},
			},
		}),
	],
})
