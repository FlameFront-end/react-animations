import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useCursorContext } from '../../context/CursorContext/CursorContext.tsx'

import './Nav.scss'

const Nav: FC = () => {
	const { textEnter, textLeave } = useCursorContext()

	const handleLinkHover = (size: number) => {
		textEnter(size)
	}

	return (
		<div className='nav'>
			<Link
				to='/'
				onMouseEnter={() => handleLinkHover(50)}
				onMouseLeave={textLeave}
			>
				Base
			</Link>
			<Link
				to='/horizontal-scroll'
				onMouseEnter={() => handleLinkHover(50)}
				onMouseLeave={textLeave}
			>
				Horizontal Scroll
			</Link>
			<Link
				to='/scroll-trigger-example'
				onMouseEnter={() => handleLinkHover(50)}
				onMouseLeave={textLeave}
			>
				Scroll Trigger Example
			</Link>
		</div>
	)
}

export default Nav
