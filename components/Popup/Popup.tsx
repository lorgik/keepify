'use client'

import styles from './Popup.module.scss'

type Props = {
    children: React.ReactNode
    isPopupOpen: boolean
    isPopupClosing: boolean
    isOver: boolean
    propRef: any
}

const Popup = ({ children, isPopupOpen, isPopupClosing, isOver, propRef }: Props) => {
    if (!isPopupOpen) {
        return
    }

    return (
        <div className={`${styles.popup} ${isPopupClosing && styles.closing} ${isOver && styles.over}`} ref={propRef}>
            <div className={styles.inner}>
                <div className={styles.brow}></div>
                {children}
            </div>
        </div>
    )
}
export default Popup
