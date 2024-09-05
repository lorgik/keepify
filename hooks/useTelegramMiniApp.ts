import { addInfo } from '@/lib/features/user/userSlice'
import { useEffect } from 'react'

const useTelegramMiniApp = () => {
  const tg = window.Telegram.WebApp

  useEffect(() => {
    tg.expand()
    tg.disableVerticalSwipes()

    const data = tg.initDataUnsafe.user

    if (data) {
      dispatch(addInfo({ firstName: data.first_name, lastName: data.last_name, username: data.username }))
    }

    addTheme()
  }, [])

  useEffect(() => {
    addTheme()
  }, [theme])

  useEffect(() => {
    const backButton = tg.BackButton

    if (pathname !== '/') {
      backButton.show()
    } else {
      backButton.hide()
    }
    backButton.onClick(() => {
      router.back()
    })

    setIsScrollBlock(false)
    setIsPopupOpen(false)
  }, [pathname])

  function addTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      tg.setBackgroundColor('#1D1D25')
      tg.setHeaderColor('#1D1D25')
    } else {
      tg.setBackgroundColor('#efeff4')
      tg.setHeaderColor('#efeff4')
    }
  }
}
