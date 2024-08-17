import init from '@remino/reslib/lib/init.js'

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
		disableNoSubmitForms,
		setupSignupForm,
	]
})
