import Cursor from './components/Cursor/Cursor.tsx'

import './App.scss'
import { Nav } from './components'
import { CursorProvider } from './context/CursorContext/CursorContext.tsx'
import { IsFirstRenderProvider } from './context/IsFirstRenderContext/IsFirstRenderContext.tsx'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {
	return (
		<CursorProvider>
			<IsFirstRenderProvider>
				<div className='app'>
					<Nav />
					<Cursor />
					<AppRoutes />
				</div>
			</IsFirstRenderProvider>
		</CursorProvider>
	)
}

export default App
