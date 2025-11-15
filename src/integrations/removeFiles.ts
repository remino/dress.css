import { rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fg from 'fast-glob'
import type { AstroIntegration } from 'astro'

interface RemoveFilesOptions {
	patterns: string[]
}

export default function removeFiles({
	patterns,
}: RemoveFilesOptions): AstroIntegration {
	return {
		name: 'remove-files-from-build',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const outputDir = fileURLToPath(dir)

				try {
					const files = await fg(patterns, {
						cwd: outputDir,
						dot: true,
						absolute: true,
					})

					await Promise.all(
						files.map(async (file) => {
							await rm(file, { recursive: true, force: true })
							logger.info(`removed ${path.relative(outputDir, file)}`)
						}),
					)
				} catch (error) {
					logger.warn(
						`could not remove files: ${
							error instanceof Error ? error.message : String(error)
						}`,
					)
				}
			},
		},
	}
}
