import { useEffect, useRef } from 'react'

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>()

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && ref.current.contains(event.target) && ref.current.closest('div') === event.target) {
        callback()
      }
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [ref])

  return ref
}

export { useOutsideClick }
