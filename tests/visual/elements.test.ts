import type { Page } from '@playwright/test'
import { expect, test } from '../setup'

const mediaPresets = {
	'screen-light': { colorScheme: 'light' },
	'screen-dark': { colorScheme: 'dark' },
	print: { media: 'print' },
} as const

const directions = {
	ltr: () => {},
	rtl: () => {
		document.documentElement.setAttribute('dir', 'rtl')
	},
	vrl: () => {
		document.documentElement.style.writingMode = 'vertical-rl'
	},
} as const

type SnapshotConfig = {
	maxDiffPixelRatio?: number
}

const elements: Record<string, SnapshotConfig> = {
	abbr: {},
	aside: {},
	blockquote: {},
	buttonlink: {},
	buttons: {},
	buttonset: {},
	checkbox: {},
	code: {},
	color: {},
	composite: {},
	datetime: {},
	details: {},
	dialog: { maxDiffPixelRatio: 0.01 },
	'dialog-wide': { maxDiffPixelRatio: 0.02 },
	dl: {},
	download: {},
	fieldset: {},
	figure: {},
	file: { maxDiffPixelRatio: 0.01 },
	footer: {},
	header: {},
	headings: {},
	hr: {},
	hyperlink: {},
	'hyperlink-long': {},
	iframe: {},
	'iframe-wide': {},
	inert: {},
	inlinecode: {},
	insdel: {},
	input: {},
	kbd: {},
	mark: {},
	menu: {},
	meter: {},
	nav: {},
	nestedfigures: {},
	newwindow: {},
	ol: {},
	output: {},
	popover: { maxDiffPixelRatio: 0.01 },
	pre: {},
	precode: {},
	progress: {},
	q: {},
	radio: {},
	range: {},
	samp: {},
	select: {},
	singlefigure: {},
	skipnav: {},
	table: {},
	textarea: {},
	ul: {},
	video: { maxDiffPixelRatio: 0.01 },
}

const pageEvals = async (page: Page) => {
	await page.evaluate(async () => {
		await Promise.all([
			document.fonts.ready,
			...Array.from(document.getAnimations()).map((anim) => anim.finished),
		])

		const video = document.querySelector<HTMLVideoElement>('video')
		if (video) video.controls = false
	})
}

const navigate = async ({
	dirFunc,
	elName,
	mediaProps,
	page,
}: {
	dirFunc: () => void
	elName: string
	mediaProps: Parameters<Page['emulateMedia']>[0]
	page: Page
}) => {
	await page.goto(`/tests/elements/${elName}/`, {
		waitUntil: 'domcontentloaded',
	})

	await page.emulateMedia(mediaProps)
	await page.evaluate(dirFunc)
	await pageEvals(page)
}

test.describe.parallel('elements', () => {
	for (const [elName, snapshotOpts] of Object.entries(elements)) {
		for (const [mediaName, mediaProps] of Object.entries(mediaPresets)) {
			for (const [dirName, dirFunc] of Object.entries(directions)) {
				test(`${mediaName} ${dirName} ${elName}`, async ({ page }) => {
					await navigate({ dirFunc, elName, mediaProps, page })

					const screenshot = await page.screenshot({ fullPage: true })

					expect(screenshot).toMatchSnapshot({
						name: `${mediaName}-${dirName}-${elName}.png`,
						...snapshotOpts,
					})
				})
			}
		}
	}
})
