import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'

import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx'

import './BurgerLogo.scss'

const BurgerLogo: FC = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<>
			<div
				onClick={() => {
					setIsActive(prevState => !prevState)
				}}
				className='button'
			>
				<div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
			</div>
			<AnimatePresence mode='wait'>
				{isActive && <BurgerMenu onClose={() => setIsActive(false)} />}
			</AnimatePresence>
		</>
	)
}

export default BurgerLogo
