import init from '@remino/reslib/lib/init.js'
import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { html } from '@codemirror/lang-html'
import { dracula } from 'thememirror'
import dressCssUrl from '../dress.css?url'
import playgroundScript from '../playground/script.ts?url'

const THEMES = [
	{
		id: 'aurora',
		name: 'Aurora',
		href: '/dress.css/themes/aurora.css',
		swatches: ['#fdf7ff', '#7b2cbf', '#ff7b9c', '#23a094'],
	},
	{
		id: 'nocturne',
		name: 'Nocturne',
		href: '/dress.css/themes/nocturne.css',
		swatches: ['#0f1116', '#5ccfe6', '#3a86ff', '#ef476f'],
	},
	{
		id: 'sage',
		name: 'Sage',
		href: '/dress.css/themes/sage.css',
		swatches: ['#f3f6f1', '#2a9d8f', '#4caf50', '#ffb703'],
	},
]

class PlaygroundApp extends HTMLElement {
	private editor?: EditorView
	private themeLink: HTMLLinkElement | null = null
	private currentThemeId: string | null = null
	private pendingTheme: { href: string | null; id: string | null } | null = null

	get iframe(): HTMLIFrameElement {
		return this.querySelector('iframe') as HTMLIFrameElement
	}

	connectedCallback() {
		const doc = this.innerHTML.trim()
		const themeRows = THEMES.map((theme) => {
			const swatches = theme.swatches
				.map(
					(color) =>
						`<span aria-hidden="true" style="display:block;inline-size:2.25rem;block-size:2.25rem;background:${color};"></span>`,
				)
				.join('')

			return `
				<tr id="${theme.id}">
					<th scope="row">${theme.name}</th>
					<td>
						<div style="display:flex;overflow:hidden;border-radius:var(--dress-br);">
							${swatches}
						</div>
					</td>
					<td>
						<div class="theme-row-actions">
							<button
								type="button"
								data-playground-theme="${theme.id}"
								data-state="inactive"
								aria-pressed="false"
							>
								Preview
							</button>
							<a download href="${theme.href}" role="button">
								Download
							</a>
						</div>
					</td>
				</tr>
			`
		}).join('')

		this.innerHTML = `
			<form data-nosubmit>
				<fieldset id="editor"><legend>HTML Editor</legend><div></div></fieldset>
				<details class="theme-browser">
					<summary>dress.css themes</summary>
					<p>
						Take a shortcut with a preset palette, preview it below, or grab the CSS file for your project.
					</p>
					<button type="button" data-playground-theme="off" disabled>Clear preview</button>
					<table>
						<thead>
							<tr>
								<th scope="col">Theme</th>
								<th scope="col">Palette</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
							${themeRows}
						</tbody>
					</table>
				</details>
				<fieldset id="dress.css"><legend><select><option>With dress.css</option><option>Without dress.css</option></select></legend><output><iframe></iframe></output></fieldset>
			</form>
		`

		const iframe = this.querySelector<HTMLIFrameElement>('iframe')

		if (!iframe) return

		iframe.srcdoc = `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<title>Preview</title>
					<link rel="stylesheet" href="${dressCssUrl}" />
					<script type="module" src="${playgroundScript}"></script>
					<style>*, *::after, *::before { transition: all 0.2s ease-in-out; }</style>
				</head>
				<body>${doc}</body>
			</html>
		`

		iframe.addEventListener('load', () => {
			if (this.pendingTheme) {
				const { href, id } = this.pendingTheme
				this.pendingTheme = null
				if (href && id) {
					this.applyTheme(href, id)
					return
				}
				this.clearTheme()
				return
			}
			this.updateThemeButtons(this.currentThemeId)
			this.resizeOutput()
		})

		const form = this.querySelector('form')

		form?.addEventListener('submit', (event) => {
			event.preventDefault()
			event.stopPropagation()
		})

		const select = this.querySelector('select')

		select?.addEventListener('change', (event) => {
			const target = event.target as HTMLSelectElement
			const withDressCss = target.value === 'With dress.css'
			const stylesheet = iframe.contentDocument?.styleSheets.item(0)

			if (stylesheet) {
				stylesheet.disabled = !withDressCss
			}

			this.resizeOutput()
		})

		const state = EditorState.create({
			doc,
			extensions: [
				basicSetup,
				dracula,
				html(),
				EditorView.updateListener.of(() => this.updateOutput()),
			],
		})

		this.editor = new EditorView({
			parent: this.querySelector('fieldset#editor > div') ?? undefined,
			state,
		})

		this.editor.requestMeasure()
		this.setupThemeControls()
	}

