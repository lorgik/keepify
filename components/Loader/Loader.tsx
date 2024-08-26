import Link from 'next/link'
import Logo from '../Logo/Logo'
import styles from './Loader.module.scss'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.bg}>
        <Image src={'/loader-bg.png'} alt={'coins'} width={390} height={722} priority />
        <div className={styles.shape}></div>
      </div>
      <div className={styles.top}>
        <Logo width={134} height={69} />
        <h4>
          <span>финансовая грамотность</span> - это просто!
        </h4>
      </div>
      <div className={styles.bottom}>
        <h4>
          <span>Подписывайтесь на наши официальные ресурсы:</span>
        </h4>
        <div className={styles.socials}>
          <Link href={'/'} className={styles.btn}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.847 3.50256C19.847 3.50256 21.7085 2.77663 21.5528 4.53948C21.5015 5.26542 21.0363 7.80644 20.674 10.5545L19.433 18.6955C19.433 18.6955 19.3295 19.8881 18.3985 20.0956C17.4679 20.3026 16.0716 19.3697 15.8129 19.1622C15.6059 19.0065 11.9345 16.6729 10.6417 15.5325C10.2795 15.2211 9.86546 14.5991 10.6935 13.8732L16.1234 8.68762C16.7439 8.06471 17.3644 6.61283 14.7788 8.37617L7.53863 13.302C7.53863 13.302 6.7111 13.8209 5.16004 13.3542L1.79821 12.3168C1.79821 12.3168 0.557168 11.5391 2.67748 10.7615C7.84913 8.32442 14.2105 5.8361 19.847 3.50256Z"
                fill="#007AFF"
              />
            </svg>
          </Link>
          <Link href={'/'} className={styles.btn}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.79966 5.29876C9.40023 5.32894 8.89391 5.40926 8.69128 5.4746C8.34337 5.5868 7.90984 5.98692 7.99001 6.12181C8.00475 6.1466 8.08546 6.18014 8.16933 6.19631C8.54585 6.26898 8.86343 6.491 9.0058 6.78106C9.24912 7.27688 9.3586 8.82765 9.22771 9.92548C9.14123 10.6512 9.10466 10.8194 8.97642 11.0825C8.63235 11.7883 7.8421 11.217 6.97116 9.6327C6.66121 9.06894 5.78895 7.2595 5.59432 6.77665C5.35908 6.19309 5.28461 6.08564 5.01716 5.94418L4.79142 5.82478L3.08779 5.83754C1.54935 5.84905 1.37127 5.85763 1.25112 5.92587C1.06064 6.0341 0.979281 6.18184 1.00449 6.37395C1.03147 6.57977 1.67765 8.07275 2.15382 9.02948C3.08088 10.8921 3.86606 12.2447 4.70542 13.4248C5.93991 15.1606 6.48611 15.7237 7.74735 16.5614C8.33628 16.9525 8.76133 17.1714 9.28679 17.3539C10.0088 17.6046 10.323 17.6529 11.4009 17.6785C12.4736 17.704 12.7819 17.6718 13.0092 17.5106C13.1963 17.3779 13.2543 17.1947 13.2892 16.6252C13.3237 16.0631 13.4292 15.5812 13.5744 15.3238C13.7024 15.0966 13.9807 14.8343 14.1001 14.8281C14.5168 14.8068 14.7501 14.9867 15.6205 16.001C16.4366 16.9519 16.7383 17.2318 17.1892 17.4562C17.3924 17.5573 17.6417 17.6599 17.7434 17.6841C17.9896 17.7429 21.3144 17.6768 21.5291 17.6089C21.7416 17.5416 21.9706 17.3082 21.9758 17.1534C21.9901 16.7298 21.9307 16.5388 21.6456 16.0913C21.2709 15.5031 20.9489 15.1274 19.853 13.9996C18.6891 12.802 18.6079 12.6905 18.6062 12.2898C18.6048 11.9535 18.756 11.695 19.7777 10.288C21.219 8.30309 21.7961 7.34437 21.9565 6.66845C22.0506 6.27205 21.9971 6.08079 21.7542 5.94586L21.5814 5.84984L19.5083 5.86423C18.0428 5.87437 17.4056 5.89316 17.3341 5.92829C17.195 5.99661 17.0475 6.24575 16.8626 6.72476C16.3703 8.0006 15.3565 9.83863 14.6884 10.6667C14.4226 10.9963 14.0094 11.3336 13.8715 11.3336C13.6791 11.3336 13.5205 11.2045 13.4002 10.9499L13.2891 10.7149L13.3003 8.49927C13.3124 6.11665 13.3072 6.04628 13.0951 5.7317C12.8861 5.42185 12.3767 5.3156 11.0107 5.29698C10.4575 5.2894 9.91255 5.29022 9.79966 5.29876Z"
                fill="#007AFF"
              />
            </svg>
          </Link>
          <Link href={'/'} className={styles.btn}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.50254 4.39511C6.29631 4.4589 4.41342 4.61785 3.82461 4.8743C3.29056 5.10692 2.83937 5.54361 2.57424 6.08449C2.23013 6.78649 2.04859 8.32285 2.00617 10.8921C1.97226 12.9438 2.07747 14.8105 2.29346 15.9894C2.52911 17.2758 3.17418 18.01 4.28981 18.2615C5.3032 18.49 7.99377 18.6251 11.5238 18.6248C15.1282 18.6244 17.6997 18.4951 18.7756 18.2601C19.127 18.1833 19.6276 17.9186 19.8898 17.6707C20.1626 17.4129 20.441 16.9655 20.5566 16.599C20.8723 15.5986 21.0667 12.6811 20.9789 10.2586C20.8599 6.97273 20.6098 5.94022 19.767 5.25629C19.3767 4.9395 19.1083 4.82384 18.507 4.71307C17.7627 4.57597 15.968 4.45494 14.0795 4.4145C11.8664 4.36715 11.0759 4.36377 9.50254 4.39511ZM12.0593 9.96933C13.3939 10.7936 14.4843 11.4865 14.4825 11.5091C14.4798 11.5417 9.66476 14.545 9.61515 14.545C9.60782 14.545 9.6018 13.1783 9.60177 11.5078C9.60173 9.83736 9.60871 8.47063 9.61727 8.47063C9.62587 8.47063 10.7248 9.14503 12.0593 9.96933Z"
                fill="#007AFF"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Loader
