'use client'

import { createContext, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import styles from './Wrapper.module.scss'
import { formatNumber } from '@/utils/formatting'

type Props = {
  children: React.ReactNode
}

const expensesCategories = [
  {
    name: 'Фастфуд',
    color: '#36C6C9',
  },
  {
    name: 'Жилье',
    color: '#2C88EA',
  },
  {
    name: 'Транспорт',
    color: '#E23235',
  },
  {
    name: 'Кредиты',
    color: '#3ADB7D',
  },
  {
    name: 'Продукты',
    color: '#F48712',
  },
  {
    name: 'Одежда и обувь',
    color: '#7951F5',
  },
]

const incomeCategories = [
  {
    name: 'Зар. плата',
    color: '#007AFF',
  },
  {
    name: 'Бизнес',
    color: '#FF8400',
  },
  {
    name: 'Инвестиции',
    color: '#35CC5A',
  },
]

// interface MessageJSON {
//   eventType: string;
//   eventData: any;
// }

export const WrapperContext = createContext<any>(null)

const Wrapper = ({ children }: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isCategorySelect, setIsCategorySelect] = useState(false)
  const [value, setValue] = useState('0')
  const [currentOperation, setCurrentOperation] = useState('Расход')
  const [currentCategory, setCurrentCategory] = useState('')

  function calculate(action: any) {
    if (typeof action === 'number') {
      if (value === '0') {
        setValue(String(action))
      } else {
        setValue((prev) => prev + action)
      }
    }

    if (action === '.' && value.indexOf('.') === -1) {
      setValue((prev) => prev + '.')
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
              <span className={styles.number}>{formatNumber(Number(value))}</span>
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
              <button className={styles.btn} onClick={() => calculate('.')}>
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
              <button className={`${styles.btn} ${styles.category}`} onClick={() => setIsCategorySelect(true)}>
                <h4>Категория:</h4>
                <div
                  className={styles.icon}
                  style={{
                    backgroundColor:
                      currentOperation === 'Расход'
                        ? expensesCategories.find((c) => c.name === currentCategory)?.color
                        : incomeCategories.find((c) => c.name === currentCategory)?.color,
                  }}
                >
                  {currentCategory && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8564 14H11.9127C12.4473 14 12.8864 13.5864 12.95 13.0645L14 2.57727H10.8182V0H9.56455V2.57727H6.40182L6.59273 4.06636C7.68091 4.36545 8.69909 4.90636 9.31 5.50455C10.2264 6.40818 10.8564 7.34364 10.8564 8.87091V14ZM0 13.3636V12.7273H9.56455V13.3636C9.56455 13.7073 9.27818 14 8.90909 14H0.636364C0.286364 14 0 13.7073 0 13.3636ZM9.56455 8.90909C9.56455 3.81818 0 3.81818 0 8.90909H9.56455ZM0 10.1818H9.54545V11.4545H0V10.1818Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
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

      <WrapperContext.Provider value={{ setIsPopupOpen, expensesCategories, incomeCategories }}>
        <div className={styles.content}>{children}</div>
      </WrapperContext.Provider>

      <Footer isPopupOpen={isPopupOpen} togglePopup={togglePopup} />

      {isCategorySelect && currentOperation === 'Расход' && (
        <div className={styles.popup}>
          <div className={`${styles.inner} ${styles.categories}`}>
            <h3>Выберите категорию</h3>
            <div className={styles.list}>
              {expensesCategories.map((c) => (
                <div
                  className={`${styles.item} ${currentCategory === c.name && styles.active}`}
                  key={c.name}
                  onClick={() => {
                    setCurrentCategory(c.name)
                    setIsCategorySelect(false)
                  }}
                >
                  <div className={styles.category}>
                    <div className={styles.icon} style={{ backgroundColor: c.color }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.8564 14H12.9127C13.4473 14 13.8864 13.5864 13.95 13.0645L15 2.57727H11.8182V0H10.5645V2.57727H7.40182L7.59273 4.06636C8.68091 4.36545 9.69909 4.90636 10.31 5.50455C11.2264 6.40818 11.8564 7.34364 11.8564 8.87091V14ZM1 13.3636V12.7273H10.5645V13.3636C10.5645 13.7073 10.2782 14 9.90909 14H1.63636C1.28636 14 1 13.7073 1 13.3636ZM10.5645 8.90909C10.5645 3.81818 1 3.81818 1 8.90909H10.5645ZM1 10.1818H10.5455V11.4545H1V10.1818Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h5 className={styles.name}>{c.name}</h5>
                  </div>
                  <div className={styles.check}>
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="28" height="28" rx="14" fill="#35CC5A" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.6827 10.8291C20.1058 11.2678 20.1058 11.9792 19.6827 12.418L13.171 19.1709C12.9678 19.3816 12.6923 19.5 12.4049 19.5C12.1176 19.5 11.842 19.3816 11.6389 19.1709L8.31732 15.7263C7.89423 15.2875 7.89423 14.5762 8.31732 14.1374C8.74041 13.6986 9.42638 13.6986 9.84947 14.1374L12.4049 16.7875L18.1505 10.8291C18.5736 10.3903 19.2596 10.3903 19.6827 10.8291Z"
                        fill="#DAFFE3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.btn}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 5.78952C11.4111 5.78952 11.7444 6.12278 11.7444 6.53388V10.2556H15.4662C15.8773 10.2556 16.2105 10.5889 16.2105 11C16.2105 11.4111 15.8773 11.7443 15.4662 11.7443H11.7444V15.4662C11.7444 15.8773 11.4111 16.2105 11 16.2105C10.5889 16.2105 10.2557 15.8773 10.2557 15.4662V11.7443H6.53388C6.12278 11.7443 5.78952 11.4111 5.78952 11C5.78952 10.5889 6.12278 10.2556 6.53388 10.2556H10.2557L10.2557 6.53388C10.2557 6.12278 10.5889 5.78952 11 5.78952Z"
                  fill="#DAE7FA"
                />
              </svg>
              <h4>Добавить категорию</h4>
            </button>
          </div>
        </div>
      )}

      {isCategorySelect && currentOperation === 'Доход' && (
        <div className={styles.popup}>
          <div className={`${styles.inner} ${styles.categories}`}>
            <h3>Выберите категорию</h3>
            <div className={styles.list}>
              {incomeCategories.map((c) => (
                <div
                  className={`${styles.item} ${currentCategory === c.name && styles.active}`}
                  key={c.name}
                  onClick={() => {
                    setCurrentCategory(c.name)
                    setIsCategorySelect(false)
                  }}
                >
                  <div className={styles.category}>
                    <div className={styles.icon} style={{ backgroundColor: c.color }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.8564 14H12.9127C13.4473 14 13.8864 13.5864 13.95 13.0645L15 2.57727H11.8182V0H10.5645V2.57727H7.40182L7.59273 4.06636C8.68091 4.36545 9.69909 4.90636 10.31 5.50455C11.2264 6.40818 11.8564 7.34364 11.8564 8.87091V14ZM1 13.3636V12.7273H10.5645V13.3636C10.5645 13.7073 10.2782 14 9.90909 14H1.63636C1.28636 14 1 13.7073 1 13.3636ZM10.5645 8.90909C10.5645 3.81818 1 3.81818 1 8.90909H10.5645ZM1 10.1818H10.5455V11.4545H1V10.1818Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h5 className={styles.name}>{c.name}</h5>
                  </div>
                  <div className={styles.check}>
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="28" height="28" rx="14" fill="#35CC5A" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.6827 10.8291C20.1058 11.2678 20.1058 11.9792 19.6827 12.418L13.171 19.1709C12.9678 19.3816 12.6923 19.5 12.4049 19.5C12.1176 19.5 11.842 19.3816 11.6389 19.1709L8.31732 15.7263C7.89423 15.2875 7.89423 14.5762 8.31732 14.1374C8.74041 13.6986 9.42638 13.6986 9.84947 14.1374L12.4049 16.7875L18.1505 10.8291C18.5736 10.3903 19.2596 10.3903 19.6827 10.8291Z"
                        fill="#DAFFE3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.btn}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 5.78952C11.4111 5.78952 11.7444 6.12278 11.7444 6.53388V10.2556H15.4662C15.8773 10.2556 16.2105 10.5889 16.2105 11C16.2105 11.4111 15.8773 11.7443 15.4662 11.7443H11.7444V15.4662C11.7444 15.8773 11.4111 16.2105 11 16.2105C10.5889 16.2105 10.2557 15.8773 10.2557 15.4662V11.7443H6.53388C6.12278 11.7443 5.78952 11.4111 5.78952 11C5.78952 10.5889 6.12278 10.2556 6.53388 10.2556H10.2557L10.2557 6.53388C10.2557 6.12278 10.5889 5.78952 11 5.78952Z"
                  fill="#DAE7FA"
                />
              </svg>
              <h4>Добавить категорию</h4>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wrapper
