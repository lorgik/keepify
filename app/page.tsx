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
import { formatNumber, operationsUnification } from '@/utils/formatting'
import Link from 'next/link'
import Carpet from '@/entities/Carpet/Carpet'
import ArrowUp from '@/assets/img/svg/ArrowUp'
import Information from '@/assets/img/svg/Information'
import KeepyCoin from '@/assets/img/svg/KeepyCoin'
import ArrowLeft from '@/assets/img/svg/ArrowLeft'
import ArrowRight from '@/assets/img/svg/ArrowRight'

const Home = () => {
    const [activeCard, setActiveCard] = useState(false)
    const operations = useSelector((state: RootState) => state.operations)
    const categories = useSelector((state: RootState) => state.categories)
    const [clientWidth, setClientWidth] = useState(0)
    const [cardsWidth, setCardsWidth] = useState(0)
    const [translateWidth, setTranslateWidth] = useState(0)
    const [isEvent, setIsEvent] = useState(false)

    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const width = document.documentElement.clientWidth
        setClientWidth(width)
        setCardsWidth(Number(cardsRef.current?.offsetWidth))
    }, [])

    useEffect(() => {
        console.log('activeCard changed')

        toggleCards()
    }, [activeCard])

    function scrollCards(e: any) {
        e.preventDefault()
        if (!isEvent) {
            setIsEvent(true)
            setActiveCard((prev) => !prev)
        }
        setTimeout(() => {
            setIsEvent(false)
        }, 1000)
    }

    function toggleCards() {
        if (activeCard) {
            if (clientWidth < cardsWidth) {
                setTranslateWidth(Math.abs(clientWidth - cardsWidth))
            }
        } else {
            setTranslateWidth(0)
        }
    }

    const expensesOperations = operations.filter((o) => o.value < 0)
    const incomeOperations = operations.filter((o) => o.value > 0)

    const expensesOperationsUnification = operationsUnification(expensesOperations)
    const incomeOperationsUnification = operationsUnification(incomeOperations)

    function getTotalValue(operations: Operation[]) {
        const value = operations.reduce((acc: number, curr: Operation) => acc + curr.value, 0)
        return Math.abs(value)
    }

    function getHalfDoghnutChart() {
        let offset = 0

        return expensesOperationsUnification.map((o: Operation, index: number) => {
            let percent = Math.round(Math.abs((o.value / getTotalValue(expensesOperationsUnification)) * 100))

            const circle = (
                <circle
                    className={styles.unit}
                    r="15.9"
                    cx="50%"
                    cy="50%"
                    key={o.category}
                    stroke={categories.find((c) => c.name === o.category)?.color}
                    strokeDasharray={`${percent !== 0 ? percent : 1} 100`}
                    strokeDashoffset={-offset}
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

    return (
        <>
            <Carpet />
            <Logo width={84} height={43} />
            <div className={styles.slider}>
                <div className={styles.cards} onWheel={scrollCards}>
                    <div
                        className={styles.inner}
                        ref={cardsRef}
                        style={{ transform: `translate3d(-${translateWidth}px, 0, 0)` }}
                    >
                        <div className={`${styles.card} ${styles.card1}`} onClick={() => setActiveCard(false)}>
                            <div className={styles.circle1}></div>
                            <div className={styles.circle2}></div>
                            <div className={styles.circle3}></div>
                            <div className={styles.info}>
                                <h5 className={styles.title}>Баланс</h5>
                                <h2 className={styles.check}>
                                    <span className={styles.currency}>₽</span>
                                    <span className={styles.value}>
                                        {formatNumber(
                                            Math.round(
                                                getTotalValue(incomeOperationsUnification) -
                                                    getTotalValue(expensesOperationsUnification)
                                            )
                                        )}
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
                {clientWidth < cardsWidth && (
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
                )}
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
                                <span className={styles.value}>
                                    {formatNumber(Math.round(getTotalValue(expensesOperationsUnification)))}{' '}
                                </span>
                                <span className={styles.currency}>₽</span>
                            </h3>
                        </div>
                        <div className={styles.tags}>
                            {expensesOperationsUnification.map((o: Operation) => (
                                <Tag key={o.category} color={categories.find((c) => c.name === o.category)?.color}>
                                    {o.category}
                                </Tag>
                            ))}
                        </div>
                        {/* <svg className={styles.doughnut} width="210" height="210" viewBox="0 0 50 50">
                            {getHalfDoghnutChart()}
                        </svg> */}
                    </Link>
                    <div className={`${styles.sign} ${styles.perDay}`}>
                        <Image src="/analytics-sign-blue-bg.png" alt="coins" width={143} height={88} priority />
                        <div className={styles.top}>
                            <h5 className={styles.title}>~В день</h5>
                            <h3 className={styles.check}>
                                <span className={styles.value}>
                                    {Math.round(getTotalValue(expensesOperationsUnification) / 30)}{' '}
                                </span>
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
                                <span className={styles.value}>
                                    {formatNumber(Math.round(getTotalValue(incomeOperationsUnification)))}
                                </span>
                                <span className={styles.currency}> ₽</span>
                            </h3>
                        </div>
                        <div className={styles.tags}>
                            {incomeOperationsUnification.map((o: Operation) => (
                                <Tag key={o.category} color={categories.find((c) => c.name === o.category)?.color}>
                                    {o.category}
                                </Tag>
                            ))}
                        </div>
                        <div className={styles.bar}>
                            {incomeOperationsUnification.map((o: Operation, index: number) => (
                                <div
                                    className={styles.scale}
                                    style={{
                                        width:
                                            Math.round((o.value / getTotalValue(incomeOperationsUnification)) * 100) +
                                            '%',
                                        backgroundColor: getColor(categories, o.category),
                                        zIndex: incomeOperationsUnification.length - index,
                                    }}
                                    key={o.category}
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
