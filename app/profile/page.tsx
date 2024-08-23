'use client'

import { WrapperContext } from '@/components/Wrapper/Wrapper'
import { useContext, useEffect } from 'react'

function Profile() {
  const { setIsPopupOpen } = useContext(WrapperContext)

  useEffect(() => {
    setIsPopupOpen(false)
  }, [])

  return (
    <div>
      <h1>Профиль</h1>
    </div>
  )
}

export default Profile
