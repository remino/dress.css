/*
	All this so Markdown with Astro and Vite doesn't end up producing two
	dress.svg asset files with the same content.
*/

interface MdastNode {
	type: string
	children?: MdastNode[]
	url?: string
}

// To match src string of Markdown image, not normalized or resolved path.
const HERO_PATH = 'src/images/dress.svg'

const isImageNode = (node: MdastNode): node is MdastNode & { url: string } =>
	typeof node.url === 'string' && node.type === 'image'

const isParagraphNode = (
	node: MdastNode,
): node is MdastNode & { children: MdastNode[] } =>
	node.type === 'paragraph' && Array.isArray(node.children)

const removeHero = (
	node: MdastNode,
	parent?: MdastNode,
	grandparent?: MdastNode,
) => {
	if (!parent || !parent.children) return

	const index = parent.children.indexOf(node)
	if (index === -1) return

	parent.children.splice(index, 1)

	if (
		isParagraphNode(parent) &&
		parent.children.length === 0 &&
		grandparent &&
		Array.isArray(grandparent.children)
	) {
		const parentIndex = grandparent.children.indexOf(parent)
		if (parentIndex !== -1) {
			grandparent.children.splice(parentIndex, 1)
		}
	}
}

export default function remarkStripReadmeHero() {
	return function transformer(tree: MdastNode, file: { history?: string[] }) {
		const filePath = file.history?.[0] ?? ''

		if (!filePath.endsWith('README.md')) {
			return
		}

		let removed = false

		const visit = (
			node: MdastNode,
			parent?: MdastNode,
			grandparent?: MdastNode,
		) => {
			if (removed) return

			if (isImageNode(node) && node.url === HERO_PATH) {
				removeHero(node, parent, grandparent)
				removed = true
				return
			}

			if (!node.children) return

			for (const child of node.children) {
				visit(child, node, parent)
				if (removed) break
			}
		}

		visit(tree)
	}
}
