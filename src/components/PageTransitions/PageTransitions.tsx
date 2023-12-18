import { motion, Variants } from 'framer-motion'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useIsFirstRender } from '../../context/IsFirstRenderContext/IsFirstRenderContext.tsx'

import './PageTransitions.scss'

const anim = (variants: Variants) => {
	return {
		initial: 'initial',
		animate: 'enter',
		exit: 'exit',
		variants
	}
}

type Routes = {
	[key: string]: string
}

const routes: Routes = {
	'/': 'Base',
	'/horizontal-scroll': 'Horizontal Scroll',
	'/scroll-trigger-example': 'Scroll Trigger Example'
}

const greetings = [
	{ language: 'Английский', greeting: 'Hello' },
	{ language: 'Французский', greeting: 'Bonjour' },
	{ language: 'Испанский', greeting: 'Hola' },
	{ language: 'Немецкий', greeting: 'Guten Tag' },
	{ language: 'Итальянский', greeting: 'Ciao' },
	{ language: 'Русский', greeting: 'Привет' },
	{ language: 'Китайский', greeting: '你好' },
	{ language: 'Японский', greeting: 'こんにちは' },
	{ language: 'Арабский', greeting: 'مرحبا' },
	{ language: 'Хинди', greeting: 'नमस्ते' }
]

interface CurveProps {
	children: ReactNode
}

const PageTransitions: FC<CurveProps> = ({ children }) => {
	useLocation()
	const [dimensions, setDimensions] = useState({
		height: 0,
		width: 0
	})

	const { isFirstRender } = useIsFirstRender()
	useEffect(() => {
		const resize = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}
		resize()

		window.addEventListener('resize', resize)
		return () => window.removeEventListener('resize', resize)
	}, [])

	const text: Variants = {
		initial: {
			opacity: 1
		},
		enter: {
			opacity: 0,
			top: -100,
			transition: {
				duration: 0.75,
				ease: [0.76, 0, 0.24, 1]
			},
			transitionEnd: {
				top: '47.5%'
			}
		},
		exit: {
			opacity: 1,
			top: '40%',
			transition: {
				duration: 0.75,
				delay: 0.3,
				ease: [0.33, 1, 0.68, 1]
			}
		}
	}

	return (
		<div className='page curve'>
			{isFirstRender ? (
				<GreetingsComponent />
			) : (
				<motion.div {...anim(text)} className='route'>
					{routes[window.location.pathname]}
				</motion.div>
			)}
			<div
				style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
				className='background'
			></div>
			{dimensions.width > 0 && <SVG {...dimensions} />}
			{children}
		</div>
	)
}

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

export default PageTransitions

const GreetingsComponent = () => {
	const [currentGreeting, setCurrentGreeting] = useState(greetings[0].greeting)
	useEffect(() => {
		let count = 1
		const interval = setInterval(() => {
			if (count < greetings.length) {
				setCurrentGreeting(greetings[count].greeting)
				count++
			} else {
				clearInterval(interval)
			}
		}, 300)
		return () => clearInterval(interval)
	}, [])

	return <motion.div className='route'>{currentGreeting}</motion.div>
}
