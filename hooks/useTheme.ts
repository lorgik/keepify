import { useLayoutEffect, useState } from 'react'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

const themeKey = 'app-theme'
let getTheme

if (typeof window !== 'undefined') {
  getTheme = localStorage.getItem(themeKey)
} else {
  getTheme = 'light'
}

export const useTheme = () => {
  const [theme, setTheme] = useState(getTheme || defaultTheme)

  // useLayoutEffect(() => {
  //   const theme = localStorage.getItem(themeKey)

  //   if (theme) {
  //     setTheme(theme)
  //   }
  // }, [])

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(themeKey, theme)
  }, [theme])

  return { theme, setTheme }
}
