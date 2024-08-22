'use client'

import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import styles from './Wrapper.module.scss'
import Image from 'next/image'

type Props = {
  children: React.ReactNode
}

// interface MessageJSON {
//   eventType: string;
//   eventData: any;
// }

const Wrapper = ({ children }: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentOperation, setCurrentOperation] = useState('Расход')
  const [value, setValue] = useState('0')
  const [currentCategory, setCurrentCategory] = useState('')

  // useEffect(() => {
  //   const data = JSON.stringify({
  //     eventType: 'web_app_setup_swipe_behavior',
  //     eventData: {
  //       allow_vertical_swipe: false,
  //     },
  //   })

  //   window.parent.postMessage(data, 'https://web.telegram.org')
  // }, [])

  function calculate(action: any) {
    if (typeof action === 'number') {
      if (value === '0') {
        setValue(String(action))
      } else {
        setValue((prev) => prev + action)
      }
    }

    if (action === ',' && value.indexOf(',') === -1) {
      setValue((prev) => prev + ',')
    }

    if (action === 'erase') {
      setValue((prev) => prev.slice(0, -1))
    }
  }

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isPopupOpen])

  function togglePopup() {
    setIsPopupOpen((prev) => !prev)
  }

  return (
    <div className={styles.wrapper}>
      {isPopupOpen && (
        <div className={styles.popup}>
          <div className={styles.inner}>
            <h2 className={styles.title}>Новая операция</h2>
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${currentOperation === 'Доход' && styles.income}`}
                onClick={() => setCurrentOperation('Доход')}
              >
                <h5>Доход</h5>
              </button>
              <button
                className={`${styles.tab} ${currentOperation === 'Расход' && styles.expense}`}
                onClick={() => setCurrentOperation('Расход')}
              >
                <h5>Расход</h5>
              </button>
            </div>
            <h1 className={styles.sum}>
              <span className={styles.sign}>{currentOperation === 'Расход' ? '-' : '+'}</span>
              <span className={styles.number}>{value}</span>
              <span className={styles.currency}>₽</span>
            </h1>
            <div className={styles.terminal}>
              <button className={styles.btn} onClick={() => calculate(1)}>
                <h3>1</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(2)}>
                <h3>2</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(3)}>
                <h3>3</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(4)}>
                <h3>4</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(5)}>
                <h3>5</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(6)}>
                <h3>6</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(7)}>
                <h3>7</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(8)}>
                <h3>8</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(9)}>
                <h3>9</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(',')}>
                <h3>,</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate(0)}>
                <h3>0</h3>
              </button>
              <button className={styles.btn} onClick={() => calculate('erase')}>
                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.65022 0C7.04153 0 6.45777 0.237052 6.02736 0.659009L0.67221 5.90901C-0.224069 6.78769 -0.22407 8.21231 0.672208 9.09099L6.02736 14.341C6.45777 14.7629 7.04153 15 7.65022 15H19.7049C20.9725 15 22 13.9926 22 12.75V2.25C22 1.00736 20.9725 0 19.7049 0H7.65022ZM16.2581 4.69373C16.5216 4.43541 16.9488 4.43544 17.2123 4.69373C17.4757 4.95202 17.4758 5.37083 17.2123 5.62915L15.3039 7.5L17.2123 9.37085C17.4757 9.62914 17.4758 10.0479 17.2123 10.3063C16.9488 10.5646 16.5216 10.5646 16.2581 10.3063L14.3498 8.43542L12.4415 10.3063C12.178 10.5646 11.7508 10.5646 11.4873 10.3063C11.2238 10.048 11.2238 9.62917 11.4873 9.37085L13.3956 7.5L11.4873 5.62915C11.2238 5.37086 11.2238 4.95205 11.4873 4.69373C11.7508 4.43541 12.178 4.43544 12.4415 4.69373L14.3498 6.56458L16.2581 4.69373Z"
                    fill="#3D3D51"
                  />
                </svg>
              </button>
            </div>
            <div className={styles.btns}>
              <button className={`${styles.btn} ${styles.category}`}>
                <h4>Категория:</h4>
                <div className={styles.icon}>{currentCategory && <Image src={''} alt="" width={45} height={45} />}</div>
              </button>
              <button className={`${styles.btn} ${styles.add} ${currentOperation === 'Доход' && styles.income}`}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 22C17.0752 22 22 17.0752 22 11C22 4.92485 17.0752 0 11 0C4.92485 0 0 4.92485 0 11C0 17.0752 4.92485 22 11 22ZM17.0186 8.21858C17.3049 7.93212 17.3049 7.46788 17.0186 7.18142C16.7321 6.89505 16.2679 6.89505 15.9814 7.18142L9.9 13.2629L6.75191 10.1148C6.46545 9.82839 6.00121 9.82839 5.71475 10.1148C5.42839 10.4012 5.42839 10.8655 5.71475 11.1519L9.38142 14.8186C9.66788 15.1049 10.1321 15.1049 10.4186 14.8186L17.0186 8.21858Z"
                    fill="#FFEEE4"
                  />
                </svg>
                <h4>Добавить</h4>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.content}>{children}</div>
      <Footer isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
    </div>
  )
}

export default Wrapper
