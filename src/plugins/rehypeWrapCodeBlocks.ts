import type { Root } from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const rehypeWrapCodeBlocks: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, 'element', (node, index, parent) => {
			if (!parent || typeof index !== 'number') return
			if (node.tagName !== 'pre') return

			parent.children[index] = {
				type: 'element',
				tagName: 'div',
				properties: { class: 'code-block' },
				children: [node],
			}
		})
	}
}

export default rehypeWrapCodeBlocks
