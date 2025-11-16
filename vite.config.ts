import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
		cssMinify: false,
		outDir: 'dist',
		assetsDir: '.',
		rollupOptions: {
			input: 'src/dress.css',
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
