'use client'

import { WrapperContext } from '@/components/Wrapper/Wrapper'
import { useContext, useEffect, useState } from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Switch from '@/components/Switch/Switch'

function Settings() {
  const [isShowBanner, setIsShowBanner] = useState(true)
  const { setIsPopupOpen, setTheme, theme } = useContext(WrapperContext)

  useEffect(() => {
    setIsPopupOpen(false)
  }, [])

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
        {isShowBanner && (
          <div className={styles.banner}>
            <div className={styles.bg}>
              <Image
                className={styles.logo}
                src={'/keepy-logo-bg.png'}
                alt="keepy logo"
                width={290}
                height={303}
                priority
              />
              <Image className={styles.tg} src={'/keepy-tg-bg.png'} alt="keepy tg" width={416} height={416} priority />
            </div>
            <h3 className={styles.title}>Подпишись на Keepify в Telegram</h3>
            <h5 className={styles.text}>И разблокируй премиум функции приложения</h5>
            <button className={styles.btn} onClick={() => setIsShowBanner(false)}>
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_191_1829)">
                  <path
                    d="M19.347 3.00256C19.347 3.00256 21.2086 2.27663 21.0528 4.03948C21.0016 4.76542 20.5363 7.30644 20.174 10.0545L18.933 18.1955C18.933 18.1955 18.8295 19.3881 17.8985 19.5956C16.9679 19.8026 15.5717 18.8697 15.3129 18.6622C15.1059 18.5065 11.4345 16.1729 10.1417 15.0325C9.77949 14.7211 9.36549 14.0991 10.1935 13.3732L15.6234 8.18762C16.2439 7.56471 16.8644 6.11283 14.2789 7.87617L7.03866 12.802C7.03866 12.802 6.21113 13.3209 4.66007 12.8542L1.29824 11.8168C1.29824 11.8168 0.0571982 11.0391 2.17751 10.2615C7.34916 7.82442 13.7106 5.3361 19.347 3.00256Z"
                    fill="#007AFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_191_1829">
                    <rect width="22" height="22" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>

              <h4>Подписаться</h4>
            </button>
          </div>
        )}

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.info}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="10" fill="#007AFF" />
                <path
                  d="M7 9.13333C7 7.95513 7.95513 7 9.13333 7H13.9333C14.2279 7 14.4667 7.23878 14.4667 7.53333V13.9333C14.4667 14.2279 14.2279 14.4667 13.9333 14.4667H7.53333C7.23878 14.4667 7 14.2279 7 13.9333V9.13333Z"
                  fill="white"
                />
                <path
                  d="M15.5333 7.53333C15.5333 7.23878 15.7721 7 16.0667 7H20.8667C22.0449 7 23 7.95513 23 9.13333V13.9333C23 14.2279 22.7612 14.4667 22.4667 14.4667H16.0667C15.7721 14.4667 15.5333 14.2279 15.5333 13.9333V7.53333Z"
                  fill="white"
                />
                <path
                  d="M7 16.0667C7 15.7721 7.23878 15.5333 7.53333 15.5333H13.9333C14.2279 15.5333 14.4667 15.7721 14.4667 16.0667V22.4667C14.4667 22.7612 14.2279 23 13.9333 23H9.13333C7.95513 23 7 22.0449 7 20.8667V16.0667Z"
                  fill="white"
                />
                <path
                  d="M15.5333 19.2667C15.5333 17.2048 17.2048 15.5333 19.2667 15.5333C21.3285 15.5333 23 17.2048 23 19.2667C23 21.3285 21.3285 23 19.2667 23C17.2048 23 15.5333 21.3285 15.5333 19.2667Z"
                  fill="white"
                />
              </svg>
              <h5 className={styles.name}>Категории</h5>
            </div>
            <div className={styles.arrow}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292894C-0.0976315 0.683418 -0.0976315 1.31658 0.292893 1.70711L3.58578 5L0.292893 8.29289C-0.0976315 8.68342 -0.0976315 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L1.70711 0.292894C1.31658 -0.0976312 0.683418 -0.0976312 0.292893 0.292894Z"
                  fill="#007AFF"
                />
              </svg>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.info}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="10" fill="#FF8400" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3543 24C18.368 24 20.811 21.5733 20.811 18.5797C20.811 15.5862 18.368 13.1594 15.3543 13.1594C12.3407 13.1594 9.89764 15.5862 9.89764 18.5797C9.89764 21.5733 12.3407 24 15.3543 24ZM15.0767 21.6512C15.1642 21.7381 15.2714 21.7816 15.3983 21.7816C15.534 21.7816 15.6434 21.7381 15.7265 21.6512C15.814 21.5642 15.8578 21.4556 15.8578 21.3252V20.9685C16.0933 20.9237 16.3033 20.8491 16.4879 20.7449C16.7155 20.6188 16.8927 20.4558 17.0196 20.2559C17.1465 20.0559 17.21 19.8255 17.21 19.5647C17.21 19.23 17.1093 18.9584 16.908 18.7497C16.7111 18.5367 16.4048 18.3846 15.9891 18.2933L15.2408 18.1303C15.0482 18.0868 14.9148 18.0369 14.8404 17.9804C14.7704 17.9195 14.7354 17.8456 14.7354 17.7587C14.7354 17.6283 14.7966 17.5218 14.9192 17.4392C15.0461 17.3566 15.2255 17.3153 15.4574 17.3153C15.6499 17.3153 15.8075 17.3305 15.93 17.3609C16.0569 17.387 16.1707 17.4218 16.2713 17.4653C16.407 17.5218 16.5229 17.5392 16.6192 17.5174C16.7198 17.4913 16.7986 17.4414 16.8555 17.3675C16.9168 17.2936 16.9518 17.211 16.9605 17.1197C16.9737 17.0241 16.9583 16.9306 16.9146 16.8393C16.8752 16.7481 16.8052 16.6763 16.7045 16.6242C16.5601 16.5372 16.3917 16.4699 16.1991 16.4221C16.0803 16.3899 15.9666 16.3668 15.8578 16.3528V16.0243C15.8578 15.8939 15.814 15.7853 15.7265 15.6983C15.639 15.6114 15.5296 15.5679 15.3983 15.5679C15.2714 15.5679 15.1642 15.6114 15.0767 15.6983C14.9892 15.7853 14.9454 15.8939 14.9454 16.0243V16.3792C14.711 16.4227 14.501 16.4956 14.3153 16.5981C14.0834 16.7285 13.9018 16.898 13.7705 17.1067C13.6436 17.311 13.5801 17.5435 13.5801 17.8043C13.5801 18.1477 13.6786 18.4281 13.8755 18.6454C14.0768 18.8584 14.3809 19.0105 14.7879 19.1018L15.5296 19.2583C15.6609 19.2887 15.7637 19.3235 15.8381 19.3626C15.9125 19.3974 15.965 19.4387 15.9956 19.4865C16.0306 19.53 16.0481 19.5843 16.0481 19.6495C16.0481 19.719 16.0241 19.7842 15.9759 19.8451C15.9322 19.9016 15.8556 19.9473 15.7462 19.982C15.6412 20.0168 15.4968 20.0342 15.313 20.0342C15.0504 20.0342 14.8294 20.0103 14.65 19.9625C14.475 19.9103 14.3437 19.8603 14.2562 19.8125C14.1249 19.756 14.009 19.743 13.9083 19.7734C13.812 19.7995 13.7333 19.8538 13.672 19.9364C13.6108 20.019 13.5736 20.1103 13.5604 20.2102C13.5517 20.3102 13.5692 20.408 13.6129 20.5036C13.6611 20.5993 13.742 20.6732 13.8558 20.7253C13.9915 20.7862 14.1665 20.847 14.3809 20.9079C14.5458 20.9547 14.734 20.9873 14.9454 21.0059V21.3252C14.9454 21.4556 14.9892 21.5642 15.0767 21.6512Z"
                  fill="white"
                />
                <path
                  d="M14.4553 12.6981C14.6889 10.2903 16.7314 8.40787 19.2165 8.40787C21.8584 8.40787 24 10.5352 24 13.1594C24 15.0661 22.8695 16.7104 21.2379 17.4671C21.0825 16.6512 20.7594 15.8943 20.3054 15.2329C20.4237 15.1933 20.532 15.1413 20.6305 15.0771C20.7111 15.0276 20.7686 14.9647 20.8031 14.8885C20.8377 14.8123 20.8472 14.7361 20.8319 14.6599C20.8204 14.5799 20.7916 14.5094 20.7456 14.4484C20.6996 14.3874 20.6343 14.3455 20.55 14.3227C20.4694 14.2998 20.3792 14.3093 20.2795 14.3512C20.2143 14.3855 20.1433 14.4122 20.0666 14.4313C19.9899 14.4465 19.9113 14.4541 19.8307 14.4541C19.7674 14.4541 19.7067 14.4475 19.6488 14.4343C19.5072 14.2896 19.3583 14.1521 19.2026 14.0222C19.1991 14.0139 19.1956 14.0055 19.1922 13.9969H19.6753C19.7597 13.9969 19.8307 13.9683 19.8882 13.9111C19.9458 13.854 19.9745 13.7835 19.9745 13.6997C19.9745 13.6158 19.9458 13.5453 19.8882 13.4882C19.8307 13.431 19.7597 13.4024 19.6753 13.4024H19.0798C19.0779 13.3415 19.0769 13.2786 19.0769 13.2138C19.0769 13.1686 19.0774 13.1248 19.0783 13.0824H19.6753C19.7597 13.0824 19.8307 13.0538 19.8882 12.9966C19.9458 12.9395 19.9745 12.869 19.9745 12.7851C19.9745 12.7013 19.9458 12.6308 19.8882 12.5737C19.8307 12.5165 19.7597 12.4879 19.6753 12.4879H19.1949C19.2261 12.4118 19.2616 12.347 19.3013 12.2936C19.3665 12.2021 19.4433 12.1374 19.5315 12.0993C19.6236 12.0574 19.7233 12.0364 19.8307 12.0364C19.9074 12.0364 19.9861 12.0459 20.0666 12.065C20.151 12.084 20.2201 12.1088 20.2738 12.1393C20.3773 12.1812 20.4694 12.1926 20.55 12.1736C20.6305 12.1507 20.6938 12.1088 20.7398 12.0478C20.7897 11.983 20.8204 11.9106 20.8319 11.8306C20.8472 11.7506 20.8377 11.6725 20.8031 11.5963C20.7686 11.5201 20.7091 11.4572 20.6248 11.4077C20.4982 11.3276 20.3582 11.2686 20.2047 11.2305C20.0513 11.1886 19.9017 11.1676 19.7559 11.1676C19.472 11.1676 19.2131 11.2248 18.9791 11.3391C18.7489 11.4534 18.5552 11.623 18.3979 11.8478C18.2749 12.0281 18.1827 12.2415 18.1213 12.4879H17.8916C17.8034 12.4879 17.7305 12.5165 17.6729 12.5737C17.6154 12.6308 17.5866 12.7013 17.5866 12.7851C17.5866 12.869 17.6154 12.9395 17.6729 12.9966C17.7305 13.0538 17.8034 13.0824 17.8916 13.0824H18.0341C18.0311 13.1314 18.0297 13.1791 18.0297 13.2253C18.0297 13.2355 18.0297 13.246 18.0298 13.2567C17.2246 12.8566 16.3159 12.6315 15.3543 12.6315C15.0488 12.6315 14.7486 12.6542 14.4553 12.6981Z"
                  fill="white"
                />
                <path
                  d="M6 12.1563C6 14.4399 7.49442 16.3767 9.5648 17.0546C9.82608 16.0734 10.3334 15.1915 11.0173 14.4782C10.9092 14.4569 10.8207 14.4121 10.752 14.3438C10.6521 14.2405 10.6021 14.0937 10.6021 13.9035V13.5127H9.99019C9.87779 13.5127 9.79037 13.4858 9.72793 13.4321C9.66965 13.3742 9.64051 13.2956 9.64051 13.1964C9.64051 13.093 9.66965 13.0144 9.72793 12.9607C9.79037 12.9028 9.87779 12.8738 9.99019 12.8738H10.6021V12.5203H9.99019C9.87779 12.5203 9.79037 12.4934 9.72793 12.4397C9.66965 12.3859 9.64051 12.3073 9.64051 12.204C9.64051 12.1006 9.66965 12.022 9.72793 11.9683C9.79037 11.9104 9.87779 11.8814 9.99019 11.8814H10.326L9.55309 10.7215C9.49065 10.6306 9.46568 10.5293 9.47816 10.4176C9.49482 10.306 9.54685 10.2109 9.63427 10.1323C9.72169 10.0496 9.84033 10.0083 9.99019 10.0083C10.1026 10.0083 10.2004 10.0351 10.2837 10.0889C10.3711 10.1385 10.4481 10.2253 10.5147 10.3494L11.1739 11.4109L11.8385 10.3494C11.9092 10.2253 11.9883 10.1385 12.0758 10.0889C12.1632 10.0351 12.2652 10.0083 12.3817 10.0083C12.5316 10.0083 12.6481 10.0475 12.7314 10.1261C12.8188 10.2005 12.8688 10.2936 12.8813 10.4052C12.8938 10.5169 12.8625 10.6285 12.7876 10.7402L12.0216 11.8814H12.363C12.4754 11.8814 12.5607 11.9104 12.619 11.9683C12.6814 12.022 12.7127 12.1006 12.7127 12.204C12.7127 12.3073 12.6814 12.3859 12.619 12.4397C12.5607 12.4934 12.4754 12.5203 12.363 12.5203H11.7448V12.8738H12.363C12.4754 12.8738 12.5607 12.9028 12.619 12.9607C12.6814 13.0144 12.7127 13.093 12.7127 13.1964C12.7127 13.2118 12.7119 13.2267 12.7104 13.2412C13.0795 13.0605 13.4701 12.9164 13.8773 12.8138C13.9661 11.4398 14.5805 10.2078 15.5229 9.31432C14.5938 7.91976 13.0005 7 11.1909 7C8.32406 7 6 9.30856 6 12.1563Z"
                  fill="white"
                />
                <path
                  d="M12.2162 13.5127C12.0538 13.6122 11.8965 13.7191 11.7448 13.8331V13.5127H12.2162Z"
                  fill="white"
                />
              </svg>

              <h5 className={styles.name}>Валюта</h5>
            </div>
            <div className={styles.arrow}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292894C-0.0976315 0.683418 -0.0976315 1.31658 0.292893 1.70711L3.58578 5L0.292893 8.29289C-0.0976315 8.68342 -0.0976315 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L1.70711 0.292894C1.31658 -0.0976312 0.683418 -0.0976312 0.292893 0.292894Z"
                  fill="#007AFF"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.info}>
              <div className={`${styles.icon} ${styles.blue}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.01792 9.57074C2.05375 9.24702 2.08959 8.9233 2.14334 8.61756C2.19709 8.29384 2.28667 7.95214 2.37626 7.62842C2.37626 7.57446 2.46584 7.52051 2.50168 7.52051C3.80963 7.52051 5.11758 7.52051 6.42553 7.52051C6.42553 7.52051 6.46136 7.52051 6.4972 7.52051C6.33594 8.97725 6.31802 10.434 6.44344 11.9087H6.26427C4.97424 11.9087 3.70213 11.9087 2.41209 11.9087C2.26876 11.9087 2.21501 11.8728 2.19709 11.7289C2.14334 11.3512 2.08959 10.9735 2.03583 10.5779C2.03583 10.5239 2.01792 10.488 2 10.434C2 10.1283 2 9.82253 2 9.53477L2.01792 9.57074Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M18 10.434C17.9641 10.7397 17.9283 11.0635 17.8746 11.3692C17.8566 11.549 17.8566 11.7649 17.7491 11.8728C17.6595 11.9627 17.4266 11.9087 17.2475 11.9087C16.0828 11.9087 14.9182 11.9087 13.7536 11.9087H13.5565C13.664 10.434 13.664 8.97725 13.5028 7.52051C13.5565 7.52051 13.6103 7.52051 13.664 7.52051C14.9361 7.52051 16.1903 7.52051 17.4625 7.52051C17.5879 7.52051 17.6237 7.55648 17.6595 7.68237C17.8208 8.25787 17.9462 8.85136 17.9821 9.44485C17.9821 9.4988 17.9821 9.53477 18 9.58873V10.47V10.434Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M10.1702 2C10.7256 2.19783 11.0482 2.62946 11.3169 3.11504C11.7828 3.92434 12.0515 4.80558 12.2665 5.72279C12.3382 5.99256 12.374 6.28031 12.4457 6.58605H7.60807C7.6439 6.38822 7.67973 6.20837 7.71557 6.02853C7.93057 5.0214 8.19933 4.05023 8.71893 3.15101C8.80851 3.00713 8.8981 2.86326 9.0056 2.71938C9.23852 2.41364 9.50728 2.16186 9.88354 2.01798H10.1881L10.1702 2Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M7.46472 7.52051H12.5711C12.6069 7.89818 12.6428 8.27586 12.6607 8.65353C12.7144 9.69663 12.7144 10.7397 12.6428 11.7828C12.6428 11.9087 12.589 11.9267 12.4815 11.9267C10.8331 11.9267 9.20268 11.9267 7.55431 11.9267C7.44681 11.9267 7.41097 11.9087 7.39306 11.7828C7.30347 10.5779 7.30347 9.37291 7.39306 8.16795C7.39306 7.95214 7.42889 7.75431 7.46472 7.53849V7.52051Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M7.50058 12.8633H12.5174C12.4815 13.0791 12.4457 13.2949 12.4099 13.5107C12.2128 14.6078 11.944 15.7048 11.4244 16.694C11.2273 17.0896 10.9944 17.4493 10.6361 17.7371C10.2061 18.0788 9.81189 18.0968 9.38188 17.7371C8.96978 17.3954 8.71894 16.9458 8.48602 16.4782C8.03809 15.543 7.78725 14.5358 7.60808 13.5107C7.57225 13.2949 7.53641 13.0971 7.50058 12.8633Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M17.4446 12.8813C16.6921 15.0574 14.5241 17.2155 11.8544 17.791C11.944 17.6651 12.0157 17.5393 12.0874 17.4134C12.6249 16.4782 12.9474 15.4531 13.1803 14.4099C13.2878 13.9424 13.3595 13.4748 13.4311 12.9892C13.4311 12.8992 13.467 12.8633 13.5566 12.8633C14.8287 12.8633 16.1008 12.8633 17.3729 12.8633C17.3908 12.8633 17.4087 12.8633 17.4267 12.8633L17.4446 12.8813Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M8.14559 17.8086C5.47594 17.0713 3.63048 15.4347 2.53754 12.8809C2.60921 12.8809 2.66296 12.8809 2.71671 12.8809C3.95299 12.8809 5.18927 12.8809 6.40763 12.8809C6.53305 12.8809 6.56889 12.9168 6.5868 13.0427C6.76598 14.3376 7.05265 15.6145 7.60808 16.8195C7.76933 17.1612 7.9485 17.4669 8.14559 17.8266V17.8086Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M17.2116 6.58646C17.1579 6.58646 17.1041 6.58646 17.0504 6.58646C15.8858 6.58646 14.7032 6.58646 13.5386 6.58646C13.4132 6.58646 13.3594 6.5505 13.3415 6.4246C13.1265 5.16569 12.8219 3.96073 12.2127 2.8277C12.1052 2.62987 11.9798 2.45003 11.8723 2.2522C13.5744 2.32414 16.7279 4.85995 17.2116 6.58646Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M8.16353 2.19727C7.3035 3.51013 6.92725 4.94889 6.65849 6.44161C6.65849 6.51355 6.64057 6.5675 6.53307 6.5675C5.3147 6.5675 4.07842 6.5675 2.86006 6.5675C2.86006 6.5675 2.82423 6.5675 2.78839 6.54952C3.93509 4.30145 5.70888 2.84471 8.16353 2.19727Z"
                    fill="#007AFF"
                  />
                </svg>
              </div>
              <h5 className={styles.name}>Язык</h5>
            </div>
            <div className={styles.arrow}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292894C-0.0976315 0.683418 -0.0976315 1.31658 0.292893 1.70711L3.58578 5L0.292893 8.29289C-0.0976315 8.68342 -0.0976315 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L1.70711 0.292894C1.31658 -0.0976312 0.683418 -0.0976312 0.292893 0.292894Z"
                  fill="#007AFF"
                />
              </svg>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.info}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="10" fill="#007AFF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 15C24 19.9706 19.9706 24 15 24C10.0294 24 6 19.9706 6 15C6 10.0294 10.0294 6 15 6C19.9706 6 24 10.0294 24 15ZM15 18.75C14.0054 18.75 13.0516 18.3549 12.3483 17.6517C11.6451 16.9484 11.25 15.9946 11.25 15C11.25 14.0054 11.6451 13.0516 12.3483 12.3483C13.0516 11.6451 14.0054 11.25 15 11.25V6.75C17.188 6.75 19.2865 7.61919 20.8336 9.16637C22.3808 10.7135 23.25 12.812 23.25 15C23.25 17.188 22.3808 19.2865 20.8336 20.8336C19.2865 22.3808 17.188 23.25 15 23.25L15 18.7466C15.9937 18.7466 16.9466 18.3518 17.6492 17.6492C18.3518 16.9466 18.7466 15.9936 18.7466 15C18.7466 14.0063 18.3518 13.0534 17.6492 12.3508C16.9466 11.6482 15.9936 11.2534 15 11.2534V15V18.75Z"
                  fill="white"
                />
                <path
                  d="M15 23.25C12.812 23.25 10.7135 22.3808 9.16637 20.8336C7.61919 19.2865 6.75 17.188 6.75 15C6.75 12.812 7.61919 10.7135 9.16637 9.16637C10.7135 7.61919 12.812 6.75 15 6.75V11.2534C14.0063 11.2534 13.0534 11.6482 12.3508 12.3508C11.6482 13.0534 11.2534 14.0063 11.2534 15C11.2534 15.9937 11.6482 16.9466 12.3508 17.6492C13.0534 18.3518 14.0064 18.7466 15 18.7466L15 23.25Z"
                  fill="white"
                />
                <path
                  d="M15 11.25C15.9946 11.25 16.9484 11.6451 17.6516 12.3483C18.3549 13.0516 18.75 14.0054 18.75 15C18.75 15.9946 18.3549 16.9484 17.6517 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75V15V11.25Z"
                  fill="white"
                />
              </svg>
              <h5 className={styles.name}>Внешний вид</h5>
            </div>
            <Switch isChecked={theme === 'dark'} handleToggle={switchTheme} />

            {/* <div className={styles.arrow}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292894C-0.0976315 0.683418 -0.0976315 1.31658 0.292893 1.70711L3.58578 5L0.292893 8.29289C-0.0976315 8.68342 -0.0976315 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L1.70711 0.292894C1.31658 -0.0976312 0.683418 -0.0976312 0.292893 0.292894Z"
                  fill="#007AFF"
                />
              </svg>
            </div> */}
          </div>
          <div className={styles.item}>
            <div className={styles.info}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="10" fill="#FF8400" />
                <path
                  d="M21.8427 11.5135C21.8427 13.036 20.6032 14.2703 19.0741 14.2703C17.5451 14.2703 16.3056 13.036 16.3056 11.5135C16.3056 9.991 17.5451 8.75676 19.0741 8.75676C20.6032 8.75676 21.8427 9.991 21.8427 11.5135Z"
                  fill="white"
                />
                <path
                  d="M16.8468 21.1622C16.8468 22.173 16.0163 23 15.0011 23C14.5116 23 14.0422 22.8064 13.696 22.4617C13.3499 22.117 13.1554 21.6496 13.1554 21.1622H16.8468Z"
                  fill="white"
                />
                <path
                  d="M20.5382 14.8887V17.4865L21.7287 18.6719C22.3101 19.2508 21.8948 20.2432 21.0735 20.2432H8.91959C8.09826 20.2432 7.69221 19.2508 8.2736 18.6719L9.46407 17.4865V13.8108C9.46407 10.9805 10.9683 8.62811 13.6169 8.00324V7.37838C13.6169 6.61568 14.2352 6 15.0011 6C15.7671 6 16.3854 6.61568 16.3854 7.37838V8.00324C16.7006 8.07787 16.9997 8.17726 17.2822 8.29924C16.1493 8.92682 15.3828 10.131 15.3828 11.5135C15.3828 13.5435 17.0354 15.1892 19.0741 15.1892C19.5943 15.1892 20.0893 15.0821 20.5382 14.8887Z"
                  fill="white"
                />
              </svg>
              <h5 className={styles.name}>Уведомления</h5>
            </div>
            <Switch isChecked handleToggle={() => {}} />
          </div>
          <div className={styles.item}>
            <div className={styles.info}>
              <div className={`${styles.icon} ${styles.blue}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.91691 4.19677C10.6981 3.67945 11.7391 4.24263 11.7391 5.18218V14.8177C11.7391 15.7579 10.6981 16.3205 9.91691 15.8031L5.88692 13.1356C5.85966 13.1173 5.82767 13.1075 5.7949 13.1073H3.84708C3.3572 13.1073 2.88739 12.9118 2.541 12.564C2.1946 12.2162 2 11.7444 2 11.2524V8.74745C2 8.25552 2.1946 7.78375 2.541 7.4359C2.88739 7.08806 3.3572 6.89264 3.84708 6.89264H5.7949C5.82783 6.89275 5.86006 6.88314 5.88759 6.86499L9.91691 4.19677Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M14.2655 7.73734C14.8984 8.26095 15.3063 9.07946 15.3063 10C15.3063 10.9197 14.8992 11.7376 14.2672 12.2643C13.9595 12.5208 13.5261 12.3396 13.3793 11.9641C13.2403 11.6087 13.4242 11.2106 13.6553 10.9086C13.8445 10.6614 13.9578 10.3464 13.9578 10.0034C13.9578 9.66043 13.8458 9.34621 13.6586 9.09995C13.4274 8.7959 13.2412 8.39581 13.3808 8.03889C13.5271 7.66473 13.958 7.48299 14.2655 7.73734Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M16.6547 10C16.6547 8.46578 15.8992 7.1196 14.7612 6.35842C14.4455 6.14723 14.2768 5.74746 14.4163 5.39079C14.5627 5.01637 14.989 4.83615 15.3275 5.04656C16.9269 6.04076 18 7.88585 18 10C18 12.1142 16.9269 13.9592 15.3275 14.9534C14.989 15.1639 14.5627 14.9836 14.4163 14.6092C14.2768 14.2525 14.4455 13.8528 14.7613 13.6417C15.8993 12.8812 16.6547 11.5371 16.6547 10Z"
                    fill="#007AFF"
                  />
                </svg>
              </div>
              <h5 className={styles.name}>Звуки</h5>
            </div>
            <Switch isChecked handleToggle={() => {}} />
          </div>
          <div className={styles.item}>
            <div className={styles.info}>
              <div className={`${styles.icon} ${styles.orange}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.7333 5.5V14.5C13.7333 14.8978 13.5648 15.2794 13.2647 15.5607C12.9646 15.842 12.5577 16 12.1333 16H7.86667C7.44232 16 7.03535 15.842 6.7353 15.5607C6.43524 15.2794 6.26667 14.8978 6.26667 14.5V5.5C6.26667 5.10218 6.43524 4.72064 6.7353 4.43934C7.03535 4.15804 7.44232 4 7.86667 4H12.1333C12.5577 4 12.9646 4.15804 13.2647 4.43934C13.5648 4.72064 13.7333 5.10218 13.7333 5.5ZM15.3333 7C15.1919 7 15.0562 7.05268 14.9562 7.14645C14.8562 7.24021 14.8 7.36739 14.8 7.5V12.5C14.8 12.6326 14.8562 12.7598 14.9562 12.8536C15.0562 12.9473 15.1919 13 15.3333 13C15.4748 13 15.6104 12.9473 15.7105 12.8536C15.8105 12.7598 15.8667 12.6326 15.8667 12.5V7.5C15.8667 7.36739 15.8105 7.24021 15.7105 7.14645C15.6104 7.05268 15.4748 7 15.3333 7ZM17.4667 8C17.3252 8 17.1896 8.05268 17.0895 8.14645C16.9895 8.24021 16.9333 8.36739 16.9333 8.5V11.5C16.9333 11.6326 16.9895 11.7598 17.0895 11.8536C17.1896 11.9473 17.3252 12 17.4667 12C17.6081 12 17.7438 11.9473 17.8438 11.8536C17.9438 11.7598 18 11.6326 18 11.5V8.5C18 8.36739 17.9438 8.24021 17.8438 8.14645C17.7438 8.05268 17.6081 8 17.4667 8ZM4.66667 7C4.52522 7 4.38956 7.05268 4.28954 7.14645C4.18952 7.24021 4.13333 7.36739 4.13333 7.5V12.5C4.13333 12.6326 4.18952 12.7598 4.28954 12.8536C4.38956 12.9473 4.52522 13 4.66667 13C4.80812 13 4.94377 12.9473 5.04379 12.8536C5.14381 12.7598 5.2 12.6326 5.2 12.5V7.5C5.2 7.36739 5.14381 7.24021 5.04379 7.14645C4.94377 7.05268 4.80812 7 4.66667 7ZM2.53333 8C2.39188 8 2.25623 8.05268 2.15621 8.14645C2.05619 8.24021 2 8.36739 2 8.5V11.5C2 11.6326 2.05619 11.7598 2.15621 11.8536C2.25623 11.9473 2.39188 12 2.53333 12C2.67478 12 2.81044 11.9473 2.91046 11.8536C3.01048 11.7598 3.06667 11.6326 3.06667 11.5V8.5C3.06667 8.36739 3.01048 8.24021 2.91046 8.14645C2.81044 8.05268 2.67478 8 2.53333 8Z"
                    fill="#FF8400"
                  />
                </svg>
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 7.87591C17 12.2519 10.5131 15.794 10.2369 15.9403C10.1641 15.9795 10.0827 16 10 16C9.91732 16 9.83594 15.9795 9.76312 15.9403C9.48688 15.794 3 12.2519 3 7.87591C3.00116 6.84831 3.40979 5.86313 4.13624 5.13651C4.86269 4.40988 5.84764 4.00116 6.875 4C8.16563 4 9.29562 4.55513 10 5.49348C10.7044 4.55513 11.8344 4 13.125 4C14.1524 4.00116 15.1373 4.40988 15.8638 5.13651C16.5902 5.86313 16.9988 6.84831 17 7.87591Z"
                    fill="#EA2124"
                  />
                </svg>
              </div>
              <h5 className={styles.name}>Поддержать проект</h5>
            </div>
            <div className={styles.arrow}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292894C-0.0976315 0.683418 -0.0976315 1.31658 0.292893 1.70711L3.58578 5L0.292893 8.29289C-0.0976315 8.68342 -0.0976315 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L1.70711 0.292894C1.31658 -0.0976312 0.683418 -0.0976312 0.292893 0.292894Z"
                  fill="#007AFF"
                />
              </svg>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.info}>
              <div className={`${styles.icon} ${styles.blue}`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.859 5.09477L13.0053 9.84312L17.859 14.5915C17.9468 14.4109 18 14.2113 18 13.9981V5.68813C18 5.47494 17.9468 5.27535 17.859 5.09477Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M16.5955 4.30664H3.40462C3.18809 4.30664 2.98538 4.35906 2.80199 4.44545L9.00557 10.5229C9.55409 11.063 10.4461 11.063 10.9946 10.5229L17.1982 4.44545C17.0148 4.35906 16.8121 4.30664 16.5955 4.30664Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M2.1392 5.09477C2.05146 5.27535 1.99823 5.47494 1.99823 5.68813V13.9981C1.99823 14.2113 2.05146 14.4109 2.1392 14.5915L6.99293 9.84312L2.1392 5.09477Z"
                    fill="#007AFF"
                  />
                  <path
                    d="M12.3444 10.4958L11.6576 11.1721C10.7436 12.072 9.25648 12.072 8.34252 11.1721L7.65572 10.4958L2.80199 15.2441C2.98538 15.3305 3.18809 15.3829 3.40462 15.3829H16.5955C16.8121 15.3829 17.0148 15.3305 17.1982 15.2441L12.3444 10.4958Z"
                    fill="#007AFF"
                  />
                </svg>
              </div>
              <h5 className={styles.name}>Написать автору</h5>
            </div>
            <div className={styles.arrow}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292894C-0.0976315 0.683418 -0.0976315 1.31658 0.292893 1.70711L3.58578 5L0.292893 8.29289C-0.0976315 8.68342 -0.0976315 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L1.70711 0.292894C1.31658 -0.0976312 0.683418 -0.0976312 0.292893 0.292894Z"
                  fill="#007AFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
