'use client'

import { createContext, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import styles from './Wrapper.module.scss'
import { useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import { useTheme } from '@/hooks/useTheme'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import { addInfo } from '@/lib/features/user/userSlice'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import NewOperation from '../NewOperation/NewOperation'
import Popup from '../Popup/Popup'
import SelectCategory from '../SelectCategory/SelectCategory'
import { useOutsideClick } from '@/hooks/useOutsideClick'

type Props = {
  children: React.ReactNode
}

declare global {
  interface Window {
    Telegram: any
  }
}

export const WrapperContext = createContext<any>(null)

const Wrapper = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isPopupClosing, setIsPopupClosing] = useState(false)

  const [currentOperation, setCurrentOperation] = useState('Расход')
  const [currentCategory, setCurrentCategory] = useState('')

  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isCategoryClosing, setIsCategoryClosing] = useState(false)

  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const { setIsScrollBlock } = useScrollBlock(false)

  const dispatch = useDispatch()

  const pathname = usePathname()
  const router = useRouter()

  const ref = useOutsideClick(closePopup)
  const categoriesRef = useOutsideClick(closeCategories)

  function chooseOperation(operation: string) {
    setCurrentOperation(operation)
    setCurrentCategory('')
  }

  function closePopup() {
    // if (isCategoryOpen) {
    setIsPopupClosing(true)

    setTimeout(() => {
      setIsPopupOpen(false)
      setIsPopupClosing(false)
      setIsScrollBlock(false)
    }, 150)
    // }
  }

  function closeCategories() {
    setIsCategoryClosing(true)

    setTimeout(() => {
      setIsCategoryOpen(false)
      setIsCategoryClosing(false)
      setIsScrollBlock(false)
    }, 150)
  }

  function openCategories() {
    setIsCategoryOpen(true)
  }

  function togglePopup() {
    if (isPopupOpen) {
      closePopup()
    } else {
      setIsPopupOpen(true)
      setIsScrollBlock(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.expand()
    tg.disableVerticalSwipes()

    const data = tg.initDataUnsafe.user

    if (data) {
      dispatch(addInfo({ firstName: data.first_name, lastName: data.last_name, username: data.username }))
    }

    addTheme(tg)
  }, [])

  function addTheme(tg: any) {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      tg.setBackgroundColor('#1D1D25')
      tg.setHeaderColor('#1D1D25')
    } else {
      tg.setBackgroundColor('#efeff4')
      tg.setHeaderColor('#efeff4')
    }
  }

  useEffect(() => {
    const tg = window.Telegram.WebApp

    addTheme(tg)
  }, [theme])

  useEffect(() => {
    const tg = window.Telegram.WebApp
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

  if (!isMounted) {
    return
  }

  return (
    <div className={styles.wrapper}>
      <Popup isPopupOpen={isPopupOpen} isPopupClosing={isPopupClosing} isOver={false} propRef={ref}>
        <NewOperation
          currentOperation={currentOperation}
          chooseOperation={chooseOperation}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          openCategories={openCategories}
          closePopup={closePopup}
        />
      </Popup>

      <WrapperContext.Provider value={{ setIsPopupOpen, theme, setTheme }}>
        <div className={styles.content}>{children}</div>
      </WrapperContext.Provider>

      <Footer isPopupOpen={isPopupOpen} togglePopup={togglePopup} />

      <Popup isPopupOpen={isCategoryOpen} isPopupClosing={isCategoryClosing} isOver={false} propRef={categoriesRef}>
        <SelectCategory
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          currentOperation={currentOperation}
          closeCategories={closeCategories}
        />
      </Popup>
    </div>
  )
}

export default Wrapper
