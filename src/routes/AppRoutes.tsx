import { Base, ScrollTriggerExample, HorizontalScroll } from '../demos'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

interface AppRoutesProps {}

const AppRoutes: FC<AppRoutesProps> = () => {
  return (
    <Routes>
      <Route element={<Base />} path="/base" />
      <Route element={<HorizontalScroll />} path="/horizontal-scroll" />
      <Route element={<ScrollTriggerExample />} path="scroll-trigger-example" />
    </Routes>
  )
}

export default AppRoutes
