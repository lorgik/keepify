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

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>('light')

  useEffect(() => {
    const theme = localStorage.getItem(StorageKey)

    if (!theme) {
      localStorage.setItem(StorageKey, 'light')
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(StorageKey, theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme, supportedThemes }}>{children}</ThemeContext.Provider>
}

export default Theme
