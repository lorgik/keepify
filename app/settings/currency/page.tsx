import styles from './page.module.scss'
import ArrowRightIcon from '@/assets/img/svg/ArrowRightIcon'
import CurrenciesIcon from '@/assets/img/svg/CurrenciesIcon'

const currencies = [
    {
        title: '₽',
        src: '',
    },
    {
        title: '$',
        src: '',
    },
]

const CurrencyPage = () => {
    return (
        <>
            <h2 className={styles.title}>Валюта</h2>

            <div className={styles.currencies}>
                <div className={styles.list}>
                    {currencies.map((c) => (
                        <div className={styles.item} key={c.title}>
                            <div className={styles.info}>
                                <CurrenciesIcon />
                                <h5 className={styles.name}>{c.title}</h5>
                            </div>
                            <div className={styles.arrow}>
                                <ArrowRightIcon />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CurrencyPage
