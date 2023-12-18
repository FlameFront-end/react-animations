import { FC } from 'react'
import { Link } from 'react-router-dom'

import BurgerLogo from '../Burger/BurgerLogo/BurgerLogo.tsx'

import './Nav.scss'

const Nav: FC = () => {
	return (
		<div className='nav'>
			<div className='desktop'>
				<Link to='/'>Base</Link>
				<Link to='/horizontal-scroll'>Horizontal Scroll</Link>
				<Link to='/scroll-trigger-example'>Scroll Trigger Example</Link>
			</div>
			<div className='mobile'>
				<BurgerLogo />
			</div>
		</div>
	)
}

export default Nav
