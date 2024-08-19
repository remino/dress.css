import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { readFileSync } from 'fs'
import sass from 'rollup-plugin-sass'
import YAML from 'yaml'
import uglify from '@lopatnov/rollup-plugin-uglify'

const { prefix } = YAML.parse(readFileSync('data/site.yml', 'utf8'))

const sassPlugin = sass({
	options: {
		outputStyle: 'compressed',
	},
})

const options = {
	watch: {
		clearScreen: false,
	},
	plugins: [nodeResolve(), commonjs(), sassPlugin, terser(), uglify()],
}

const file = name => ({
	...options,
	input: `assets/js/${name}.js`,
	output: {
		compact: true,
		file: `.build/js/${prefix}/${name}.js`,
		format: 'iife',
	},
})

export default [
	file('docs'),
]
