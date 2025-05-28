const pkg = require('./package.json')

module.exports = ctx => ({
	plugins: {
		...(ctx.file && ctx.file.basename === 'dress.css'
			? {
					'postcss-banner': {
						banner: `{} ${pkg.name} v${pkg.version} | ${pkg.license} License | ${pkg.homepage || pkg.repository.url}`,
						inline: true, // puts it at the top
						important: true,
					},
				}
			: {}),
		cssnano: {
			preset: [
				'default',
				{
					discardComments: {
						remove: comment => !/^!/.test(comment), // keep /*! ... */
					},
				},
			],
		},
	},
})
