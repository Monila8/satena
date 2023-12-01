import { useState } from "react"
import { ThemeContext } from "./Contexts"

export const ThemeProvider = ({ children }) => {
  const themeState = useState('light')

  return (
    <ThemeContext.Provider value={themeState}>
      {children}
    </ThemeContext.Provider>
  )
}