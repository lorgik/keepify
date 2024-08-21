'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import Logo from '@/components/Logo/Logo'
import Image from 'next/image'
import Tag from '@/entities/Tag/Tag'

const expensesTags = [
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

const incomeTags = [
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

const Home = () => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <main className={styles.main}>
      <div className={styles.bg}>
        <div className={styles.bottom}></div>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>
      <Logo />
      <div className={styles.cards}>
        <div className={styles.inner}>
          <div className={`${styles.card} ${styles.card1} ${activeCard === 0 && styles.active}`}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <div className={styles.info}>
              <h5 className={styles.title}>Баланс</h5>
              <h2 className={styles.check}>
                <span className={styles.currency}>₽</span>
                <span className={styles.value}>100 564</span>
              </h2>
            </div>
            <div className={styles.extra}>
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 4L8.53109 7.75H2.46891L5.5 4Z" fill="#35CC5A" />
              </svg>

              <h5 className={styles.text}>3 143</h5>
            </div>
          </div>
          <div className={`${styles.card} ${styles.card2} ${activeCard === 1 && styles.active}`}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <div className={styles.info}>
              <h5 className={styles.title}>KeepyCoins</h5>
              <h2 className={styles.check}>
                <span className={styles.currency}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_202_2097)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14ZM4.59177 14C4.59177 19.196 8.80398 23.4082 14 23.4082C19.196 23.4082 23.4082 19.196 23.4082 14C23.4082 8.80398 19.196 4.59177 14 4.59177C8.80398 4.59177 4.59177 8.80398 4.59177 14ZM15.7955 10.8878L14.8492 9.36587C14.458 8.73656 13.542 8.73656 13.1508 9.36587L12.2045 10.8878C12.0668 11.1092 11.8481 11.2681 11.595 11.3307L9.85511 11.7603C9.13569 11.938 8.85265 12.8091 9.33026 13.3756L10.4853 14.7459C10.6533 14.9453 10.7369 15.2024 10.7181 15.4624L10.5891 17.2499C10.5357 17.989 11.2767 18.5274 11.9632 18.2483L13.6233 17.5732C13.8648 17.475 14.1352 17.475 14.3767 17.5732L16.0368 18.2483C16.7233 18.5274 17.4643 17.989 17.4109 17.2499L17.2819 15.4624C17.2631 15.2024 17.3467 14.9453 17.5147 14.7459L18.6697 13.3756C19.1473 12.8091 18.8643 11.938 18.1449 11.7603L16.405 11.3307C16.1519 11.2681 15.9332 11.1092 15.7955 10.8878Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_202_2097">
                        <rect width="28" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className={styles.value}>3 400</span>
              </h2>
            </div>
            <div className={styles.extra}>
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_202_2091)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.5 11.5C8.53757 11.5 11 9.03757 11 6C11 2.96243 8.53757 0.5 5.5 0.5C2.46243 0.5 0 2.96243 0 6C0 9.03757 2.46243 11.5 5.5 11.5ZM5.30357 4.28125C5.09519 4.28125 4.89534 4.19976 4.74799 4.05472C4.60064 3.90967 4.51786 3.71294 4.51786 3.50781C4.51786 3.30268 4.60064 3.10596 4.74799 2.96091C4.89534 2.81586 5.09519 2.73438 5.30357 2.73438C5.51196 2.73438 5.71181 2.81586 5.85916 2.96091C6.00651 3.10596 6.08929 3.30268 6.08929 3.50781C6.08929 3.71294 6.00651 3.90967 5.85916 4.05472C5.71181 4.19976 5.51196 4.28125 5.30357 4.28125ZM4.125 5.46289C4.125 5.30904 4.18709 5.1615 4.2976 5.05271C4.40811 4.94393 4.558 4.88281 4.71429 4.88281H5.5C5.65629 4.88281 5.80618 4.94393 5.91669 5.05271C6.0272 5.1615 6.08929 5.30904 6.08929 5.46289V7.58984H6.28571C6.442 7.58984 6.59189 7.65096 6.7024 7.75975C6.81291 7.86853 6.875 8.01608 6.875 8.16992C6.875 8.32377 6.81291 8.47131 6.7024 8.5801C6.59189 8.68888 6.442 8.75 6.28571 8.75H4.71429C4.558 8.75 4.40811 8.68888 4.2976 8.5801C4.18709 8.47131 4.125 8.32377 4.125 8.16992C4.125 8.01608 4.18709 7.86853 4.2976 7.75975C4.40811 7.65096 4.558 7.58984 4.71429 7.58984H4.91071V6.04297H4.71429C4.558 6.04297 4.40811 5.98185 4.2976 5.87307C4.18709 5.76428 4.125 5.61674 4.125 5.46289Z"
                    fill="#FF8400"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_202_2091">
                    <rect width="11" height="11" fill="white" transform="matrix(1 0 0 -1 0 11.5)" />
                  </clipPath>
                </defs>
              </svg>

              <h5 className={styles.text}>Что это?</h5>
            </div>
          </div>
        </div>
        <div className={styles.dots}>
          <button
            className={`${styles.dot} ${activeCard === 0 && styles.active}`}
            onClick={() => setActiveCard(0)}
          ></button>
          <button
            className={`${styles.dot} ${activeCard === 1 && styles.active}`}
            onClick={() => setActiveCard(1)}
          ></button>
        </div>
      </div>
      <div className={styles.analytics}>
        <h2 className={styles.title}>Аналитика</h2>
        <div className={styles.month}>
          <button className={`${styles.btn} ${styles.left}`}>
            <svg width="3" height="5" viewBox="0 0 3 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.85355 0.146447C3.04881 0.341709 3.04881 0.658291 2.85355 0.853553L1.20711 2.5L2.85355 4.14644C3.04881 4.3417 3.04881 4.65829 2.85355 4.85355C2.65829 5.04881 2.34171 5.04881 2.14644 4.85355L0.146447 2.85355C-0.0488155 2.65829 -0.0488155 2.34171 0.146447 2.14644L2.14644 0.146447C2.34171 -0.0488155 2.65829 -0.0488155 2.85355 0.146447Z"
                fill="#007AFF"
              />
            </svg>
          </button>
          <h4 className={styles.title}>август 2024</h4>
          <button className={`${styles.btn} ${styles.right}`}>
            <svg width="3" height="5" viewBox="0 0 3 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.14645 0.146447C-0.0488124 0.341709 -0.0488124 0.658291 0.14645 0.853553L1.79289 2.5L0.14645 4.14644C-0.0488124 4.3417 -0.0488124 4.65829 0.14645 4.85355C0.341712 5.04881 0.658294 5.04881 0.853556 4.85355L2.85355 2.85355C3.04882 2.65829 3.04882 2.34171 2.85355 2.14644L0.853556 0.146447C0.658294 -0.0488155 0.341712 -0.0488155 0.14645 0.146447Z"
                fill="#007AFF"
              />
            </svg>
          </button>
        </div>
        <div className={styles.signs}>
          <div className={`${styles.sign} ${styles.expenses} ${styles.big}`}>
            <div className={styles.top}>
              <h5 className={styles.title}>Расходы:</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>151 234</span>
                <span className={styles.currency}>₽</span>
              </h3>
            </div>
            <div className={styles.tags}>
              {expensesTags.map((t) => (
                <Tag key={t.name} color={t.color}>
                  {t.name}
                </Tag>
              ))}
            </div>
          </div>
          <div className={`${styles.sign} ${styles.perDay}`}>
            <div className={styles.bg}>
              <Image src="/analytics-sign-blue-bg.png" alt="coins" width={143} height={88} />
            </div>
            <div className={styles.top}>
              <h5 className={styles.title}>~Расход в день</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>1 265</span>
                <span className={styles.currency}>₽</span>
              </h3>
            </div>
          </div>
          <div className={`${styles.sign} ${styles.dynamic}`}>
            <div className={styles.columns}>
              <div className={styles.column}></div>
              <div className={styles.column}></div>
              <div className={styles.column}></div>
              <div className={styles.column}></div>
            </div>
            <div className={styles.top}>
              <h5 className={styles.title}>Динамика</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>+ 20%</span>
              </h3>
            </div>
          </div>
          <div className={`${styles.sign} ${styles.income} ${styles.big}`}>
            <div className={styles.top}>
              <h5 className={styles.title}>Доходы:</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>154 350</span>
                <span className={styles.currency}>₽</span>
              </h3>
            </div>
            <div className={styles.tags}>
              {incomeTags.map((t) => (
                <Tag key={t.name} color={t.color}>
                  {t.name}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
