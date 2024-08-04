module.exports = {
	plugins: [
		require('cssnano')({
			preset: require('cssnano-preset-default'),
		}),
	],
}
