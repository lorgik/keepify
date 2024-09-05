'use client'

import { useContext, useEffect } from 'react'
import styles from './page.module.scss'
import { WrapperContext } from '@/components/Wrapper/Wrapper'
import { formatNumberWithSign } from '@/utils/formatting'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { Operation } from '@/lib/features/operations/operationsSlice'
import { Category } from '@/lib/features/categories/categoriesSlice'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import Icon from '@/entities/Icon/Icon'

type OperationsDays = {
  day: Date
  op: Op[]
}

type Op = {
  category: string
  value: number
}

function Operations() {
  const operations: Operation[] = useSelector((state: RootState) => state.operations)
  const categories: Category[] = useSelector((state: RootState) => state.categories)

  const days = operations.toReversed().reduce<any>((acc, curr) => {
    if (acc.includes(curr.date.setHours(0, 0, 0, 0))) {
      return acc
    }
    return [...acc, curr.date.setHours(0, 0, 0, 0)]
  }, [])

  const operationsDays: OperationsDays[] = days.map((d: number) => {
    const op = operations.toReversed().reduce<any>((acc, curr) => {
      if (curr.date.setHours(0, 0, 0, 0) === d) {
        acc.push({ category: curr.category, value: curr.value })
      }
      return acc
    }, [])

    return {
      day: new Date(d),
      op,
    }
  })

  function getColor(category: string) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === category) {
        return categories[i].color
      }
    }
  }

  function getWeekDay(date: Date) {
    let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    return days[date.getDay()]
  }

  function getMonthWithEnding(date: Date) {
    let month = date.toLocaleString('default', { month: 'long' })
    let value = date.getMonth()

    if (value === 2 || value === 7) {
      return `${month}а`
    }
    return `${month.slice(0, -1)}я`
  }

  function getFormatDay(date: Date) {
    return `${getWeekDay(date)}, ${date.getDate()} ${getMonthWithEnding(date)}`
  }

  return (
    <>
      <h2 className={styles.title}>История операций</h2>
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
      <div className={styles.transactions}>
        {operationsDays.length !== 0 &&
          operationsDays.map((d) => (
            <div className={styles.box}>
              <div className={styles.head}>
                <div className={styles.date}>
                  <div className={styles.icon}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 1.575C0 0.705152 0.783502 0 1.75 0H12.25C13.2165 0 14 0.705152 14 1.575V3.15H0V1.575Z"
                        fill="#007AFF"
                      />
                      <path
                        d="M0 4.2H14V12.425C14 13.2948 13.2165 14 12.25 14H1.75C0.783502 14 0 13.2948 0 12.425V4.2Z"
                        fill="#007AFF"
                      />
                    </svg>
                  </div>
                  <h5 className={styles.day}>{getFormatDay(d.day)}</h5>
                </div>
                <div className={styles.result}>
                  <div className={styles.icon}>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_24_915)">
                        <rect y="0.5" width="14" height="14.9999" rx="6.99998" fill="#FF8400" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.99998 14.5C10.8659 14.5 14 11.366 14 7.49998C14 3.634 10.8659 0.5 6.99998 0.5C3.13402 0.5 0 3.634 0 7.49998C0 11.366 3.13402 14.5 6.99998 14.5ZM6.99998 11.5C9.20914 11.5 11 9.70911 11 7.49998C11 5.29084 9.20914 3.49999 6.99998 3.49999C4.79082 3.49999 2.99999 5.29084 2.99999 7.49998C2.99999 9.70911 4.79082 11.5 6.99998 11.5Z"
                          fill="#FFCE9B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_24_915">
                          <rect width="14" height="14.9999" fill="white" transform="translate(0 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h5 className={styles.check}>
                    <span className={styles.value}>
                      {formatNumberWithSign(d.op.reduce((acc, curr) => acc + curr.value, 0))}
                    </span>
                    <span className={styles.currenct}>₽</span>
                  </h5>
                </div>
              </div>

              <div className={styles.list}>
                {d.op.map((o, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.category}>
                      <Icon color={getColor(o.category)} />
                      <h5 className={styles.name}>{o.category}</h5>
                    </div>
                    <h5 className={styles.check}>
                      <span className={styles.value}>{formatNumberWithSign(o.value)}</span>
                      <span className={styles.currency}>₽</span>
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Operations
