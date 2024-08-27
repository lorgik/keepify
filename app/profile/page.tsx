'use client'

import Logo from '@/components/Logo/Logo'
import { WrapperContext } from '@/components/Wrapper/Wrapper'
import { useContext, useEffect, useState } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import { formatNumber } from '@/utils/formatting'
import { useOutsideClick } from '@/hooks/useOutsideClick'

const tasks = [
  {
    imageName: 'daily',
    title: 'Ежедневный бонус',
    reward: 340,
  },
  {
    imageName: 'friend',
    title: 'Пригласите 1 друга',
    reward: 500,
  },
  {
    imageName: 'friends',
    title: 'Пригласите 3 друзей',
    reward: 2500,
  },
  {
    imageName: 'tg',
    title: 'Подпишитесь на telegram канал Keepify',
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
  const [isTaskOpen, setIsTaskOpen] = useState(false)
  const [isTaskOpenClosing, setIsTaskOpenClosing] = useState(false)
  const { setIsPopupOpen } = useContext(WrapperContext)

  const taskRef = useOutsideClick(closeTask)

  useEffect(() => {
    setIsPopupOpen(false)
  }, [])

  function closeTask() {
    setIsTaskOpenClosing(true)

    setTimeout(() => {
      setIsTaskOpen(false)
      setIsTaskOpenClosing(false)
    }, 150)
  }

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.bottom}></div>
      </div>
      <Logo width={84} height={43} />
      <div className={styles.info}>
        <Image src={'/avatar.png'} alt={'avatar'} width={105} height={105} priority />
        <div className={styles.bio}>
          <h3 className={styles.name}>
            Роберт Шамсиев
            <div className={styles.icon}>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.78098 1.48024L4.10587 0.350388C3.82672 -0.116796 3.17328 -0.116796 2.89413 0.350388L2.21902 1.48024C2.12081 1.64462 1.96478 1.76258 1.78419 1.80898L0.542902 2.12794C0.0296407 2.25983 -0.172285 2.9065 0.168452 3.32712L0.992502 4.34437C1.11239 4.49237 1.17198 4.68323 1.15859 4.87628L1.06654 6.20327C1.02848 6.75196 1.55713 7.15162 2.04686 6.9444L3.23126 6.44324C3.40357 6.37033 3.59643 6.37033 3.76874 6.44324L4.95314 6.9444C5.44287 7.15162 5.97152 6.75196 5.93346 6.20327L5.84141 4.87628C5.82802 4.68323 5.88761 4.49237 6.0075 4.34437L6.83155 3.32712C7.17228 2.9065 6.97036 2.25983 6.4571 2.12794L5.21581 1.80898C5.03522 1.76258 4.8792 1.64462 4.78098 1.48024Z"
                  fill="white"
                />
              </svg>
            </div>
          </h3>
          <h5 className={styles.nickname}>@rsbvgz</h5>
        </div>
      </div>
      <div className={styles.features}>
        <h4 className={`${styles.feature} ${styles.coins}`}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.78786 8.5C2.78786 11.6547 5.34527 14.2121 8.5 14.2121C11.6547 14.2121 14.2121 11.6547 14.2121 8.5C14.2121 5.34527 11.6547 2.78786 8.5 2.78786C5.34527 2.78786 2.78786 5.34527 2.78786 8.5ZM9.59013 6.61047L9.01561 5.68642C8.77805 5.30434 8.22195 5.30434 7.98439 5.68642L7.40987 6.61047C7.32628 6.7449 7.1935 6.84137 7.03982 6.87932L5.98346 7.14019C5.54667 7.24805 5.37483 7.77692 5.6648 8.12093L6.36608 8.95288C6.4681 9.07392 6.51882 9.23001 6.50742 9.3879L6.42909 10.4732C6.39669 10.9219 6.84658 11.2488 7.26336 11.0793L8.2713 10.6694C8.41794 10.6098 8.58206 10.6098 8.7287 10.6694L9.73664 11.0793C10.1534 11.2488 10.6033 10.9219 10.5709 10.4732L10.4926 9.3879C10.4812 9.23001 10.5319 9.07392 10.6339 8.95288L11.3352 8.12093C11.6252 7.77692 11.4533 7.24805 11.0165 7.14019L9.96018 6.87932C9.8065 6.84137 9.67372 6.7449 9.59013 6.61047Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5ZM15.1786 8.5C15.1786 12.1885 12.1885 15.1786 8.5 15.1786C4.81153 15.1786 1.82143 12.1885 1.82143 8.5C1.82143 4.81153 4.81153 1.82143 8.5 1.82143C12.1885 1.82143 15.1786 4.81153 15.1786 8.5Z"
              fill="white"
            />
          </svg>
          <span>{formatNumber(3400)}</span>
        </h4>
        <h4 className={`${styles.feature} ${styles.cars}`}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3373 13.2979C13.4028 13.682 13.7187 14 14.1162 14H14.8359C15.2334 14 15.5626 13.6814 15.4899 13.2986C15.1538 11.5307 13.571 10.1923 11.6692 10.1923C11.4967 10.1923 11.4293 10.4467 11.5701 10.5443C12.49 11.1821 13.144 12.1636 13.3373 13.2979Z"
              fill="white"
            />
            <path
              d="M9.94186 5.96154C9.94186 7.59715 8.58849 8.92308 6.91903 8.92308C5.24957 8.92308 3.89621 7.59715 3.89621 5.96154C3.89621 4.32593 5.24957 3 6.91903 3C8.58849 3 9.94186 4.32593 9.94186 5.96154Z"
              fill="white"
            />
            <path
              d="M9.96004 9.39821C9.48166 9.27419 9.47891 8.67968 9.79568 8.30721C10.3363 7.67148 10.6616 6.85372 10.6616 5.96154C10.6616 5.47739 10.5658 5.01516 10.3918 4.59204C10.3043 4.37918 10.4273 4.12821 10.6616 4.12821C12.172 4.12821 13.3965 5.32785 13.3965 6.80769C13.3965 8.28753 12.172 9.48718 10.6616 9.48718C10.4191 9.48718 10.1839 9.45625 9.96004 9.39821Z"
              fill="white"
            />
            <path
              d="M2.16888 14C1.77139 14 1.44287 13.6819 1.50836 13.2978C1.84976 11.2954 3.6267 9.76923 5.76748 9.76923H8.07059C10.2114 9.76923 11.9883 11.2954 12.3297 13.2978C12.3952 13.6819 12.0667 14 11.6692 14H2.16888Z"
              fill="white"
            />
          </svg>
          <span>3</span>
        </h4>
        <h4 className={`${styles.feature} ${styles.courses}`}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.78786 8.5C2.78786 11.6547 5.34527 14.2121 8.5 14.2121C11.6547 14.2121 14.2121 11.6547 14.2121 8.5C14.2121 5.34527 11.6547 2.78786 8.5 2.78786C5.34527 2.78786 2.78786 5.34527 2.78786 8.5ZM9.59013 6.61047L9.01561 5.68642C8.77805 5.30434 8.22195 5.30434 7.98439 5.68642L7.40987 6.61047C7.32628 6.7449 7.1935 6.84137 7.03982 6.87932L5.98346 7.14019C5.54667 7.24805 5.37483 7.77692 5.6648 8.12093L6.36608 8.95288C6.4681 9.07392 6.51882 9.23001 6.50742 9.3879L6.42909 10.4732C6.39669 10.9219 6.84658 11.2488 7.26336 11.0793L8.2713 10.6694C8.41794 10.6098 8.58206 10.6098 8.7287 10.6694L9.73664 11.0793C10.1534 11.2488 10.6033 10.9219 10.5709 10.4732L10.4926 9.3879C10.4812 9.23001 10.5319 9.07392 10.6339 8.95288L11.3352 8.12093C11.6252 7.77692 11.4533 7.24805 11.0165 7.14019L9.96018 6.87932C9.8065 6.84137 9.67372 6.7449 9.59013 6.61047Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5ZM15.1786 8.5C15.1786 12.1885 12.1885 15.1786 8.5 15.1786C4.81153 15.1786 1.82143 12.1885 1.82143 8.5C1.82143 4.81153 4.81153 1.82143 8.5 1.82143C12.1885 1.82143 15.1786 4.81153 15.1786 8.5Z"
              fill="white"
            />
          </svg>
          <span>0</span>
        </h4>
      </div>

      <div className={styles.content}>
        {isShowBanner && (
          <div className={styles.banner}>
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
              Обменивай свои коины на полезные материалы и скидки на курсы по финансовой грамотности от топовых
              экспертов индустрии
            </h5>
            <button className={styles.btn} onClick={() => setIsShowBanner(false)}>
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.15823 0.0194587C8.90016 0.103246 8.75136 0.252201 8.67928 0.495417C8.6386 0.631572 8.63162 0.948102 8.63162 2.60057C8.63162 4.78952 8.6293 4.76159 8.85249 4.98502C9.15125 5.28293 9.84875 5.28293 10.1475 4.98502C10.3707 4.76159 10.3684 4.78952 10.3684 2.60057C10.3684 0.482616 10.3649 0.445378 10.1928 0.240564C10.0487 0.0694984 9.89409 0.0124765 9.5465 0.00316675C9.41686 -0.00418526 9.2868 0.00127177 9.15823 0.0194587ZM3.40042 2.31896C3.21674 2.40274 2.94588 2.66807 2.85172 2.85659C2.80328 2.9507 2.77685 3.05461 2.77443 3.16046C2.77201 3.2663 2.79367 3.37131 2.83777 3.46754C2.92379 3.65955 5.62542 6.37333 5.83816 6.48156C6.1404 6.63672 6.44769 6.56147 6.76001 6.2558C7.06691 5.95556 7.14828 5.62972 6.99251 5.32599C6.8844 5.11303 4.17347 2.40856 3.98166 2.32245C3.88997 2.28285 3.79125 2.26213 3.69139 2.26153C3.59153 2.26093 3.49257 2.28046 3.40042 2.31896ZM15.1416 2.33758C14.9986 2.40391 14.7545 2.63316 13.5896 3.80269C12.519 4.8768 12.1923 5.22358 12.14 5.33763C12.0968 5.43225 12.0745 5.53511 12.0747 5.63916C12.0749 5.74321 12.0976 5.84598 12.1412 5.94043C12.2226 6.11499 12.4899 6.38962 12.6701 6.48388C12.8526 6.57931 13.1235 6.57815 13.313 6.48156C13.5071 6.38148 16.1925 3.6933 16.2924 3.49896C16.3399 3.39886 16.3648 3.28955 16.3654 3.17875C16.366 3.06795 16.3423 2.95837 16.2959 2.85776C16.1673 2.64239 15.9855 2.46369 15.7681 2.33874C15.6719 2.28681 15.5643 2.25954 15.455 2.25933C15.3457 2.25913 15.238 2.28601 15.1416 2.33758ZM1.01266 8.16778C0.670114 8.27561 0.499228 8.54986 0.500003 8.99052C0.501165 9.44088 0.668564 9.71086 1.0115 9.81327C1.14867 9.854 1.45441 9.86098 3.11561 9.86098C4.84655 9.86098 5.07789 9.85516 5.21971 9.80861C5.32398 9.77451 5.41874 9.71628 5.49631 9.63863C5.57387 9.56099 5.63204 9.46612 5.66611 9.36175C5.76608 9.05336 5.7161 8.61581 5.55683 8.39936C5.49336 8.3295 5.41822 8.27122 5.3348 8.22713L5.17554 8.13869L3.16094 8.1317C1.53927 8.12705 1.11961 8.13403 1.01266 8.16778ZM13.8535 8.15149C13.6964 8.19501 13.5544 8.2812 13.4432 8.40052C13.2839 8.61581 13.2339 9.05336 13.3339 9.36175C13.4013 9.57121 13.571 9.74112 13.7803 9.80861C13.9221 9.85516 14.1534 9.86098 15.8844 9.86098C17.5456 9.86098 17.8513 9.854 17.9885 9.81327C18.3314 9.71086 18.4988 9.44088 18.5 8.99052C18.5 8.54249 18.3291 8.27368 17.9746 8.16661C17.8548 8.13054 17.4793 8.12356 15.889 8.12588C14.8219 8.12821 13.9058 8.13985 13.8535 8.15149ZM5.84165 11.6473C5.69866 11.7136 5.45454 11.9429 4.28972 13.1124C3.21907 14.1865 2.89241 14.5333 2.8401 14.6473C2.79686 14.742 2.77457 14.8448 2.77478 14.9489C2.77498 15.0529 2.79766 15.1557 2.84126 15.2501C2.92263 15.4247 3.19 15.6993 3.37019 15.7936C3.5527 15.889 3.82356 15.8879 4.01305 15.7913C4.20718 15.6912 6.89254 13.003 6.99251 12.8087C7.03997 12.7086 7.06488 12.5992 7.06548 12.4885C7.06609 12.3776 7.04237 12.2681 6.996 12.1675C6.86734 11.9521 6.68562 11.7734 6.46823 11.6484C6.37199 11.5965 6.26441 11.5692 6.15508 11.569C6.04576 11.5688 5.93808 11.5957 5.84165 11.6473ZM12.7003 11.6287C12.5167 11.7124 12.2458 11.9778 12.1516 12.1663C12.1032 12.2604 12.0768 12.3643 12.0744 12.4702C12.0719 12.576 12.0936 12.681 12.1377 12.7772C12.2237 12.9693 14.9253 15.683 15.1381 15.7913C15.4403 15.9464 15.7476 15.8712 16.0599 15.5655C16.3668 15.2653 16.4482 14.9394 16.2924 14.6357C16.1843 14.4227 13.4734 11.7183 13.2816 11.6322C13.1899 11.5925 13.0912 11.5718 12.9913 11.5712C12.8915 11.5706 12.7925 11.5902 12.7003 11.6287ZM9.20357 12.8052C9.04656 12.8496 8.90466 12.9361 8.79321 13.0554C8.63278 13.2718 8.63162 13.287 8.63162 15.3793C8.63162 17.0457 8.6386 17.3518 8.67928 17.4891C8.78003 17.8305 9.05361 18.0008 9.5 18C9.9464 18.0015 10.22 17.8313 10.3207 17.4891C10.3928 17.2424 10.3916 13.5011 10.3184 13.2858C10.2957 13.199 10.2545 13.1183 10.1974 13.0492C10.1404 12.98 10.069 12.9242 9.98825 12.8855C9.86037 12.8156 9.78597 12.7982 9.56626 12.79C9.44517 12.7824 9.32361 12.7875 9.20357 12.8052Z"
                  fill="#FF8400"
                />
              </svg>
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
              <div className={styles.task} key={t.title} onClick={() => setIsTaskOpen(true)}>
                <div className={styles.basic}>
                  <Image src={`/tasks-${t.imageName}-icon.png`} alt={'icon'} width={44} height={44} priority />
                  <h5>
                    <span className={styles.title}>{t.title}</span>
                    <span className={styles.reward}>
                      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.1319 7C2.1319 9.41244 4.08756 11.3681 6.5 11.3681C8.91244 11.3681 10.8681 9.41244 10.8681 7C10.8681 4.58756 8.91244 2.6319 6.5 2.6319C4.08756 2.6319 2.1319 4.58756 2.1319 7ZM7.33363 5.55506L6.89429 4.84844C6.71262 4.55626 6.28738 4.55626 6.10571 4.84844L5.66637 5.55506C5.60245 5.65786 5.50091 5.73164 5.38339 5.76066L4.57559 5.96014C4.24157 6.04263 4.11016 6.44706 4.3319 6.71012L4.86818 7.34632C4.9462 7.43888 4.98498 7.55824 4.97627 7.67898L4.91636 8.50889C4.89159 8.85205 5.23562 9.102 5.55433 8.9724L6.32511 8.65897C6.43724 8.61338 6.56276 8.61338 6.67489 8.65897L7.44567 8.9724C7.76438 9.102 8.10841 8.85205 8.08364 8.50889L8.02373 7.67898C8.01502 7.55824 8.0538 7.43888 8.13182 7.34632L8.66809 6.71012C8.88984 6.44706 8.75843 6.04263 8.42441 5.96014L7.61661 5.76066C7.49909 5.73164 7.39755 5.65786 7.33363 5.55506Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 7C13 10.5899 10.0899 13.5 6.5 13.5C2.91015 13.5 0 10.5899 0 7C0 3.41015 2.91015 0.5 6.5 0.5C10.0899 0.5 13 3.41015 13 7ZM11.6071 7C11.6071 9.8206 9.3206 12.1071 6.5 12.1071C3.6794 12.1071 1.39286 9.8206 1.39286 7C1.39286 4.1794 3.6794 1.89286 6.5 1.89286C9.3206 1.89286 11.6071 4.1794 11.6071 7Z"
                          fill="white"
                        />
                      </svg>
                      <span>+ {formatNumber(t.reward)}</span>
                    </span>
                  </h5>
                </div>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5858 12.5858C15.8047 13.3668 15.8047 14.6332 16.5858 15.4142L23.1716 22L16.5858 28.5858C15.8047 29.3668 15.8047 30.6332 16.5858 31.4142C17.3668 32.1953 18.6332 32.1953 19.4142 31.4142L27.4142 23.4142C28.1953 22.6332 28.1953 21.3668 27.4142 20.5858L19.4142 12.5858C18.6332 11.8047 17.3668 11.8047 16.5858 12.5858Z"
                    fill="#CDCDD4"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.friends}>
          <div className={styles.top}>
            <h3 className={styles.title}>Друзья</h3>
            <h5 className={styles.description}>Приглашайте друзей и получайте бонусы за них, и их друзей</h5>
          </div>
          <div className={styles.list}>
            {friends.map((f) => (
              <div className={styles.friend} key={f.name}>
                <div className={styles.basic}>
                  <Image src={`/friends-${f.imageName}-avatar.png`} alt={'icon'} width={44} height={44} priority />
                  <h5>
                    <span className={styles.name}>{f.name}</span>
                    <span className={`${styles.change} ${f.profit < 0 && styles.lesion}`}>
                      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 0.5L6.53109 4.25H0.468911L3.5 0.5Z" fill="#35CC5A" />
                      </svg>
                      <span>{f.profit < 0 ? formatNumber(Math.abs(f.profit)) : formatNumber(f.profit)} ₽</span>
                    </span>
                  </h5>
                </div>
                <h5 className={styles.bonus}>
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.1319 7C2.1319 9.41244 4.08756 11.3681 6.5 11.3681C8.91244 11.3681 10.8681 9.41244 10.8681 7C10.8681 4.58756 8.91244 2.6319 6.5 2.6319C4.08756 2.6319 2.1319 4.58756 2.1319 7ZM7.33363 5.55506L6.89429 4.84844C6.71262 4.55626 6.28738 4.55626 6.10571 4.84844L5.66637 5.55506C5.60245 5.65786 5.50091 5.73164 5.38339 5.76066L4.57559 5.96014C4.24157 6.04263 4.11016 6.44706 4.3319 6.71012L4.86818 7.34632C4.9462 7.43888 4.98498 7.55824 4.97627 7.67898L4.91636 8.50889C4.89159 8.85205 5.23562 9.102 5.55433 8.9724L6.32511 8.65897C6.43724 8.61338 6.56276 8.61338 6.67489 8.65897L7.44567 8.9724C7.76438 9.102 8.10841 8.85205 8.08364 8.50889L8.02373 7.67898C8.01502 7.55824 8.0538 7.43888 8.13182 7.34632L8.66809 6.71012C8.88984 6.44706 8.75843 6.04263 8.42441 5.96014L7.61661 5.76066C7.49909 5.73164 7.39755 5.65786 7.33363 5.55506Z"
                      fill="#FF8400"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 7C13 10.5899 10.0899 13.5 6.5 13.5C2.91015 13.5 0 10.5899 0 7C0 3.41015 2.91015 0.5 6.5 0.5C10.0899 0.5 13 3.41015 13 7ZM11.6071 7C11.6071 9.8206 9.3206 12.1071 6.5 12.1071C3.6794 12.1071 1.39286 9.8206 1.39286 7C1.39286 4.1794 3.6794 1.89286 6.5 1.89286C9.3206 1.89286 11.6071 4.1794 11.6071 7Z"
                      fill="#FF8400"
                    />
                  </svg>
                  <span>+ {formatNumber(f.bonus)}</span>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isTaskOpen && (
        <div className={`${styles.popup} ${isTaskOpenClosing && styles.closing}`}>
          <div className={`${styles.inner} ${styles.categories}`} ref={taskRef}>
            <Image src={'/tasks-tg-icon.png'} alt={'tg'} width={104} height={104} />
            <h3>Подпишитесь на telegram канал Keepify</h3>
            <h5>У нас очень классный и полезный телеграм канал. Подписывайся и получай коины!</h5>
            <span className={styles.reward}>
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.1319 7C2.1319 9.41244 4.08756 11.3681 6.5 11.3681C8.91244 11.3681 10.8681 9.41244 10.8681 7C10.8681 4.58756 8.91244 2.6319 6.5 2.6319C4.08756 2.6319 2.1319 4.58756 2.1319 7ZM7.33363 5.55506L6.89429 4.84844C6.71262 4.55626 6.28738 4.55626 6.10571 4.84844L5.66637 5.55506C5.60245 5.65786 5.50091 5.73164 5.38339 5.76066L4.57559 5.96014C4.24157 6.04263 4.11016 6.44706 4.3319 6.71012L4.86818 7.34632C4.9462 7.43888 4.98498 7.55824 4.97627 7.67898L4.91636 8.50889C4.89159 8.85205 5.23562 9.102 5.55433 8.9724L6.32511 8.65897C6.43724 8.61338 6.56276 8.61338 6.67489 8.65897L7.44567 8.9724C7.76438 9.102 8.10841 8.85205 8.08364 8.50889L8.02373 7.67898C8.01502 7.55824 8.0538 7.43888 8.13182 7.34632L8.66809 6.71012C8.88984 6.44706 8.75843 6.04263 8.42441 5.96014L7.61661 5.76066C7.49909 5.73164 7.39755 5.65786 7.33363 5.55506Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 7C13 10.5899 10.0899 13.5 6.5 13.5C2.91015 13.5 0 10.5899 0 7C0 3.41015 2.91015 0.5 6.5 0.5C10.0899 0.5 13 3.41015 13 7ZM11.6071 7C11.6071 9.8206 9.3206 12.1071 6.5 12.1071C3.6794 12.1071 1.39286 9.8206 1.39286 7C1.39286 4.1794 3.6794 1.89286 6.5 1.89286C9.3206 1.89286 11.6071 4.1794 11.6071 7Z"
                  fill="white"
                />
              </svg>
              <h4>+ {formatNumber(2500)}</h4>
            </span>
            <button className={styles.btn}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.847 3.00256C18.847 3.00256 20.7085 2.27663 20.5528 4.03948C20.5015 4.76542 20.0363 7.30644 19.674 10.0545L18.433 18.1955C18.433 18.1955 18.3295 19.3881 17.3985 19.5956C16.4679 19.8026 15.0716 18.8697 14.8129 18.6622C14.6059 18.5065 10.9345 16.1729 9.64171 15.0325C9.27946 14.7211 8.86546 14.0991 9.69346 13.3732L15.1234 8.18762C15.7439 7.56471 16.3644 6.11283 13.7788 7.87617L6.53863 12.802C6.53863 12.802 5.7111 13.3209 4.16004 12.8542L0.798209 11.8168C0.798209 11.8168 -0.442832 11.0391 1.67748 10.2615C6.84913 7.82442 13.2105 5.3361 18.847 3.00256Z"
                  fill="#007AFF"
                />
              </svg>
              <h4>Подписаться</h4>
            </button>
            <button className={styles.btn}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C17.0752 22 22 17.0752 22 11C22 4.92485 17.0752 0 11 0C4.92485 0 0 4.92485 0 11C0 17.0752 4.92485 22 11 22ZM17.0186 8.21858C17.3049 7.93212 17.3049 7.46788 17.0186 7.18142C16.7321 6.89505 16.2679 6.89505 15.9814 7.18142L9.9 13.2629L6.75191 10.1148C6.46545 9.82839 6.00121 9.82839 5.71475 10.1148C5.42839 10.4012 5.42839 10.8655 5.71475 11.1519L9.38142 14.8186C9.66788 15.1049 10.1321 15.1049 10.4186 14.8186L17.0186 8.21858Z"
                  fill="#DAE7FA"
                />
              </svg>
              <h4>Проверить</h4>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
