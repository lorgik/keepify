import { useState } from 'react'
import Image from 'next/image'
import styles from './Banner.module.scss'
import TelegramIcon from '@/assets/img/svg/TelegramIcon'
import WaitingIcon from '@/assets/img/svg/WaitingIcon'

type Props = {
    title: string
    description: string
    btnIcon: string
    btnText: string
    setIsShowBanner: (isShowBanner: boolean) => void
}

const banners = [
    {
        title: 'TelegramIcon',
        icon: <TelegramIcon />,
        bg: (
            <div className={styles.bg}>
                <Image
                    className={styles.logo}
                    src={'/keepy-logo-bg.png'}
                    alt="keepy logo"
                    width={290}
                    height={303}
                    priority
                />
                <Image
                    className={styles.tg}
                    src={'/keepy-tg-bg.png'}
                    alt="keepy tg"
                    width={416}
                    height={416}
                    priority
                />
            </div>
        ),
    },
    {
        title: 'WaitingIcon',
        icon: <WaitingIcon />,
        bg: (
            <div className={styles.back}>
                <Image
                    className={styles.coin}
                    src={'/keepy-coin-bg.png'}
                    alt="keepy coin"
                    width={126}
                    height={143}
                    priority
                />
                <Image
                    className={styles.coins}
                    src={'/keepy-coins-bg.png'}
                    alt="keepy coins"
                    width={209}
                    height={263}
                    priority
                />
            </div>
        ),
    },
]

const Banner = ({ title, description, btnIcon, btnText, setIsShowBanner }: Props) => {
    const [isShowBannerClosing, setIsShowBannerClosing] = useState(false)

    const Icon = () => banners.find((b) => b.title === btnIcon)?.icon
    const Bg = () => banners.find((b) => b.title === btnIcon)?.bg

    return (
        <div className={`${styles.banner} ${isShowBannerClosing && styles.closing}`}>
            <Bg />
            <h3 className={styles.title}>{title}</h3>
            <h5 className={`${styles.text} ${btnIcon === banners[1].title && styles.orange}`}>{description}</h5>
            <button
                className={`${styles.btn} ${btnIcon === banners[1].title && styles.orange}`}
                onClick={() => {
                    setIsShowBannerClosing(true)
                    setTimeout(() => {
                        setIsShowBanner(false)
                        setIsShowBannerClosing(false)
                    }, 250)
                }}
            >
                <Icon />
                <h4>{btnText}</h4>
            </button>
        </div>
    )
}

export default Banner
