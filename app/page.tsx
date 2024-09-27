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
import Carpet from '@/entities/Carpet/Carpet'
import ArrowUp from '@/assets/img/svg/ArrowUp'
import Information from '@/assets/img/svg/Information'
import KeepyCoin from '@/assets/img/svg/KeepyCoin'
import ArrowLeft from '@/assets/img/svg/ArrowLeft'
import ArrowRight from '@/assets/img/svg/ArrowRight'

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
            <Carpet />
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
                                <ArrowUp />
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
                                        <KeepyCoin size="28" color="#FFFFFF" />
                                    </span>
                                    <span className={styles.value}>{formatNumber(3400)}</span>
                                </h2>
                            </div>
                            <div className={styles.extra}>
                                <Information />
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
                        <ArrowLeft />
                    </button>
                    <h4 className={styles.title}>август 2024</h4>
                    <button className={`${styles.btn} ${styles.right}`}>
                        <ArrowRight />
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
