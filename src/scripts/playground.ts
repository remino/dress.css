import init from '@remino/reslib/lib/init.js'
import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { html } from '@codemirror/lang-html'
import { dracula } from 'thememirror'

class PlaygroundApp extends HTMLElement {
	private editor?: EditorView

	get iframe(): HTMLIFrameElement {
		return this.querySelector('iframe') as HTMLIFrameElement
	}

	connectedCallback() {
		const doc = this.innerHTML.trim()

		this.innerHTML = `
			<form data-nosubmit>
				<fieldset id="editor"><legend>HTML Editor</legend><div></div></fieldset>
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
					<link rel="stylesheet" href="/dress.css/dress.css" />
					<style>*, *::after, *::before { transition: all 0.2s ease-in-out; }</style>
				</head>
				<body>${doc}</body>
			</html>
		`

		const form = this.querySelector('form')

		form?.addEventListener('submit', event => {
			event.preventDefault()
			event.stopPropagation()
		})

		const select = this.querySelector('select')

		select?.addEventListener('change', event => {
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
		iframe.style.setProperty(
			'height',
			`${doc.documentElement.scrollHeight}px`
		)
	}
}

const resizeEditor = () => {
	const editor = document.querySelector<HTMLElement>(
		'playground-app fieldset#editor > div'
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
