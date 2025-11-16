import { defineConfig } from 'astro/config'
import remarkCustomHeadingId from 'remark-custom-heading-id'
import remarkDeflist from 'remark-deflist'
import remarkToc from 'remark-toc'
import rehypeExternalLinks from 'rehype-external-links'
import nginxConfig from './src/integrations/nginxConfig.ts'
import removeFiles from './src/integrations/removeFiles.ts'
import { siteConfig } from './src/config/site.ts'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import remarkStripReadmeHero from './src/plugins/remarkStripReadmeHero.ts'
import rehypeWrapCodeBlocks from './src/plugins/rehypeWrapCodeBlocks.ts'

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
			rehypeWrapCodeBlocks,
		],
		remarkPlugins: [
			remarkCustomHeadingId,
			remarkDeflist,
			remarkToc,
			remarkStripReadmeHero,
		],
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
		css: {
			transformer: 'postcss',
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
			CSS: false,
			HTML: {
				'html-minifier-terser': {
					collapseWhitespace: true,
					conservativeCollapse: false,
					removeComments: true,
					removeRedundantAttributes: true,
				},
			},
			SVG: false,
		}),
		compressor(),
	],
})
