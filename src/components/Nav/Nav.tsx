import './Nav.scss'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav: FC = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    navigate(`/${option}`)
  }
  return (
    <div className="nav">
      <div>Select demos</div>
      <select name="pages" value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
        <option value="base">Base</option>
        <option value="horizontal-scroll">Horizontal Scroll</option>
        <option value="scroll-trigger-example">Scroll Trigger Example</option>
      </select>
    </div>
  )
}

export default Nav
