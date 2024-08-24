import init from '@remino/reslib/lib/init.js'
import { EditorView, basicSetup } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { html } from '@codemirror/lang-html'
import { dracula } from 'thememirror'

class PlaygroundApp extends HTMLElement {
	get iframe() {
		return this.querySelector('iframe')
	}

	connectedCallback() {
		const doc = this.innerHTML

		this.innerHTML = `
			<form>
				<fieldset id="editor"><legend>HTML Editor</legend><div></div></fieldset>
				<fieldset id="semcss"><legend><select><option>With sem.css</option><option>Without sem.css</option></select></legend><output><iframe></iframe></output></fieldset>
			</form>
		`

		const iframes = this.querySelectorAll('iframe')

		iframes[0].srcdoc = `
			<!DOCTYPE html>
			<html>
			<title>Preview</title>
			<link rel="stylesheet" href="/semcss/sem.css">
			<body>${doc}</body>
		`

		this.querySelector('form').addEventListener('submit', event => {
			event.preventDefault()
			event.stopPropagation()
		})

		this.querySelector('select').addEventListener('change', event => {
			const withSemCss = event.target.value === 'With sem.css'
			this.iframe.contentDocument.styleSheets[0].disabled = !withSemCss
		})

		this.state = EditorState.create({
			doc,
			extensions: [
				basicSetup,
				dracula,
				html(),
				EditorView.updateListener.of(this.updateOutput.bind(this)),
			],
		})

		this.editor = new EditorView({
			parent: this.querySelector('div'),
			state: this.state,
		})

		this.editor.requestMeasure()
	}

	updateOutput() {
		const htmlSrc = this.editor.state.doc.toString()

		this.iframe.contentDocument.body.innerHTML = htmlSrc || ''
		this.iframe.style.setProperty('height', 'auto')
		this.iframe.style.setProperty('height', `${this.iframe.contentDocument.documentElement.scrollHeight}px`)
	}
}

const resizeEditor = () => {
	// Resize editor using JavaScript because CodeMirror 6 is stubborn,
	// unlike a normal <textarea>.
	const editor = document.querySelector('playground-app fieldset#editor > div')
	const frame = document.querySelector('playground-app iframe')
	const { width } = window.getComputedStyle(frame)
	editor.style.setProperty('width', width)
}

const startApp = () => {
	customElements.define('playground-app', PlaygroundApp)

	window.addEventListener('resize', resizeEditor)
	resizeEditor()
}

init({
	parallel: [
		startApp,
	],
})
