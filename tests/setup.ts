import { test as base } from '@playwright/test'

export const test = base.extend({
	page: async ({ page }, use) => {
		await page.addInitScript(() => {
			const init = () => {
				const hideToolbar = () => {
					const targets = document.querySelectorAll<HTMLElement>(
						'astro-dev-toolbar, astro-dev-toolbar-panel, astro-dev-toolbar-toggle, astro-dev-toolbar-overlay',
					)
					targets.forEach((el) => {
						el.style.setProperty('display', 'none', 'important')
						el.style.setProperty('visibility', 'hidden', 'important')
						el.style.setProperty('pointer-events', 'none', 'important')
						el.setAttribute('data-hidden-by-playwright', 'true')
					})
				}

				hideToolbar()

				const root = document.documentElement
				if (!root) return

				new MutationObserver(() => hideToolbar()).observe(root, {
					childList: true,
					subtree: true,
				})
			}

			if (document.readyState === 'loading') {
				document.addEventListener('DOMContentLoaded', init, { once: true })
			} else {
				init()
			}
		})

		page.on('pageerror', (err) => {
			throw new Error(`Console JS error: ${err.message}`)
		})
		await use(page)
	},
})

export const expect = base.expect
