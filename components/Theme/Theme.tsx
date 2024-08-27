'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const supportedThemes = {
  light: 'light',
  dark: 'dark',
}
type Themes = keyof typeof supportedThemes

const ThemeContext = createContext<
  | {
      theme: Themes
      setTheme: (theme: Themes) => void
      supportedThemes: { [key: string]: string }
    }
  | undefined
>(undefined)

const StorageKey = 'features-color-theme'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('You can use "useTheme" hook only within a <ThemeProvider> component.')
  }

  return context
}

export const getTheme = (): Themes => {
  let theme = window.localStorage.getItem(StorageKey)

  if (!theme) {
    window.localStorage.setItem(StorageKey, 'light')
    theme = 'light'
  }

  return theme as Themes
}

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>(getTheme)

  useEffect(() => {
    window.localStorage.setItem(StorageKey, theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme, supportedThemes }}>{children}</ThemeContext.Provider>
}

export default Theme
