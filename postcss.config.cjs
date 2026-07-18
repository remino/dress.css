const pkg = require('./package.json')

module.exports = {
	plugins: {
		'postcss-nesting': {},
		'postcss-replace': {
			commentsOnly: true,
			pattern: /([A-Z_]+)/g,
			data: {
				PKG_HOMEPAGE: pkg.homepage,
				PKG_LICENSE: pkg.license,
				PKG_NAME: pkg.name,
				PKG_VER: pkg.version,
			},
		},
		cssnano: {
			preset: [
				'default',
				{
					discardComments: {
						remove: (comment) => !/^!/.test(comment), // keep /*! ... */
					},
				},
			],
		},
	},
}
