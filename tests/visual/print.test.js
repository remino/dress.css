import { test, expect } from '@playwright/test'

test('visual regression of all styled elements in print', async ({ page }) => {
	await page.goto('http://localhost:4567/dress.css/elements/')

	const screenshot = await page.screenshot({ fullPage: true })
	await page.emulateMedia({ media: 'print' })

	expect(screenshot).toMatchSnapshot('print.png')
})
