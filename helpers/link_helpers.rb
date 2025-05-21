module LinkHelpers
	# Override link hrefs
	def link_to(*args, &block)
		url_arg_index = block_given? ? 0 : 1
		options_index = block_given? ? 1 : 2

		url = args[url_arg_index]
		options = args[options_index] || {}

		url = data.links.overrides.fetch(url, url)

		args[url_arg_index] = url
		args[options_index] = options

		super(*args, &block)
	end
end
