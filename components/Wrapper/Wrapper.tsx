'use client'

import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import styles from './Wrapper.module.scss'

type Props = {
  children: React.ReactNode
}

// interface MessageJSON {
//   eventType: string;
//   eventData: any;
// }

const Wrapper = ({ children }: Props) => {
  useEffect(() => {
    const data = JSON.stringify({
      eventType: 'web_app_setup_swipe_behavior',
      eventData: {
        allow_vertical_swipe: false,
      },
    })

    window.parent.postMessage(data, 'https://web.telegram.org')
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Wrapper
