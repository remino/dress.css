import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

const toArray = (value) => (Array.isArray(value) ? value : value ? [value] : [])

const baseRules = {
	'comma-dangle': ['error', 'always-multiline'],
	semi: ['error', 'never'],
	'arrow-parens': 'off',
	indent: ['error', 'tab', { SwitchCase: 1 }],
	'no-tabs': ['error', { allowIndentationTabs: true }],
	'no-unused-vars': 'off',
}

const tsRules = {
	...baseRules,
	'@typescript-eslint/no-unused-vars': [
		'warn',
		{ argsIgnorePattern: '^_', ignoreRestSiblings: true },
	],
}

export default [
	{
		ignores: ['node_modules', '.astro', 'dist', 'deploy/public'],
	},
	...toArray(js.configs?.recommended),
	...toArray(tseslint.configs?.recommended),
	...toArray(
		astroPlugin.configs?.['flat/recommended'] ??
			astroPlugin.configs?.recommended,
	),
	prettier,
	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		languageOptions: {
			parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
			globals: { ...globals.browser, ...globals.node },
		},
		rules: baseRules,
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
			globals: { ...globals.browser, ...globals.node },
		},
		rules: tsRules,
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.astro'],
				project: './tsconfig.json',
			},
			globals: { ...globals.browser, ...globals.node },
		},
		rules: tsRules,
	},
]
