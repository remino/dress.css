import type { Page } from '@playwright/test'
import { expect, test } from '../setup'

const widths = ['most-narrow', 'min-width', 'max-width', 'full-width'] as const

const pageEvals = async (page: Page) => {
	await page.evaluate(async () => {
		await Promise.all([
			document.fonts.ready,
			...Array.from(document.getAnimations()).map((anim) => anim.finished),
			(() => {
				const video = document.querySelector<HTMLVideoElement>('video')
				if (video) video.controls = false
			})(),
		])
	})
}

test.describe.parallel('widths', () => {
	for (const name of widths) {
		test(name, async ({ page }) => {
			await page.goto(`/tests/widths/${name}/`, {
				waitUntil: 'domcontentloaded',
			})
			await pageEvals(page)

			const screenshot = await page.screenshot({ fullPage: true })
			await expect(screenshot).toMatchSnapshot(`${name}.png`)
		})
	}
})
