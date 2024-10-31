'use client'

import { WrapperContext } from '@/components/Wrapper/Wrapper'
import { useContext, useState } from 'react'
import styles from './page.module.scss'
import Switch from '@/components/Switch/Switch'
import CategoriesIcon from '@/assets/img/svg/CategoriesIcon'
import ArrowRightIcon from '@/assets/img/svg/ArrowRightIcon'
import CurrenciesIcon from '@/assets/img/svg/CurrenciesIcon'
import CommunityIcon from '@/assets/img/svg/CommunityIcon'
import SettingsTelegramIcon from '@/assets/img/svg/SettingsTelegramIcon'
import LanguageIcon from '@/assets/img/svg/LanguageIcon'
import ThemeIcon from '@/assets/img/svg/ThemeIcon'
import NotificationIcon from '@/assets/img/svg/NotificationIcon'
import SoundIcon from '@/assets/img/svg/SoundIcon'
import VibrationIcon from '@/assets/img/svg/VibrationIcon'
import HeartIcon from '@/assets/img/svg/HeartIcon'
import MessageIcon from '@/assets/img/svg/MessageIcon'
import Link from 'next/link'
import Banner from '@/components/Banner/Banner'

function Settings() {
    const [isShowBanner, setIsShowBanner] = useState(true)
    const { theme, setTheme } = useContext(WrapperContext)

    function switchTheme() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <>
            <h2 className={styles.title}>Настройки</h2>

            <div className={styles.settings}>
                {isShowBanner ? (
                    <Banner
                        title="Подпишись на Keepify в Telegram"
                        description="И разблокируй премиум функции приложения"
                        btnIcon="TelegramIcon"
                        btnText="Подписаться"
                        setIsShowBanner={setIsShowBanner}
                    />
                ) : (
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.info}>
                                <SettingsTelegramIcon />
                                <h5 className={styles.name}>Telegram канал Keepify</h5>
                            </div>
                            <div className={styles.arrow}>
                                <ArrowRightIcon />
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.info}>
                                <div className={`${styles.icon} ${styles.orange}`}>
                                    <CommunityIcon />
                                </div>
                                <h5 className={styles.name}>Сообщество и чат</h5>
                            </div>
                            <div className={styles.arrow}>
                                <ArrowRightIcon />
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <CategoriesIcon />
                            <h5 className={styles.name}>Категории</h5>
                        </div>
                        <div className={styles.arrow}>
                            <ArrowRightIcon />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <CurrenciesIcon />
                            <h5 className={styles.name}>Валюта</h5>
                        </div>
                        <Link className={styles.arrow} href={'/settings/currency'}>
                            <ArrowRightIcon />
                        </Link>
                    </div>
                </div>

                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <div className={`${styles.icon} ${styles.blue}`}>
                                <LanguageIcon />
                            </div>
                            <h5 className={styles.name}>Язык</h5>
                        </div>
                        <Link className={styles.arrow} href={'/settings/language'}>
                            <ArrowRightIcon />
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <ThemeIcon />
                            <h5 className={styles.name}>Внешний вид</h5>
                        </div>
                        <Switch isChecked={theme === 'dark'} handleToggle={switchTheme} />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <NotificationIcon />
                            <h5 className={styles.name}>Уведомления</h5>
                        </div>
                        <Switch isChecked handleToggle={() => {}} />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <div className={`${styles.icon} ${styles.blue}`}>
                                <SoundIcon />
                            </div>
                            <h5 className={styles.name}>Звуки</h5>
                        </div>
                        <Switch isChecked handleToggle={() => {}} />
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <div className={`${styles.icon} ${styles.orange}`}>
                                <VibrationIcon />
                            </div>
                            <h5 className={styles.name}>Вибрация</h5>
                        </div>
                        <Switch isChecked handleToggle={() => {}} />
                    </div>
                </div>

                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <div className={`${styles.icon} ${styles.red}`}>
                                <HeartIcon />
                            </div>
                            <h5 className={styles.name}>Поддержать проект</h5>
                        </div>
                        <div className={styles.arrow}>
                            <ArrowRightIcon />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.info}>
                            <div className={`${styles.icon} ${styles.blue}`}>
                                <MessageIcon />
                            </div>
                            <h5 className={styles.name}>Написать автору</h5>
                        </div>
                        <div className={styles.arrow}>
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings
