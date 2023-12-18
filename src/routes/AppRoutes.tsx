import { AnimatePresence } from 'framer-motion'
import { FC } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Base, HorizontalScroll, ScrollTriggerExample } from '../demos'

const AppRoutes: FC = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route element={<Base />} path='/' />
				<Route element={<HorizontalScroll />} path='/horizontal-scroll' />
				<Route
					element={<ScrollTriggerExample />}
					path='/scroll-trigger-example'
				/>
			</Routes>
		</AnimatePresence>
	)
}

export default AppRoutes
