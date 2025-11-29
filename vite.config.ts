import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const layers = [
	'variables',
	'base',
	'props',
	'inlines',
	'focus',
	'links',
	'blocks',
	'sections',
	'headings',
	'images',
	'lists',
	'tables',
	'forms',
	'code',
	'animation',
	'popups',
	'print',
]

const input = {
	dress: resolve(__dirname, 'src/dress.css'),
}

const layerDir = resolve(__dirname, 'src/styles/dress')

for (const layer of layers) {
	input[`layers/${layer}`] = resolve(layerDir, `${layer}.css`)
}

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
		cssMinify: false,
		outDir: 'dist',
		assetsDir: '.',
		rollupOptions: {
			input,
			output: {
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === 'dress') return 'dress.css'
					if (assetInfo.name?.startsWith('layers/')) {
						return assetInfo.name.endsWith('.css')
							? assetInfo.name
							: `${assetInfo.name}.css`
					}
					return assetInfo.name ?? 'style.css'
				},
			},
		},
		target: 'esnext',
	},
	css: {
		transformer: 'postcss',
	},
})
