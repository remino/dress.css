import type { Locator, Page } from '@playwright/test'
import { expect, test } from '../setup'

const waitForStableUi = async (page: Page) => {
	await page.evaluate(async () => {
		await Promise.all([
			document.fonts.ready,
			...Array.from(document.getAnimations()).map((anim) => anim.finished),
		])
	})
}

const loadExample = async (page: Page, path: string) => {
	await page.goto(path, { waitUntil: 'domcontentloaded' })
	await waitForStableUi(page)
}

const captureState = async ({
	locator,
	name,
}: {
	locator: Locator
	name: string
}) => {
	const screenshot = await locator.screenshot()
	expect(screenshot).toMatchSnapshot(`${name}.png`)
}

const moveMouseAway = async (page: Page) => {
	await page.mouse.move(0, 0)
}

test.describe('interactions', () => {
	test('button states', async ({ page }) => {
		await loadExample(page, '/tests/elements/buttons/')
		const button = page.getByRole('button', { name: 'Submit' })

		await captureState({ locator: button, name: 'button-default' })

		await button.focus()
		await captureState({ locator: button, name: 'button-focus' })

		await moveMouseAway(page)
		await button.hover()
		await captureState({ locator: button, name: 'button-hover' })

		const box = await button.boundingBox()
		if (box) {
			await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
			await page.mouse.down()
			await captureState({ locator: button, name: 'button-active' })
			await page.mouse.up()
		}
	})

	test('link states', async ({ page }) => {
		await loadExample(page, '/tests/elements/hyperlink/')
		const link = page.getByRole('link', { name: 'Click me' })

		await captureState({ locator: link, name: 'link-default' })

		await link.focus()
		await captureState({ locator: link, name: 'link-focus' })

		await moveMouseAway(page)
		await link.hover()
		await captureState({ locator: link, name: 'link-hover' })

		const box = await link.boundingBox()
		if (box) {
			await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
			await page.mouse.down()
			await captureState({ locator: link, name: 'link-active' })
			await page.mouse.up()
		}
	})
})
