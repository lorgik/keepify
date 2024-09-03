'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './page.module.scss'
import Logo from '@/components/Logo/Logo'
import Image from 'next/image'
import Tag from '@/entities/Tag/Tag'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { getColor } from '@/utils/coloring'
import { Operation } from '@/lib/features/operations/operationsSlice'
import { formatNumber } from '@/utils/formatting'
import Link from 'next/link'

const Home = () => {
  const [activeCard, setActiveCard] = useState(false)
  const [conicGradient, setConicGradient] = useState('')
  const operations = useSelector((state: RootState) => state.operations)
  const categories = useSelector((state: RootState) => state.categories)
  const [clientWidth, setClientWidth] = useState(0)

  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = document.documentElement.clientWidth
    setClientWidth(width)
  }, [])

  useEffect(() => {
    toggleCards()
  }, [activeCard])

  useEffect(() => {
    setConicGradient(getConicGradient())
  }, [operations])

  function toggleCards() {
    if (activeCard) {
      cardsRef.current?.scrollBy(0, 230 * 2 + 10 * 3 - clientWidth)
    } else {
      cardsRef.current?.scrollBy(0, -(230 * 2 + 10 * 3 - clientWidth))
    }
  }

  const expensesOperations = operations.filter((o) => o.value < 0)
  const incomeOperations = operations.filter((o) => o.value > 0)

  const expensesCategories = expensesOperations.reduce((acc: any, curr: Operation) => {
    if (
      acc.findIndex((o: any) => {
        return o.name === curr.category
      }) === -1
    ) {
      acc.push({ name: curr.category, value: curr.value })
    } else {
      let findedIndex = acc.findIndex((o: any) => o.name === curr.category)

      acc.splice(findedIndex, 1, {
        name: curr.category,
        value: curr.value + acc[findedIndex].value,
      })
    }
    return acc
  }, [])

  const incomeCategories = incomeOperations.reduce((acc: any, curr: Operation) => {
    if (
      acc.findIndex((o: any) => {
        return o.name === curr.category
      }) === -1
    ) {
      acc.push({ name: curr.category, value: curr.value })
    } else {
      let findedIndex = acc.findIndex((o: any) => o.name === curr.category)

      acc.splice(findedIndex, 1, {
        name: curr.category,
        value: curr.value + acc[findedIndex].value,
      })
    }
    return acc
  }, [])

  function getExpensesValue() {
    const value = expensesCategories.reduce((acc: number, curr: any) => acc + curr.value, 0)
    return Math.abs(value)
  }

  function getIncomeValue() {
    const value = incomeCategories.reduce((acc: number, curr: any) => acc + curr.value, 0)
    return value
  }

  function getConicGradient() {
    const maxValue = Math.abs(
      expensesCategories.reduce((acc: number, curr: any) => {
        return acc + curr.value
      }, 0)
    )

    const expensesCategoriesWithPercent = expensesCategories.reduce((acc: any, curr: any) => {
      return [
        ...acc,
        {
          name: curr.name,
          value: curr.value,
          percent: Number(Math.abs((curr.value / maxValue) * 50).toFixed(1)),
        },
      ]
    }, [])

    function getText() {
      let currPercent = 0

      const text = expensesCategoriesWithPercent.map((c: any, index: number) => {
        let text
        if (index === expensesCategoriesWithPercent.length - 1) {
          text = `${getColor(categories, c.name)} ${currPercent}% 50%`
        } else {
          text = `${getColor(categories, c.name)} ${currPercent}% ${(c.percent + currPercent).toFixed(1)}%`
        }
        currPercent = Number((currPercent + c.percent).toFixed(1))
        return text
      })

      return text
    }

    return `conic-gradient(${getText()}, transparent 50% 100%)`
  }

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.bottom}></div>
      </div>
      <Logo width={84} height={43} />
      <div className={styles.slider}>
        <div className={styles.cards} ref={cardsRef}>
          <div className={styles.inner}>
            <div className={`${styles.card} ${styles.card1}`} onClick={() => setActiveCard(false)}>
              <div className={styles.circle1}></div>
              <div className={styles.circle2}></div>
              <div className={styles.circle3}></div>
              <div className={styles.info}>
                <h5 className={styles.title}>Баланс</h5>
                <h2 className={styles.check}>
                  <span className={styles.currency}>₽</span>
                  <span className={styles.value}>
                    {formatNumber(Math.round(getIncomeValue() - getExpensesValue()))}
                  </span>
                </h2>
              </div>
              <div className={styles.extra}>
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 4L8.53109 7.75H2.46891L5.5 4Z" fill="#35CC5A" />
                </svg>

                <h5 className={styles.text}>3 143</h5>
              </div>
            </div>
            <div className={`${styles.card} ${styles.card2}`} onClick={() => setActiveCard(true)}>
              <div className={styles.circle1}></div>
              <div className={styles.circle2}></div>
              <div className={styles.circle3}></div>
              <div className={styles.info}>
                <h5 className={styles.title}>KeepyCoins</h5>
                <h2 className={styles.check}>
                  <span className={styles.currency}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_202_2097)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
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
                  <span className={styles.value}>{formatNumber(3400)}</span>
                </h2>
              </div>
              <div className={styles.extra}>
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_202_2091)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
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
        </div>
        <div className={styles.dots}>
          <button
            className={`${styles.dot} ${!activeCard && styles.active}`}
            onClick={() => setActiveCard(false)}
          ></button>
          <button
            className={`${styles.dot} ${activeCard && styles.active}`}
            onClick={() => setActiveCard(true)}
          ></button>
        </div>
      </div>

      <div className={styles.analytics}>
        <h2 className={styles.title}>Аналитика</h2>
        <div className={styles.month}>
          <button className={`${styles.btn} ${styles.left}`}>
            <svg width="3" height="5" viewBox="0 0 3 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.85355 0.146447C3.04881 0.341709 3.04881 0.658291 2.85355 0.853553L1.20711 2.5L2.85355 4.14644C3.04881 4.3417 3.04881 4.65829 2.85355 4.85355C2.65829 5.04881 2.34171 5.04881 2.14644 4.85355L0.146447 2.85355C-0.0488155 2.65829 -0.0488155 2.34171 0.146447 2.14644L2.14644 0.146447C2.34171 -0.0488155 2.65829 -0.0488155 2.85355 0.146447Z"
                fill="#007AFF"
              />
            </svg>
          </button>
          <h4 className={styles.title}>август 2024</h4>
          <button className={`${styles.btn} ${styles.right}`}>
            <svg width="3" height="5" viewBox="0 0 3 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.14645 0.146447C-0.0488124 0.341709 -0.0488124 0.658291 0.14645 0.853553L1.79289 2.5L0.14645 4.14644C-0.0488124 4.3417 -0.0488124 4.65829 0.14645 4.85355C0.341712 5.04881 0.658294 5.04881 0.853556 4.85355L2.85355 2.85355C3.04882 2.65829 3.04882 2.34171 2.85355 2.14644L0.853556 0.146447C0.658294 -0.0488155 0.341712 -0.0488155 0.14645 0.146447Z"
                fill="#007AFF"
              />
            </svg>
          </button>
        </div>
        <div className={styles.signs}>
          <Link href={'/operations/expenses'} className={`${styles.sign} ${styles.expenses} ${styles.big}`}>
            <div className={styles.top}>
              <h5 className={styles.title}>Расходы:</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>{formatNumber(Math.round(getExpensesValue()))} </span>
                <span className={styles.currency}>₽</span>
              </h3>
            </div>
            <div className={styles.tags}>
              {expensesCategories.map((c: any) => (
                <Tag key={c.name} color={getColor(categories, c.name)}>
                  {c.name}
                </Tag>
              ))}
            </div>
            <div
              className={styles.pie}
              style={{
                background: conicGradient,
              }}
            ></div>
          </Link>
          <div className={`${styles.sign} ${styles.perDay}`}>
            <Image src="/analytics-sign-blue-bg.png" alt="coins" width={143} height={88} priority />
            <div className={styles.top}>
              <h5 className={styles.title}>~В день</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>{Math.round(getExpensesValue() / 30)} </span>
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
          <Link href={'/operations/income'} className={`${styles.sign} ${styles.income} ${styles.big}`}>
            <div className={styles.top}>
              <h5 className={styles.title}>Доходы:</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>{formatNumber(Math.round(getIncomeValue()))} </span>
                <span className={styles.currency}>₽</span>
              </h3>
            </div>
            <div className={styles.tags}>
              {incomeCategories.map((c: any) => (
                <Tag key={c.name} color={getColor(categories, c.name)}>
                  {c.name}
                </Tag>
              ))}
            </div>
            <div className={styles.bar}>
              {incomeCategories.map((c: any, index: number) => (
                <div
                  className={styles.scale}
                  style={{
                    width: Math.round((c.value / getIncomeValue()) * 100) + '%',
                    backgroundColor: getColor(categories, c.name),
                    zIndex: incomeCategories.length - index,
                  }}
                  key={c.name}
                ></div>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
