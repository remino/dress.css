import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import ejs from 'ejs'
import type { AstroIntegration } from 'astro'

interface Options {
	template?: string
	output?: string
	variables?: Record<string, unknown>
}

const DEFAULT_TEMPLATE = 'src/nginx.conf.ejs'
const DEFAULT_OUTPUT = 'nginx/dress.css.conf'

export default function nginxConfig(options: Options = {}): AstroIntegration {
	return {
		name: 'nginx-config',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const publicDir = fileURLToPath(dir)
				const deployDir = path.resolve(publicDir, '..')
				const projectRoot = path.resolve(deployDir, '..')

				const templatePath = path.resolve(
					projectRoot,
					options.template ?? DEFAULT_TEMPLATE,
				)

				const shareImage = await findShareImage(publicDir)

				const template = await readFile(templatePath, 'utf8')
				const rendered = ejs.render(
					template,
					{
						shareImage,
						...(options.variables ?? {}),
					},
					{
						filename: templatePath,
					},
				)

				const outputRelative = options.output ?? DEFAULT_OUTPUT
				const outputPath = path.join(deployDir, outputRelative)

				await mkdir(path.dirname(outputPath), { recursive: true })
				await writeFile(outputPath, rendered, 'utf8')

				logger.info(
					`wrote nginx config → ${path.relative(deployDir, outputPath)}`,
				)
			},
		},
	}
}

async function findShareImage(publicDir: string) {
	try {
		const dressDir = path.join(publicDir, 'dress.css')
		const entries = await readdir(dressDir)
		const match = entries.find(
			(entry) => entry.startsWith('share.') && entry.endsWith('.png'),
		)
		return match ? `/dress.css/${match}` : null
	} catch {
		return null
	}
}
