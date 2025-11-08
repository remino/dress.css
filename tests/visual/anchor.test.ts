import { expect, test } from '../setup'

test('scroll position after navigating to targetted anchor on page', async ({
	page,
}) => {
	await page.goto('/tests/anchor/')
	await page.click('a[href="#second"]')
	await page.waitForTimeout(1000)

	const screenshot = await page.screenshot()

	await expect(screenshot).toMatchSnapshot('anchor.png')
})
