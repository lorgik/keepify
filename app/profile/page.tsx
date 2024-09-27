'use client'

import Logo from '@/components/Logo/Logo'
import { useState } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import { formatNumber } from '@/utils/formatting'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useScrollBlock } from '@/hooks/useScrollBlock'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { User } from '@/lib/features/user/userSlice'
import Popup from '@/components/Popup/Popup'
import Carpet from '@/entities/Carpet/Carpet'
import StarIcon from '@/assets/img/svg/StarIcon'
import KeepyCoin from '@/assets/img/svg/KeepyCoin'
import ChumsIcon from '@/assets/img/svg/ChumsIcon'
import WaitingIcon from '@/assets/img/svg/WaitingIcon'
import TasksArrowRight from '@/assets/img/svg/TasksArrowRight'
import ArrowUp from '@/assets/img/svg/ArrowUp'
import TelegramIcon from '@/assets/img/svg/TelegramIcon'
import TasksCheckIcon from '@/assets/img/svg/TasksCheckIcon'

const tasks = [
    {
        imageName: 'daily',
        title: 'Ежедневный бонус',
        description: 'Описание',
        reward: 340,
    },
    {
        imageName: 'friend',
        title: 'Пригласите 1 друга',
        description: 'Описание',
        reward: 500,
    },
    {
        imageName: 'friends',
        title: 'Пригласите 3 друзей',
        description: 'Описание',
        reward: 2500,
    },
    {
        imageName: 'tg',
        title: 'Подпишитесь на telegram канал Keepify',
        description: 'Описание',
        reward: 2500,
    },
]

const friends = [
    {
        imageName: 'ainur',
        name: 'Айнур Сибагатуллин',
        profit: 3143,
        bonus: 680,
    },
    {
        imageName: 'max',
        name: 'Макс Александров',
        profit: -120,
        bonus: 340,
    },
    {
        imageName: 'kolya',
        name: 'Коля Латыш',
        profit: 12659,
        bonus: 340,
    },
]

