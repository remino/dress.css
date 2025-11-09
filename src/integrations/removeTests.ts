import { rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import type { AstroIntegration } from 'astro'

export default function removeTests(): AstroIntegration {
	return {
		name: 'remove-tests-from-build',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const outputDir = fileURLToPath(dir)
				const testsDir = path.join(outputDir, 'tests')
				try {
					await rm(testsDir, { recursive: true, force: true })
					logger.info('removed tests directory from build output')
				} catch (error) {
					logger.warn(`could not remove tests directory: ${error}`)
				}
			},
		},
	}
}
