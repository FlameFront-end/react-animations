import './App.scss'
import { Nav } from './components'
import { IsFirstRenderProvider } from './context/IsFirstRenderContext/IsFirstRenderContext.tsx'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {
	return (
		<IsFirstRenderProvider>
			<div className='container'>
				<Nav />
				<AppRoutes />
			</div>
		</IsFirstRenderProvider>
	)
}

export default App
