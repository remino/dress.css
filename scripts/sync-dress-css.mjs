import { existsSync, copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(root, '..')

const sources = [
	join(projectRoot, 'dist', 'dress.css'),
	join(projectRoot, 'src', 'dress.css'),
]

const destination = join(projectRoot, 'public', 'dress.css', 'dress.css')
mkdirSync(dirname(destination), { recursive: true })

const source = sources.find((path) => existsSync(path))

if (!source) {
	console.error('Unable to find dress.css in dist/ or src/.')
	process.exit(1)
}

copyFileSync(source, destination)
console.log(`Copied ${source} -> ${destination}`)
