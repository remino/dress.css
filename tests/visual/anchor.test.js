import { expect } from '@playwright/test'
import { test } from '../setup.js'

test('scroll position after navigating to targetted anchor on page', async ({
	page,
}) => {
	await page.goto('http://localhost:4567/tests/anchor/')
	await page.click('a[href="#second"]')
	await page.waitForTimeout(1000)

	const screenshot = await page.screenshot()

	expect(screenshot).toMatchSnapshot('anchor.png')
})
