import { addCopyButtons } from '@remino/functions'
import init from '@remino/reslib/lib/init.js'
import { loadTemplate } from '@remino/reslib/lib/template.js'

const addHeadingAnchorLinks = () => {
	document
		.querySelectorAll<HTMLElement>('[id]:is(h1, h2, h3, h4, h5, h6)')
		.forEach((heading) => {
			const link = document.createElement('a')
			link.classList.add('anchor-link')
			link.href = `${window.location.href.replace(/#.*$/, '')}#${heading.id}`
			link.setAttribute('aria-hidden', 'true')
			link.textContent = '#'
			link.title = 'Link to this page section'
			heading.insertBefore(link, heading.firstChild)
		})
}

const disableLinks = () => {
	document
		.querySelectorAll<HTMLAnchorElement>('a[data-disabled]')
		.forEach((link) => {
			link.addEventListener('click', (event) => {
				event.preventDefault()
				event.stopPropagation()
			})
		})
}

const disableNoSubmitForms = () => {
	document
		.querySelectorAll<HTMLFormElement>('form[data-nosubmit]')
		.forEach((form) => {
			form.addEventListener('submit', (event) => {
				event.preventDefault()
				event.stopPropagation()
			})
		})
}

const setupDialog = () => {
	const dialogOpen = document.getElementById('dialogOpen')

	if (!dialogOpen) return

	dialogOpen.addEventListener('click', () => {
		const dialog = document.getElementById(
			'dialogExample',
		) as HTMLDialogElement | null

		dialog?.showModal()
	})
}

const setupSignupForm = () => {
	const form = document.getElementById('signup') as HTMLFormElement | null

	if (!form) return

	form.addEventListener('submit', (event) => {
		event.preventDefault()
		event.stopPropagation()

		window.alert('Thank you! The data has been sent nowhere.')
	})

	const applyValidity = (event: Event) => {
		const currentTarget = event.currentTarget as HTMLFormElement | null

		if (!currentTarget) return

		const submit = currentTarget.querySelector<HTMLButtonElement>(
			'button[type="submit"]',
		)

		if (!submit) return

		submit.disabled = !currentTarget.checkValidity()
	}

	form.addEventListener('input', applyValidity)
	form.addEventListener('change', applyValidity)
	form.addEventListener('reset', (event) => {
		const currentTarget = event.currentTarget as HTMLFormElement | null

		if (!currentTarget) return

		setTimeout(() => {
			const submit = currentTarget.querySelector<HTMLButtonElement>(
				'button[type="submit"]',
			)

			if (!submit) return

			submit.disabled = !currentTarget.checkValidity()
		}, 10)
	})

	form.dispatchEvent(new Event('input', { bubbles: true }))
}

const insertInitTemplates = () => {
	document.querySelectorAll('template[data-type=init]').forEach(loadTemplate)
}

init({
	serial: [insertInitTemplates],
	parallel: [
		addCopyButtons,
		addHeadingAnchorLinks,
		disableLinks,
		disableNoSubmitForms,
		setupDialog,
		setupSignupForm,
	],
})
