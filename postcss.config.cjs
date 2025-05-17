const pkg = require('./package.json')

module.exports = {
	plugins: [
		require('postcss-banner')({
			banner: `}{ ${pkg.name} v${pkg.version} | ${pkg.license} License | ${pkg.homepage || pkg.repository.url}`,
			inline: true, // puts it at the top
			important: true,
		}),
		require('cssnano')({
			preset: [
				'default',
				{
					discardComments: {
						remove: comment => !/^!/.test(comment), // keep /*! ... */
					},
				},
			],
		}),
	],
}
