import { test as base } from '@playwright/test'

export const test = base.extend({
	page: async ({ page }, use) => {
		page.on('pageerror', err => {
			throw new Error(`Console JS error: ${err.message}`)
		})
		await use(page)
	},
})

export const expect = base.expect
