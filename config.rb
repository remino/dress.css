require 'date'
require 'middleman-reslib/date'
require 'middleman-reslib/i18n'
require 'middleman-reslib/minify'
require 'middleman-reslib/title'
require 'middleman-reslib/url'

activate :i18n
activate :directory_indexes
activate :reslib_date
activate :reslib_i18n
activate :reslib_title
activate :reslib_url, base_url: app.data.site.url

activate :autoprefixer do |prefix|
	prefix.browsers = 'last 2 versions'
end

configure :build do
	activate :asset_hash, exts: %w(.css .js)
	activate :gzip
	activate :reslib_minify

	after_build do |builder|
		builder.thor.run "bin/build_brotli #{app.data.site.build_dir}"
	end

	activate :external_pipeline,
		name: :img,
		command: "bin/build_images #{app.source_dir} .build/img",
		source: ".build/img",
		latency: 2

	after_build do |builder|
		builder.thor.run "mv -v deploy/public/%1$s.conf deploy/nginx/%1$s.conf" % app.data.site.prefix
	end

	ignore '*.map'
	ignore '/nav/*'
	ignore '/index.html'
end

configure :development do
	activate :livereload, no_swf: true

	after_configuration do
		app.data.externals.static_paths.each do |url, path|
			use ::Rack::Static, urls: [url], root: path, index: 'index.html'
		end
	end
end

activate :external_pipeline,
	name: :css,
	command: "pnpm run #{build? ? 'css:build' : 'css:watch'}",
	source: ".build/css",
	latency: 2

# activate :external_pipeline,
# 	name: :js,
# 	command: "pnpm run #{build? ? 'js:build' : 'js:watch'}",
# 	source: ".build/js",
# 	latency: 2

ignore '.DS_Store'

page '/*.json', layout: false
page '/*.txt', layout: false
page '/*.xml', layout: false
page '/index.html', layout: false

set :build_dir, app.data.site.build_dir
set :css_dir, app.data.site.prefix
set :images_dir, app.data.site.prefix
set :js_dir, app.data.site.prefix
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true, with_toc_data: true
set :relative_links, false
