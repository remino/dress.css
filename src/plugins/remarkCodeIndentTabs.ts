import type { Root, Code } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const FOUR_SPACES_PATTERN = /^(?: {4})+/gm

const replaceLeadingIndent = (value: string) =>
	value.replace(FOUR_SPACES_PATTERN, (match) => '\t'.repeat(match.length / 4))

const remarkCodeIndentTabs: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, 'code', (node: Code) => {
			if (!node.value || !node.value.includes('    ')) {
				return
			}

			node.value = replaceLeadingIndent(node.value)
		})
	}
}

export default remarkCodeIndentTabs
