import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
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
	css: {
		transformer: 'postcss',
	},
})
