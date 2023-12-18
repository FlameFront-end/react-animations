import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FC, useLayoutEffect } from 'react'

import { PageTransitions } from '../../components'

import './ScrollTriggerExample.scss'

const ScrollTriggerExample: FC = () => {
	gsap.registerPlugin(ScrollTrigger)

	useLayoutEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.trigger',
				start: 'top top',
				end: 'bottom -=100%',
				scrub: true,
				pin: true,
				toggleClass: 'square--active' // класс, когда работает анимация
			}
		})
		tl.from('.square', {
			opacity: 0,
			x: -500,
			rotation: -360,
			duration: 2
		}).to('.square', { backgroundColor: 'red', scale: 0.5 })
	}, [])

	return (
		<PageTransitions>
			<div className='ScrollTrigger'>
				<div className='section section '></div>
				<section className='section trigger'>
					<div className='square'></div>
				</section>
				<div className='section section'></div>
			</div>
		</PageTransitions>
	)
}

export default ScrollTriggerExample
