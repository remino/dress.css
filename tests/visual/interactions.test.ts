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
	await page.addInitScript(() => {
		const preventNavigation = (event: Event) => {
			if (event.defaultPrevented) return
			event.preventDefault()
		}

		document.addEventListener(
			'click',
			(event) => {
				const target = event.target as Element | null
				if (target?.closest('a[href]')) {
					preventNavigation(event)
				}
			},
			true,
		)

		document.addEventListener(
			'submit',
			(event) => {
				preventNavigation(event)
			},
			true,
		)
	})

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
	const box = await locator.boundingBox()
	const padding = 8

	if (box) {
		const screenshot = await locator.page().screenshot({
			clip: {
				x: Math.max(box.x - padding, 0),
				y: Math.max(box.y - padding, 0),
				width: box.width + padding * 2,
				height: box.height + padding * 2,
			},
		})
		expect(screenshot).toMatchSnapshot(`${name}.png`)
		return
	}

	const fallback = await locator.screenshot()
	expect(fallback).toMatchSnapshot(`${name}.png`)
}

const captureInteractiveStates = async ({
	locator,
	name,
	page,
}: {
	locator: Locator
	name: string
	page: Page
}) => {
	await waitForStableUi(page)
	await captureState({ locator, name: `${name}-default` })

	await locator.focus()
	await waitForStableUi(page)
	await captureState({ locator, name: `${name}-focus` })

	await page.mouse.move(0, 0)
	await locator.hover()
	await waitForStableUi(page)
	await captureState({ locator, name: `${name}-hover` })

	const box = await locator.boundingBox()
	if (box) {
		await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
		await page.mouse.down()
		await waitForStableUi(page)
		await captureState({ locator, name: `${name}-active` })
		await page.mouse.up()
		await waitForStableUi(page)
	}
}

const themes = [
	{ name: 'light', media: { colorScheme: 'light' as const } },
	{ name: 'dark', media: { colorScheme: 'dark' as const } },
]

test.describe('interactions', () => {
	for (const theme of themes) {
		test.describe(`${theme.name}`, () => {
			test('button states', async ({ page }) => {
				await loadExample(page, '/tests/elements/buttons/')
				await page.emulateMedia({ colorScheme: theme.media.colorScheme })
				const button = page.getByRole('button', { name: 'Submit' })
				await captureInteractiveStates({
					locator: button,
					name: `${theme.name}-button-primary`,
					page,
				})
			})

			test('secondary button states', async ({ page }) => {
				await loadExample(page, '/tests/elements/buttons/')
				await page.emulateMedia({ colorScheme: theme.media.colorScheme })
				const secondary = page.getByRole('button', { name: 'Reset' })
				await captureInteractiveStates({
					locator: secondary,
					name: `${theme.name}-button-secondary`,
					page,
				})
			})

			test('link states', async ({ page }) => {
				await loadExample(page, '/tests/elements/hyperlink/')
				await page.emulateMedia({ colorScheme: theme.media.colorScheme })
				const link = page.getByRole('link', { name: 'Click me' })

				await captureInteractiveStates({
					locator: link,
					name: `${theme.name}-link`,
					page,
				})
			})
		})
	}
})
