'use client'
import { useSelector } from 'react-redux'
import styles from './page.module.scss'
import { RootState } from '@/lib/store'
import { formatNumber, formatNumberWithSign, operationsUnification } from '@/utils/formatting'
import Icon from '@/entities/Icon/Icon'
import { Operation } from '@/lib/features/operations/operationsSlice'
import ArrowLeft from '@/assets/img/svg/ArrowLeft'
import ArrowRight from '@/assets/img/svg/ArrowRight'
import ArrowUp from '@/assets/img/svg/ArrowUp'

function Income() {
    const operations = useSelector((state: RootState) => state.operations)
    const categories = useSelector((state: RootState) => state.categories)

    const incomeOperations = operations.filter((o) => o.value > 0)

    const incomeOperationsUnification = operationsUnification(incomeOperations)

    function getIncomeValue() {
        const value = incomeOperationsUnification.reduce((acc: number, curr: Operation) => acc + curr.value, 0)
        return value
    }

    // function getRandomPrecent() {
    //     return Math.round(Math.random() * 100)
    // }

    // const days = Array(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()).fill(getRandomPrecent())

    return (
        <>
            <h2 className={styles.title}>Доходы</h2>
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
                <div className={`${styles.sign} ${styles.exincomepenses}`}>
                    <div className={styles.info}>
                        <h5 className={styles.name}>Ваши доходы</h5>
                        <h3 className={styles.check}>
                            <span className={styles.value}>{formatNumber(getIncomeValue())} </span>
                            <span className={styles.currency}>₽</span>
                        </h3>
                        <span className={`${styles.change} ${true && styles.lesion}`}>
                            <ArrowUp />
                            <span>18%</span>
                        </span>
                    </div>

                    {/* <div className={styles.circles}>
                        {incomeOperationsUnification.map((o: Operation) => (
                            <div
                                className={styles.category}
                                style={{
                                    backgroundColor: getColor(categories, c.name),
                                    width: `${(c.value / getIncomeValue()) * 74.838709677}%`,
                                    height: `${(c.value / getIncomeValue()) * 100}%`,
                                }}
                                key={o.category}
                            >
                                <div className={styles.icon}>
                                    <svg
                                        width="17"
                                        height="16"
                                        viewBox="0 0 17 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.3564 14H13.4127C13.9473 14 14.3864 13.5864 14.45 13.0645L15.5 2.57727H12.3182V0H11.0645V2.57727H7.90182L8.09273 4.06636C9.18091 4.36545 10.1991 4.90636 10.81 5.50455C11.7264 6.40818 12.3564 7.34364 12.3564 8.87091V14ZM1.5 13.3636V12.7273H11.0645V13.3636C11.0645 13.7073 10.7782 14 10.4091 14H2.13636C1.78636 14 1.5 13.7073 1.5 13.3636ZM11.0645 8.90909C11.0645 3.81818 1.5 3.81818 1.5 8.90909H11.0645ZM1.5 10.1818H11.0455V11.4545H1.5V10.1818Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <h4 className={styles.check}>
                                    <span className={styles.value}>{formatNumberWithSign(c.value)} </span>
                                    <span className={styles.currency}>₽</span>
                                </h4>
                                <h6 className={styles.name}>{o.category}</h6>
                            </div>
                        ))}
                    </div> */}
                    <div className={styles.list}>
                        {incomeOperationsUnification.map((o: Operation) => (
                            <div className={styles.item} key={o.id}>
                                <div className={styles.category}>
                                    <Icon category={categories.find((cat) => cat.name === o.category)} />
                                    <h5 className={styles.name}>{o.category}</h5>
                                    <h5 className={styles.check}>
                                        <span className={styles.value}>{formatNumberWithSign(o.value)}</span>
                                        <span className={styles.currency}>₽</span>
                                    </h5>
                                </div>
                                <h5 className={styles.percent}>
                                    {Math.abs((o.value / getIncomeValue()) * 100).toFixed(1)}%
                                </h5>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.sign} ${styles.dynamic}`}>
                    <h5 className={styles.name}>Динамика доходов</h5>
                    {/* <div className={styles.diagram}></div>
                    <div className={styles.columns}>
                        {days.map((d, index) => (
                            <div className={styles.column} key={index}>
                                <div
                                    className={styles.line}
                                    style={{ height: `${100 - Math.round(Math.random() * 100)}%` }}
                                ></div>
                                <h5>{index % 7 === 0 && index + 1}</h5>
                            </div>
                        ))}
                    </div> */}
                    <div className={styles.bottom}>
                        <div className={styles.comparison}>
                            <h5>В сравнении с прошлым мес.</h5>
                            <h3 className={styles.check}>
                                <span className={styles.value}>+18 </span>
                                <span className={styles.percent}>%</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Income
