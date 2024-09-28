'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { Operation } from '@/lib/features/operations/operationsSlice'
import { formatNumber, formatNumberWithSign } from '@/utils/formatting'
import Icon from '@/entities/Icon/Icon'
import ArrowLeft from '@/assets/img/svg/ArrowLeft'
import ArrowRight from '@/assets/img/svg/ArrowRight'
import ArrowUp from '@/assets/img/svg/ArrowUp'
import ArrowDown from '@/assets/img/svg/ArrowDown'
import { Category } from '@/lib/features/categories/categoriesSlice'

function Expenses() {
    const [bounded, setBounded] = useState(true)
    const [currentCategory, setCurrentCategory] = useState<Category>()
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

    const operations = useSelector((state: RootState) => state.operations)
    const categories = useSelector((state: RootState) => state.categories)

    const expensesOperations = operations.filter((o) => o.value < 0)

    const expensesOperationsUnification = expensesOperations.reduce(
        (acc: Operation[], curr: Operation): Operation[] => {
            if (
                acc.findIndex((o) => {
                    return o.category === curr.category
                }) === -1
            ) {
                acc.push(curr)
            } else {
                let findedIndex = acc.findIndex((o) => o.category === curr.category)

                acc.splice(findedIndex, 1, {
                    ...curr,
                    value: curr.value + acc[findedIndex].value,
                })
            }
            return acc
        },
        []
    )

    // const days = Array(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()).fill(getRandomPercent())

    function getRandomPercent() {
        return Math.round(Math.random() * 100)
    }

    function getExpensesValue() {
        const value = expensesOperationsUnification.reduce((acc: number, curr: Operation) => acc + curr.value, 0)
        return Math.abs(value)
    }

    function getDoghnutChart() {
        let offset = 0

        return expensesOperationsUnification.map((o: Operation, index: number) => {
            let percent = Math.round(Math.abs((o.value / getExpensesValue()) * 100))

            const circle = (
                <circle
                    className={styles.unit}
                    r="15.9"
                    cx="50%"
                    cy="50%"
                    key={o.value}
                    stroke={categories.find((c) => c.name === o.category)?.color}
                    strokeDasharray={`${percent !== 0 ? percent : 1} 100`}
                    strokeDashoffset={-offset}
                    onClick={(e) => {
                        setCurrentCategory(categories.find((c) => c.name === o.category))
                        setTooltipPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
                    }}
                />
            )

            if (percent === 0) {
                offset = Number(offset + 1)
            } else {
                offset = Number(offset + percent)
            }

            return circle
        })
    }

    const CurrentIcon = categories.find((c) => c?.name === currentCategory?.name)?.image

    return (
        <>
            <h2 className={styles.title}>Расходы</h2>
            <div className={styles.month}>
                <button className={`${styles.btn} ${styles.left}`}>
                    <ArrowLeft />
                </button>
                <h4 className={styles.title}>август 2024</h4>
                <button className={`${styles.btn} ${styles.right}`}>
                    <ArrowRight />
                </button>
            </div>

            <div className={styles.signs}>
                <div className={`${styles.sign} ${styles.expenses} ${bounded && styles.bounded}`}>
                    <h5 className={styles.name}>Ваши траты</h5>

                    <div className={styles.canvas}>
                        <svg className={styles.doughnut} width="350" height="350" viewBox="0 0 50 50">
                            {getDoghnutChart()}
                        </svg>
                        <div className={styles.info}>
                            <h3 className={styles.check}>
                                <span className={styles.value}>{formatNumber(getExpensesValue())} </span>
                                <span className={styles.currency}>₽</span>
                            </h3>
                            <span className={`${styles.change} ${true && styles.lesion}`}>
                                <ArrowUp />
                                <span>20%</span>
                            </span>
                        </div>
                        {currentCategory && (
                            <div className={styles.tooltip} style={{ left: tooltipPosition.x, top: tooltipPosition.y }}>
                                <div className={styles.icon} style={{ backgroundColor: currentCategory?.color }}>
                                    {<CurrentIcon />}
                                </div>
                                <h4 className={styles.check}>
                                    <span className={styles.value}>
                                        {formatNumberWithSign(
                                            expensesOperationsUnification.find(
                                                (o) => o.category === currentCategory.name
                                            )!.value
                                        )}
                                    </span>
                                    <span className={styles.currency}> ₽</span>
                                </h4>
                                <h6 className={styles.name}>{currentCategory?.name}</h6>
                            </div>
                        )}
                    </div>

                    <div className={styles.list}>
                        {expensesOperationsUnification.map((o: Operation) => (
                            <div className={styles.item} key={o.id}>
                                <div className={styles.category}>
                                    <Icon category={categories.find((c) => c.name === o.category)} />
                                    <h5 className={styles.name}>{o.category}</h5>
                                    <h5 className={styles.check}>
                                        <span className={styles.value}>{formatNumberWithSign(o.value)}</span>
                                        <span className={styles.currency}>₽</span>
                                    </h5>
                                </div>
                                <h5 className={styles.percent}>
                                    {Math.abs((o.value / getExpensesValue()) * 100).toFixed(1) === '0.0'
                                        ? '~0.1'
                                        : Math.abs((o.value / getExpensesValue()) * 100).toFixed(1)}
                                    %
                                </h5>
                            </div>
                        ))}
                    </div>
                    <div className={styles.shape} onClick={() => setBounded(false)}>
                        <ArrowDown />
                    </div>
                </div>
                <div className={`${styles.sign} ${styles.dynamic}`}>
                    <h5 className={styles.name}>Динамика расходов</h5>
                    {/* <div className={styles.columns}>
                        {days.map((d, index) => {
                            const date = new Date().getDate()
                            if (index + 1 < date) {
                                return (
                                    <div
                                        className={styles.column}
                                        key={index}
                                        style={{ height: `${Math.round(Math.random() * 100)}%` }}
                                    >
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
                    </div> */}
                    <div className={styles.bottom}>
                        {/* <div className={styles.average}>
                            <h5>Средние траты в день</h5>
                            <h3 className={styles.check}>
                                <span className={styles.value}>
                                    {formatNumber(Number((getExpensesValue() / days.length).toFixed(2)))}{' '}
                                </span>
                                <span className={styles.currency}>₽</span>
                            </h3>
                        </div> */}
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
