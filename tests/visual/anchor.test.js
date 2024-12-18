import { test, expect } from '@playwright/test'
import { dirname } from 'path'
import { chromium } from 'playwright'
import { fileURLToPath, pathToFileURL } from 'url'

test('scroll position after navigating to targetted anchor on page', async ({
	page,
}) => {
	const thisFile = fileURLToPath(import.meta.url)
	const snapshotsDir = `${dirname(thisFile)}/snapshots`

	await page.goto('http://localhost:4567/dress.css/elements/')
	await page.click('a[href="#links"]')
	await page.waitForTimeout(1000)

	const screenshot = await page.screenshot()

	expect(screenshot).toMatchSnapshot(`anchor.png`)
})
