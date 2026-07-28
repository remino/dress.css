import {
	defineChainedMiddleware,
	proxyFiles,
	utf8,
} from '@remino/astro-middleware'
import proxyFilesConfig from './data/proxyFiles.json'

export const onRequest = defineChainedMiddleware(
	utf8,
	proxyFiles(proxyFilesConfig),
)
