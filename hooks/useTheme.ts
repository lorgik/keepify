'use client'

import { useLayoutEffect, useState } from 'react'

const themeKey = 'app-theme'

export const useTheme = () => {
  const [theme, setTheme] = useState('light')

  useLayoutEffect(() => {
    const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultTheme = isDarkTheme ? 'dark' : 'light'

    const localTheme = localStorage.getItem(themeKey)

    if (localTheme) {
      setTheme(defaultTheme && localTheme)
    }
  }, [])

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(themeKey, theme)
  }, [theme])

  return { theme, setTheme }
}
