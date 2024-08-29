import { useEffect, useState } from 'react'

const useScrollBlock = (initialState: boolean) => {
  const [isScrollBlock, setIsScrollBlock] = useState(initialState)

  useEffect(() => {
    if (isScrollBlock) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isScrollBlock])

  return { isScrollBlock, setIsScrollBlock }
}

export { useScrollBlock }
