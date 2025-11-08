import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: false,
		outDir: 'dist',
		assetsDir: '.',
		rollupOptions: {
			input: resolve(__dirname, 'src/dress.css'),
			output: {
				assetFileNames: 'dress.css',
			},
		},
		target: 'esnext',
	},
	plugins: [
		{
			name: 'remove-js-entry',
			apply: 'build',
			generateBundle(_, bundle) {
				for (const [key, value] of Object.entries(bundle)) {
					if (value.type === 'chunk') {
						delete bundle[key]
					}
				}
			},
		},
	],
})
