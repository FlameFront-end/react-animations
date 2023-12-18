import { Variants } from 'framer-motion'

export const anim = (variants: Variants) => {
	return {
		initial: 'initial',
		animate: 'enter',
		exit: 'exit',
		variants
	}
}
