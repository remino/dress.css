import init from '@remino/reslib/lib/init.js'
import { addHeadingAnchorLinks } from '../scripts/anchorLinks'

init({
	parallel: [addHeadingAnchorLinks],
})
