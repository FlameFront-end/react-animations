import './App.scss'
import { Nav } from './components'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {
  return (
    <div className="app">
      <Nav />
      <AppRoutes />
    </div>
  )
}

export default App
