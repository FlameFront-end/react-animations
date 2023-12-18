import { motion, Variants } from 'framer-motion'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useIsFirstRender } from '../../context/IsFirstRenderContext/IsFirstRenderContext.tsx'
import { routes } from '../../routes/AppRoutes.tsx'

import { anim } from './anim.ts'
import { greetings } from './greetings.ts'
import './PageTransitions.scss'
import SVG from './SVG.tsx'

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
				<Greetings />
			) : (
				<motion.div {...anim(text)} className='route'>
					{routes.find(route => route.href === window.location.pathname)?.title}
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

export default PageTransitions

const Greetings = () => {
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

	return <motion.div className='greeting'>{currentGreeting}</motion.div>
}
