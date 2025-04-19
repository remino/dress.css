import { test, expect } from '@playwright/test'

test('visual regression of all styled elements on screen', async ({ page }) => {
	await page.goto('http://localhost:4567/dress.css/elements/')

	const screenshot = await page.screenshot({ fullPage: true })

	expect(screenshot).toMatchSnapshot('elements.png')
})
