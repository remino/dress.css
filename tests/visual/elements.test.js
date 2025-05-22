import { expect } from '@playwright/test'
import { test } from '../setup.js'

const media = {
	'screen-light': { colorScheme: 'light' },
	'screen-dark': { colorScheme: 'dark' },
	print: { media: 'print' },
}

const directions = {
	ltr: () => {},
	rtl: () => {
		document.documentElement.setAttribute('dir', 'rtl')
	},
	vrl: () => {
		document.documentElement.style.writingMode = 'vertical-rl' // or 'vertical-lr'
	},
}

const elements = {
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
	dialog: {},
	'dialog-wide': {},
	dl: {},
	download: {},
	fieldset: {},
	figure: {},
	file: { maxDiffPixelRatio: 0.01 },
	footer: {},
	header: {},
	headings: {},
	hidden: {},
	hr: {},
	hyperlink: {},
	inert: {},
	inlinecode: {},
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
	pre: {},
	precode: {},
	progress: {},
	radio: {},
	range: {},
	select: {},
	singlefigure: {},
	skipnav: {},
	table: {},
	textarea: {},
	ul: {},
	video: { maxDiffPixelRatio: 0.01 },
}

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

const navigate = async ({ dirFunc, elName, mediaProps, page }) => {
	await page.goto(`http://localhost:4567/tests/elements/${elName}/`, {
		waitUntil: 'domcontentloaded',
	})

	await page.emulateMedia(mediaProps)
	await page.evaluate(dirFunc)
	await pageEvals(page)

	return page
}

test.describe.parallel('elements', () => {
	Object.entries(elements)
		.map(async ([elName, snapshotOpts]) => {
			Object.entries(media).map(([mediaName, mediaProps]) => {
				Object.entries(directions).map(([dirName, dirFunc]) => {
					test(`${mediaName} ${dirName} ${elName}`, async ({ page }) => {
						await navigate({ dirFunc, elName, mediaProps, page })

						const screenshot = await page.screenshot({ fullPage: true })

						expect(screenshot).toMatchSnapshot({
							name: `${mediaName}-${dirName}-${elName}.png`,
							...snapshotOpts,
						})
					})
				})
			})
		})
		.flat(2)
})
