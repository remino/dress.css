import { expect } from '@playwright/test'
import { test } from '../setup.js'

const widths = ['most-narrow', 'min-width', 'max-width', 'full-width']

const pageEvals = page =>
	Promise.all([
		page.evaluate(() =>
			Promise.all([
				document.fonts.ready,
				...Array.from(document.getAnimations()).map(anim => anim.finished),
				() => {
					const video = document.querySelector('video')
					if (video) video.controls = false
				},
			])
		),
	])

const navigate = async ({ name, page }) => {
	await page.goto(`http://localhost:4567/tests/widths/${name}/`, {
		waitUntil: 'domcontentloaded',
	})

	await pageEvals(page)

	return page
}

test.describe.parallel('widths', () => {
	widths.map(async name => {
		test(name, async ({ page }) => {
			await navigate({ name, page })

			const screenshot = await page.screenshot({ fullPage: true })

			expect(screenshot).toMatchSnapshot({
				name: `${name}.png`,
			})
		})
	})
})
