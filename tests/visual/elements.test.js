import { test, expect } from '@playwright/test'
import { dirname } from 'path'
import { chromium } from 'playwright'
import { fileURLToPath, pathToFileURL } from 'url'

test('visual regression', async ({ page }) => {
	const thisFile = fileURLToPath(import.meta.url)
	const snapshotsDir = `${dirname(thisFile)}/snapshots`

	await page.goto('http://localhost:4567/dress.css/elements/')

	const screenshot = await page.screenshot({ fullPage: true })

	expect(screenshot).toMatchSnapshot(`elements.png`)
})
