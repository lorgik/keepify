'use client'

import styles from './page.module.scss'
import { formatNumberWithSign } from '@/utils/formatting'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { Operation } from '@/lib/features/operations/operationsSlice'
import { Category } from '@/lib/features/categories/categoriesSlice'
import Icon from '@/entities/Icon/Icon'
import { getFormatDay } from '@/utils/dating'
import ArrowLeft from '@/assets/img/svg/ArrowLeft'
import ArrowRight from '@/assets/img/svg/ArrowRight'
import DateIcon from '@/assets/img/svg/DateIcon'
import CoinIcon from '@/assets/img/svg/CoinIcon'

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

    const days = [...operations].reverse().reduce<any>((acc, curr) => {
        if (acc.includes(curr.date.setHours(0, 0, 0, 0))) {
            return acc
        }
        return [...acc, curr.date.setHours(0, 0, 0, 0)]
    }, [])

    const operationsDays: OperationsDays[] = days.map((d: number) => {
        const op = [...operations].reverse().reduce<any>((acc, curr) => {
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

    console.log(operationsDays)

    return (
        <>
            <h2 className={styles.title}>История операций</h2>
            <div className={styles.month}>
                <button className={`${styles.btn} ${styles.left}`}>
                    <ArrowLeft />
                </button>
                <h4 className={styles.title}>август 2024</h4>
                <button className={`${styles.btn} ${styles.right}`}>
                    <ArrowRight />
                </button>
            </div>
            <div className={styles.transactions}>
                {operationsDays.length !== 0 &&
                    operationsDays.map((d, index) => (
                        <div className={styles.box} key={index}>
                            <div className={styles.head}>
                                <div className={styles.date}>
                                    <div className={styles.icon}>
                                        <DateIcon />
                                    </div>
                                    <h5 className={styles.day}>{getFormatDay(d.day)}</h5>
                                </div>
                                <div className={styles.result}>
                                    <div className={styles.icon}>
                                        <CoinIcon />
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
                                            <Icon category={categories.find((c) => c.name === o.category)} />
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
