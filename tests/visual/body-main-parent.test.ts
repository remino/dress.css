import { expect, test } from '../setup'

test.describe.parallel('body/main parent layout', () => {
	test('body becomes flex when main is a direct child', async ({ page }) => {
		await page.goto('/tests/widths/sparse-content-with-header/', {
			waitUntil: 'domcontentloaded',
		})

		await expect(page.locator('body')).toHaveCSS('display', 'flex')
		await expect(page.locator('body > header')).toHaveCSS(
			'margin-bottom',
			'0px',
		)
	})

	test('wrapper becomes flex when it directly owns main', async ({ page }) => {
		await page.goto('/tests/widths/wrapped-main/', {
			waitUntil: 'domcontentloaded',
		})

		await expect(page.locator('body')).not.toHaveCSS('display', 'flex')
		await expect(page.locator('#page-shell')).toHaveCSS('display', 'flex')
		await expect(page.locator('#page-shell')).toHaveCSS(
			'flex-direction',
			'column',
		)
	})
})
