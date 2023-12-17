import './Nav.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Nav: FC = () => {
  return (
    <div className="nav">
      <Link to="/base">Base</Link>
      <Link to="/horizontal-scroll">Horizontal Scroll</Link>
      <Link to="/scroll-trigger-example">Scroll Trigger Example</Link>
    </div>
  )
}

export default Nav
