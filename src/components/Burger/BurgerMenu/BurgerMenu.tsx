import { motion } from 'framer-motion'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../../routes/AppRoutes.tsx'
import BurgerCurve from '../BurgerCurve/BurgerCurve.tsx'

import { menuSlide, slide } from './anim.ts'
import './BurgerMenu.scss'

interface BurgerMenuProps {
	onClose?: () => void
}

const BurgerMenu: FC<BurgerMenuProps> = ({ onClose }) => {
	const handleLinkClick = () => {
		onClose && onClose()
	}
	return (
		<motion.div
			variants={menuSlide}
			initial='initial'
			animate='enter'
			exit='exit'
			className='menu'
		>
			<div className='body'>
				<div className='nav'>
					<div className='header'>
						<p>Navigation</p>
					</div>

					{routes.map(({ title, href }, index) => (
						<motion.div
							className='link'
							variants={slide}
							custom={index}
							key={href}
							initial='initial'
							animate='enter'
							exit='exit'
						>
							<Link to={href} onClick={handleLinkClick}>
								{title}
							</Link>
						</motion.div>
					))}
				</div>

				<div className='footer'>
					<a>Awwwards</a>
					<a>Instagram</a>
					<a>Dribble</a>
					<a>LinkedIn</a>
				</div>
				<BurgerCurve />
			</div>
		</motion.div>
	)
}

export default BurgerMenu
