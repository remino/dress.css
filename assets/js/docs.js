import init from '@remino/reslib/lib/init.js'

const addCodeBlockCopyButton = () => {
	document.querySelectorAll('div.highlight').forEach(block => {
		const button = document.createElement('button')
		const label = 'Copy'

		button.classList.add('copy')
		button.textContent = label

		button.addEventListener('click', () => {
			navigator.clipboard.writeText(block.querySelector('code').textContent)

			button.setAttribute('aria-live', 'assertive')
			button.textContent = 'Copied!'

			setTimeout(() => {
				button.textContent = label
				button.removeAttribute('aria-live')
			}, 1000)
		})

		block.appendChild(button)
	})
}

const disableLinks = () => {
	document.querySelectorAll('a[data-disabled]').forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault()
			event.stopPropagation()
		})
	})
}

const disableNoSubmitForms = () => {
	document.querySelectorAll('form[data-nosubmit]').forEach(form => {
		form.addEventListener('submit', event => {
			event.preventDefault()
			event.stopPropagation()
		})
	})
}

const setupSignupForm = () => {
	const form = document.getElementById('signup')

	if (!form) return

	form.addEventListener('submit', event => {
		event.preventDefault()
		event.stopPropagation()

		alert('Thank you! The data has been sent nowhere.')
	})

	const applyValidity = ({ currentTarget }) => {
		const submit = currentTarget.querySelector('button[type="submit"]')
		submit.disabled = !currentTarget.checkValidity()
	}

	form.addEventListener('input', applyValidity)
	form.addEventListener('change', applyValidity)
	form.addEventListener('reset', ({ currentTarget }) => {
		setTimeout(applyValidity, 10, { currentTarget })
	})
}

init({
	parallel: [
		addCodeBlockCopyButton,
		disableLinks,
		disableNoSubmitForms,
		setupSignupForm,
	],
})
