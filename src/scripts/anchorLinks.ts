export const addHeadingAnchorLinks = () => {
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
