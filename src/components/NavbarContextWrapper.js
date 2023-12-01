import React from "react"
import { useContext } from "react"
import { Navbar } from 'satena-storybook/dist/Navbar'
import { ThemeContext } from "../Contexts"

export function NavbarContextWrapper() {
  const [theme, setTheme] = useContext(ThemeContext)

  const handleThemeChange = () => setTheme(t => t === 'light' ? 'dark': 'light')
 const linksData = [

    { text: "Destinos", href: "#ref" },
    { text: "Vuelos", href: "#ref" },
    { text: "Check in", href: "#ref" },
    { text: "Iniciar sesión", href: "#ref" },
  ]

  return (
    <div>
      <Navbar links={linksData} onChange={handleThemeChange} theme={theme} />
    </div>
  )
}
