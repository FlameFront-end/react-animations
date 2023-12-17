import './App.scss'
import { Nav } from './components'
import Cursor from './components/Cursor/Cursor.tsx'
import { CursorProvider } from './components/CursorContext/CursorContext.tsx'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {
  return (
    <CursorProvider>
      <div className="app">
        <Nav />
        <Cursor />
        <AppRoutes />
      </div>
    </CursorProvider>
  )
}

export default App