function Profile() {
    const [isShowBanner, setIsShowBanner] = useState(true)
    const [isShowBannerClosing, setIsShowBannerClosing] = useState(false)
    const [isTaskOpen, setIsTaskOpen] = useState(false)
    const { setIsScrollBlock } = useScrollBlock(false)
    const [isTaskOpenClosing, setIsTaskOpenClosing] = useState(false)
    const [currentTask, setCurrentTask] = useState(tasks[0])

    const user: User = useSelector((state: RootState) => state.user)

    const taskRef = useOutsideClick(closeTask)

    function closeTask() {
        setIsTaskOpenClosing(true)

        setTimeout(() => {
            setIsTaskOpen(false)
            setIsScrollBlock(false)
            setIsTaskOpenClosing(false)
        }, 150)
    }

    return (
        <>
            <Carpet />
            <Logo width={84} height={43} />
            <div className={styles.info}>
                <div className={styles.avatar}>
                    {user.imageUrl ? (
                        <Image src={user.imageUrl} alt={'avatar'} width={105} height={105} priority />
                    ) : (
                        <Image src={'/avatar.jpg'} alt={'avatar'} width={105} height={105} priority />
                    )}
                </div>
                <div className={styles.bio}>
                    <h3 className={styles.name}>
                        {user.firstName} {user.lastName}
                        <div className={styles.icon}>
                            <StarIcon />
                        </div>
                    </h3>
                    <h5 className={styles.nickname}>@{user.username}</h5>
                </div>
            </div>
            <div className={styles.features}>
                <h4 className={`${styles.feature} ${styles.coins}`}>
                    <KeepyCoin size="18" color="#FFFFFF" />
                    <span>{formatNumber(3400)}</span>
                </h4>
                <h4 className={`${styles.feature} ${styles.chums}`}>
                    <ChumsIcon />
                    <span>3</span>
                </h4>
                <h4 className={`${styles.feature} ${styles.courses}`}>
                    <KeepyCoin size="18" color="#FFFFFF" />
                    <span>0</span>
                </h4>
            </div>

            <div className={styles.content}>
                {isShowBanner && (
                    <div className={`${styles.banner} ${isShowBannerClosing && styles.closing}`}>
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
                        <h3 className={styles.title}>Keepify School</h3>
                        <h5 className={styles.text}>
                            Обменивай свои коины на полезные материалы и скидки на курсы по финансовой грамотности от
                            топовых экспертов индустрии
                        </h5>
                        <button
                            className={styles.btn}
                            onClick={() => {
                                setIsShowBannerClosing(true)
                                setTimeout(() => {
                                    setIsShowBanner(false)
                                    setIsScrollBlock(false)
                                    setIsShowBannerClosing(false)
                                }, 250)
                            }}
                        >
                            <WaitingIcon />
                            <h4>Будет позже</h4>
                        </button>
                    </div>
                )}
                <div className={styles.tasks}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Задания</h3>
                        <h5 className={styles.description}>Выполняйте задания, чтобы заработать еще больше коинов</h5>
                    </div>
                    <div className={styles.list}>
                        {tasks.map((t) => (
                            <div
                                className={styles.task}
                                key={t.title}
                                onClick={() => {
                                    setIsTaskOpen(true)
                                    setIsScrollBlock(true)
                                    setCurrentTask(t)
                                }}
                            >
                                <div className={styles.basic}>
                                    <Image
                                        src={`/tasks-${t.imageName}-icon.png`}
                                        alt={'icon'}
                                        width={44}
                                        height={44}
                                        priority
                                    />
                                    <h5>
                                        <span className={styles.title}>{t.title}</span>
                                        <span className={styles.reward}>
                                            <KeepyCoin size="13" color="#FFFFFF" />
                                            <span>+ {formatNumber(t.reward)}</span>
                                        </span>
                                    </h5>
                                </div>
                                <TasksArrowRight />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.friends}>
                    <div className={styles.top}>
                        <h3 className={styles.title}>Друзья</h3>
                        <h5 className={styles.description}>
                            Приглашайте друзей и получайте бонусы за них, и их друзей
                        </h5>
                    </div>
                    <div className={styles.list}>
                        {friends.map((f) => (
                            <div className={styles.friend} key={f.name}>
                                <div className={styles.basic}>
                                    <Image
                                        src={`/friends-${f.imageName}-avatar.png`}
                                        alt={'icon'}
                                        width={44}
                                        height={44}
                                        priority
                                    />
                                    <h5>
                                        <span className={styles.name}>{f.name}</span>
                                        <span className={`${styles.change} ${f.profit < 0 && styles.lesion}`}>
                                            <ArrowUp />
                                            <span>{formatNumber(Math.abs(f.profit))} ₽</span>
                                        </span>
                                    </h5>
                                </div>
                                <h5 className={styles.bonus}>
                                    <KeepyCoin size="13" color="#FF8400" />
                                    <span>+ {formatNumber(f.bonus)}</span>
                                </h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Popup isPopupOpen={isTaskOpen} isPopupClosing={isTaskOpenClosing} isOver={true} propRef={taskRef}>
                <div className={styles.inner}>
                    <Image
                        src={`/tasks-${currentTask.imageName}-icon.png`}
                        alt={currentTask.imageName}
                        width={104}
                        height={104}
                    />
                    <h3>{currentTask.title}</h3>
                    <h5>{currentTask.description}</h5>
                    <span className={styles.reward}>
                        <KeepyCoin size="13" color="#FFFFFF" />
                        <h4>+ {formatNumber(currentTask.reward)}</h4>
                    </span>
                    <button className={styles.btn} onClick={closeTask}>
                        <TelegramIcon />
                        <h4>Подписаться</h4>
                    </button>
                    <button className={styles.btn} onClick={closeTask}>
                        <TasksCheckIcon />
                        <h4>Проверить</h4>
                    </button>
                </div>
            </Popup>
        </>
    )
}

export default Profile
