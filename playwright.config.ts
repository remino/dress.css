import { defineConfig } from '@playwright/test'
import net from 'node:net'

const HOST = '127.0.0.1'
const PREFERRED_PORT = 4321

const port = Number.parseInt(
	process.env.PLAYWRIGHT_TEST_PORT ??
		(process.env.PLAYWRIGHT_TEST_PORT = `${await resolvePlaywrightPort()}`),
	10,
)
const baseURL = `http://${HOST}:${port}`

async function resolvePlaywrightPort() {
	if (!(await isPortOpen(PREFERRED_PORT))) {
		return PREFERRED_PORT
	}

	return await findAvailablePort()
}

async function isPortOpen(port: number) {
	return await new Promise<boolean>((resolve) => {
		const socket = net.createConnection({ host: HOST, port })
		socket.once('connect', () => {
			socket.end()
			resolve(true)
		})
		socket.once('error', () => resolve(false))
	})
}

async function findAvailablePort() {
	return await new Promise<number>((resolve, reject) => {
		const server = net.createServer()
		server.unref()
		server.once('error', reject)
		server.listen(0, HOST, () => {
			const address = server.address()
			if (!address || typeof address === 'string') {
				server.close(() => reject(new Error('Could not resolve free port')))
				return
			}

			server.close((err) => {
				if (err) {
					reject(err)
					return
				}

				resolve(address.port)
			})
		})
	})
}

export default defineConfig({
	testDir: './tests/visual',
	timeout: 30_000,
	retries: process.env.CI ? 1 : 0,
	fullyParallel: true,
	workers: 16,
	use: {
		baseURL,
		viewport: { width: 400, height: 400 },
		deviceScaleFactor: 2,
	},
	webServer: {
		command: `npm run dev -- --host ${HOST} --port ${port}`,
		url: baseURL,
		reuseExistingServer: false,
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
