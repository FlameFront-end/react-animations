import { motion, Variants } from 'framer-motion'
import { FC } from 'react'

import { useIsFirstRender } from '../../context/IsFirstRenderContext/IsFirstRenderContext.tsx'

import { anim } from './anim.ts'
import { greetings } from './greetings.ts'

interface SVGProps {
	width: number
	height: number
}

const SVG: FC<SVGProps> = ({ width, height }) => {
	const { isFirstRender } = useIsFirstRender()

	const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
  `

	const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
  `

	const curve: Variants = {
		initial: {
			d: initialPath
		},

		enter: {
			d: targetPath,
			transition: {
				duration: 0.75,
				delay: isFirstRender ? (greetings.length * 300 + 100) / 1000 : 0.3,
				ease: [0.76, 0, 0.24, 1]
			}
		},
		exit: {
			d: initialPath,
			transition: {
				duration: 0.75,
				ease: [0.76, 0, 0.24, 1]
			}
		}
	}

	const slide: Variants = {
		initial: {
			top: '-300px'
		},
		enter: {
			top: '-100vh',
			transition: {
				duration: 0.75,
				delay: isFirstRender ? (greetings.length * 300 + 100) / 1000 : 0.3,
				ease: [0.76, 0, 0.24, 1]
			},
			transitionEnd: {
				top: '100vh'
			}
		},

		exit: {
			top: '-300px',
			transition: {
				duration: 0.75,
				ease: [0.76, 0, 0.24, 1]
			}
		}
	}

	return (
		<motion.svg {...anim(slide)}>
			<motion.path {...anim(curve)}></motion.path>
		</motion.svg>
	)
}

export default SVG
