#!/usr/bin/env node

import { spawn } from 'node:child_process'
import { access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { resolve } from 'node:path'
import { extractReleaseNotes } from './release-changelog.mjs'
import { readFile } from 'node:fs/promises'

const root = resolve(import.meta.dirname, '..')
const assetPath = resolve(root, 'dist/dress.css')
const changelogPath = resolve(root, 'CHANGELOG.md')

const runGh = (args) =>
	new Promise((resolvePromise, rejectPromise) => {
		const child = spawn('gh', args, {
			cwd: root,
			stdio: 'inherit',
		})

		child.on('error', rejectPromise)
		child.on('exit', (code) => {
			if (code === 0) {
				resolvePromise()
				return
			}

			rejectPromise(new Error(`gh exited with code ${code ?? 'unknown'}.`))
		})
	})

const run = async ([command, version]) => {
	if (command !== 'create' || !version) {
		throw new Error('Usage: release-github.mjs create <version>')
	}

	await access(assetPath, constants.R_OK)
	const changelog = await readFile(changelogPath, 'utf8')
	const notes = extractReleaseNotes(changelog, version)

	await runGh([
		'release',
		'create',
		`v${version}`,
		assetPath,
		'--title',
		`v${version}`,
		'--notes',
		notes,
	])
}

if (import.meta.url === `file://${process.argv[1]}`) {
	run(process.argv.slice(2)).catch((error) => {
		console.error(error.message)
		process.exitCode = 1
	})
}
