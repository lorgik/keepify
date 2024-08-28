import { useEffect, useState } from 'react'

const usePopupOpen = (initialState: boolean) => {
  const [isPopupOpen, setIsPopupOpen] = useState(initialState)

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isPopupOpen])

  return { isPopupOpen, setIsPopupOpen }
}

export { usePopupOpen }
