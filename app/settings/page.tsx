'use client'

import { WrapperContext } from '@/components/Wrapper/Wrapper'
import { useContext, useEffect } from 'react'

function Settings() {
  const { setIsPopupOpen } = useContext(WrapperContext)

  useEffect(() => {
    setIsPopupOpen(false)
  }, [])

  return (
    <div>
      <h1>Настройки</h1>
    </div>
  )
}

export default Settings
