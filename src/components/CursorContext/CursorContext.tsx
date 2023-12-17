import React, { createContext, useContext, ReactNode, useState } from 'react'

interface CursorContextProps {
  cursorVariant: string
  cursorSize: number
  textEnter: (size?: number) => void
  textLeave: () => void
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined)

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState('default')
  const [cursorSize, setCursorSize] = useState(16)

  const textEnter = (size: number = 16) => {
    setCursorVariant('text')
    setCursorSize(size)
  }

  const textLeave = () => {
    setCursorVariant('default')
  }

  const contextValue: CursorContextProps = { cursorVariant, cursorSize, textEnter, textLeave }

  return <CursorContext.Provider value={contextValue}>{children}</CursorContext.Provider>
}

export const useCursorContext = (): CursorContextProps => {
  const context = useContext(CursorContext)

  if (!context) {
    throw new Error('useCursorContext must be used within a CursorProvider')
  }

  return context
}
