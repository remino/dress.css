import { defineConfig } from '@playwright/test'

export default defineConfig({
	testDir: './tests/visual',
	timeout: 30_000,
	retries: process.env.CI ? 1 : 0,
	fullyParallel: true,
	workers: 16,
	use: {
		baseURL: 'http://localhost:4321',
		viewport: { width: 400, height: 400 },
	},
	webServer: {
		command: 'npm run dev -- --host 127.0.0.1 --port 4321',
		port: 4321,
		reuseExistingServer: !process.env.CI,
		stdout: 'pipe',
		stderr: 'pipe',
		timeout: 120_000,
		env: {
			ASTRO_DEV_TOOLBAR_ENABLED: '0',
		},
	},
	projects: [
		{
			name: 'chromium',
		},
	],
})
