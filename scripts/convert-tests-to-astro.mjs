import { globSync } from 'glob'
import { readFileSync, writeFileSync, unlinkSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'

const files = globSync('src/pages/tests/**/*.html', { nodir: true })
const layoutPath = resolve('src/layouts/TestMainLayout.astro')

for (const file of files) {
	const html = readFileSync(file, 'utf8').trim()
	const base = file.replace(/\.html$/, '')
	const relLayout = relative(dirname(resolve(file)), layoutPath).replace(
		/\\/g,
		'/',
	)
	const title =
		base
			.split('/')
			.pop()
			?.replace(/[-_]/g, ' ')
			.replace(/\b\w/g, (c) => c.toUpperCase()) ?? 'dress.css test'
	const content = `---\nimport TestMainLayout from '${relLayout}'\n---\n\n<TestMainLayout title="${title}">\n${html}\n</TestMainLayout>\n`
	writeFileSync(`${base}.astro`, content)
	unlinkSync(file)
	console.log('Converted', file)
}
