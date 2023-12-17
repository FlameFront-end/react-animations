import { useCursorContext } from '../CursorContext/CursorContext.tsx'
import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

const Cursor = () => {
  const { cursorVariant, cursorSize } = useCursorContext()

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants: Variants = {
    default: {
      x: mousePosition.x - cursorSize / 2,
      y: mousePosition.y - cursorSize / 2,
    },
    text: {
      height: cursorSize,
      width: cursorSize,
      x: mousePosition.x - cursorSize / 2,
      y: mousePosition.y - cursorSize / 2,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  }

  return <motion.div className="cursor" variants={variants} animate={cursorVariant}></motion.div>
}

export default Cursor
