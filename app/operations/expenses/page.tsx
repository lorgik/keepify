'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './page.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { WrapperContext } from '@/components/Wrapper/Wrapper'
import { Operation } from '@/lib/features/operations/operationsSlice'
import { getColor } from '@/utils/coloring'
import { formatNumber, formatNumberWithSign } from '@/utils/formatting'
import { useScrollBlock } from '@/hooks/useScrollBlock'

function Expenses() {
  const [conicGradient, setConicGradient] = useState('')
  const [bounded, setBounded] = useState(true)

  const operations = useSelector((state: RootState) => state.operations)
  const categories = useSelector((state: RootState) => state.categories)

  useEffect(() => {
    setConicGradient(getConicGradient())
  }, [operations])

  function getRandomPrecent() {
    return Math.round(Math.random() * 100)
  }

  const days = Array(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()).fill(getRandomPrecent())

  const expensesOperations = operations.filter((o) => o.value < 0)

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

  function getExpensesValue() {
    const value = expensesCategories.reduce((acc: number, curr: any) => acc + curr.value, 0)
    return Math.abs(value)
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
          percent: Number(Math.abs((curr.value / maxValue) * 100).toFixed(1)),
        },
      ]
    }, [])

    function getText() {
      let currPercent = 0

      const text = expensesCategoriesWithPercent.map((c: any, index: number) => {
        let text
        if (index === expensesCategoriesWithPercent.length - 1) {
          text = `${getColor(categories, c.name)} ${currPercent}% 100%`
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
      <h2 className={styles.title}>Расходы</h2>
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
        <div className={`${styles.sign} ${styles.expenses} ${bounded && styles.bounded}`}>
          <h5 className={styles.name}>Ваши траты</h5>
          <div
            className={styles.pie}
            style={{
              background: conicGradient,
            }}
          >
            <h3 className={styles.check}>
              <span className={styles.value}>{formatNumber(getExpensesValue())} </span>
              <span className={styles.currency}>₽</span>
            </h3>
            {!bounded && (
              <span className={`${styles.change} ${true && styles.lesion}`}>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 0.5L6.53109 4.25H0.468911L3.5 0.5Z" fill="#35CC5A" />
                </svg>
                <span>20%</span>
              </span>
            )}
          </div>
          <div className={styles.list}>
            {expensesCategories.map((c: any) => (
              <div className={styles.item} key={c.id}>
                <div className={styles.category}>
                  <div className={styles.icon} style={{ backgroundColor: getColor(categories, c.name) }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.8564 14H12.9127C13.4473 14 13.8864 13.5864 13.95 13.0645L15 2.57727H11.8182V0H10.5645V2.57727H7.40182L7.59273 4.06636C8.68091 4.36545 9.69909 4.90636 10.31 5.50455C11.2264 6.40818 11.8564 7.34364 11.8564 8.87091V14ZM1 13.3636V12.7273H10.5645V13.3636C10.5645 13.7073 10.2782 14 9.90909 14H1.63636C1.28636 14 1 13.7073 1 13.3636ZM10.5645 8.90909C10.5645 3.81818 1 3.81818 1 8.90909H10.5645ZM1 10.1818H10.5455V11.4545H1V10.1818Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h5 className={styles.name}>{c.name}</h5>
                  <h5 className={styles.check}>
                    <span className={styles.value}>{formatNumberWithSign(c.value)}</span>
                    <span className={styles.currency}>₽</span>
                  </h5>
                </div>
                <h5 className={styles.percent}>{Math.abs((c.value / getExpensesValue()) * 100).toFixed(1)}%</h5>
              </div>
            ))}
          </div>
          <div className={styles.shape} onClick={() => setBounded(false)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6192 7.84171C16.1116 7.3861 15.2884 7.3861 14.7808 7.84171L10.5 11.6834L6.21924 7.84171C5.71156 7.3861 4.88844 7.3861 4.38076 7.84171C3.87308 8.29732 3.87308 9.03601 4.38076 9.49163L9.58076 14.1583C10.0884 14.6139 10.9116 14.6139 11.4192 14.1583L16.6192 9.49163C17.1269 9.03601 17.1269 8.29732 16.6192 7.84171Z"
                fill="#CDCDD4"
              />
            </svg>
          </div>
        </div>
        <div className={`${styles.sign} ${styles.dynamic}`}>
          <h5 className={styles.name}>Динамика расходов</h5>
          <div className={styles.columns}>
            {days.map((d, index) => {
              const date = new Date().getDate()
              if (index + 1 < date) {
                return (
                  <div className={styles.column} key={index} style={{ height: `${Math.round(Math.random() * 100)}%` }}>
                    <h5>{index % 7 === 0 && index + 1}</h5>
                  </div>
                )
              } else {
                return (
                  <div className={styles.column} key={index}>
                    <h5>{index % 7 === 0 && index + 1}</h5>
                  </div>
                )
              }
            })}
          </div>
          <div className={styles.bottom}>
            <div className={styles.average}>
              <h5>Средние траты в день</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>
                  {formatNumber(Number((getExpensesValue() / days.length).toFixed(2)))}{' '}
                </span>
                <span className={styles.currency}>₽</span>
              </h3>
            </div>
            <div className={styles.comparison}>
              <h5>В сравнении с прошлым мес.</h5>
              <h3 className={styles.check}>
                <span className={styles.value}>+20 </span>
                <span className={styles.percent}>%</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expenses