	updateOutput() {
		if (!this.editor) return

		const newHtml = this.editor.state.doc.toString()
		const doc = this.iframe.contentDocument

		if (!doc || doc.body.innerHTML === newHtml) return

		doc.body.innerHTML = newHtml
		this.resizeOutput()
	}

	resizeOutput() {
		const iframe = this.iframe
		const doc = iframe.contentDocument

		if (!doc) return

		iframe.style.setProperty('height', 'auto')
		iframe.style.setProperty('height', `${doc.documentElement.scrollHeight}px`)
	}

	private setupThemeControls() {
		const themeButtons = this.querySelectorAll<HTMLButtonElement>(
			'[data-playground-theme]',
		)

		themeButtons.forEach((button) => {
			const id = button.dataset.playgroundTheme

			if (!id) return

			if (id === 'off') {
				button.addEventListener('click', () => this.clearTheme())
				return
			}

			button.addEventListener('click', () => {
				const isActive = button.dataset.state === 'active'
				const theme = THEMES.find((entry) => entry.id === id)

				if (!theme) return

				if (isActive) {
					this.clearTheme()
				} else {
					this.applyTheme(theme.href, theme.id)
				}
			})
		})

		this.updateThemeButtons(this.currentThemeId)
	}

	private applyTheme(href: string, id: string) {
		const applied = this.setThemeLink(href)

		if (!applied) {
			this.pendingTheme = { href, id }
			return
		}

		this.currentThemeId = id
		this.pendingTheme = null
		this.updateThemeButtons(id)
	}

	private clearTheme() {
		const cleared = this.setThemeLink(null)

		if (!cleared) {
			this.pendingTheme = { href: null, id: null }
			return
		}

		this.currentThemeId = null
		this.pendingTheme = null
		this.updateThemeButtons(null)
	}

	private setThemeLink(href: string | null) {
		const doc = this.iframe.contentDocument

		if (!doc) return false

		if (href) {
			let link = this.themeLink

			if (!link) {
				link = doc.createElement('link')
				link.rel = 'stylesheet'
				doc.head.append(link)
				this.themeLink = link
			}

			link.href = href
		} else if (this.themeLink) {
			this.themeLink.remove()
			this.themeLink = null
		}

		this.resizeOutput()
		return true
	}

	private updateThemeButtons(activeId: string | null) {
		const buttons = this.querySelectorAll<HTMLButtonElement>(
			'[data-playground-theme]',
		)

		buttons.forEach((button) => {
			const id = button.dataset.playgroundTheme

			if (!id || id === 'off') return

			const isActive = id === activeId
			button.dataset.state = isActive ? 'active' : 'inactive'
			button.textContent = isActive ? 'Stop preview' : 'Preview'
			button.setAttribute('aria-pressed', isActive ? 'true' : 'false')
		})

		const clearButton = this.querySelector<HTMLButtonElement>(
			'[data-playground-theme="off"]',
		)

		if (clearButton) {
			clearButton.disabled = activeId === null
		}
	}
}

const resizeEditor = () => {
	const editor = document.querySelector<HTMLElement>(
		'playground-app fieldset#editor > div',
	)
	const frame = document.querySelector<HTMLElement>('playground-app iframe')

	if (!editor || !frame) return

	const { width } = window.getComputedStyle(frame)
	editor.style.setProperty('width', width)
}

const startApp = () => {
	if (!window.customElements.get('playground-app')) {
		window.customElements.define('playground-app', PlaygroundApp)
	}

	window.addEventListener('resize', resizeEditor)
	resizeEditor()
}

init({
	parallel: [startApp],
})
