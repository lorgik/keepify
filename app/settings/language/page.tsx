import LanguageIcon from '@/assets/img/svg/LanguageIcon'
import styles from './page.module.scss'
import ArrowRightIcon from '@/assets/img/svg/ArrowRightIcon'

const languages = [
    {
        title: 'English',
        src: '',
    },
    {
        title: 'Русский',
        src: '',
    },
    {
        title: 'Татар',
        src: '',
    },
]

const LanguagePage = () => {
    return (
        <>
            <h2 className={styles.title}>Язык</h2>

            <div className={styles.languages}>
                <div className={styles.list}>
                    {languages.map((l) => (
                        <div className={styles.item} key={l.title}>
                            <div className={styles.info}>
                                <div className={`${styles.icon} ${styles.blue}`}>
                                    <LanguageIcon />
                                </div>
                                <h5 className={styles.name}>{l.title}</h5>
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

export default LanguagePage
