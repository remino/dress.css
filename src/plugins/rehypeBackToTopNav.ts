import type { Element, Root, Text } from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

const isWhitespaceText = (node: Text) =>
	typeof node.value === 'string' && /^\s*$/.test(node.value)

const isBackToTopLink = (node: Element) =>
	node.tagName === 'a' && node.properties?.href === '#'

const rehypeBackToTopNav: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, 'element', (node: Element) => {
			if (node.tagName !== 'p' || !node.children) return

			const content = node.children.filter((child) => {
				if (child.type === 'text') {
					return !isWhitespaceText(child)
				}

				return child.type === 'element'
			})

			if (content.length !== 1) return

			const [onlyChild] = content

			if (onlyChild.type !== 'element') return
			if (!isBackToTopLink(onlyChild)) return

			node.tagName = 'nav'
			node.children = [onlyChild]
		})
	}
}

export default rehypeBackToTopNav
