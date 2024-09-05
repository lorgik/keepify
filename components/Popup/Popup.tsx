'use client'

import styles from './Popup.module.scss'

type Props = {
  children: React.ReactNode
  isPopupOpen: boolean
  isPopupClosing: boolean
  isOver: boolean
}

const Popup = ({ children, isPopupOpen, isPopupClosing, isOver = false }: Props) => {
  if (!isPopupOpen) {
    return
  }

  return (
    <div className={`${styles.popup} ${isPopupClosing && styles.closing} ${isOver && styles.over}`}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
export default Popup
