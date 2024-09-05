import styles from './Icon.module.scss'

type Props = {
  color: string | undefined
}

const Icon = ({ color }: Props) => {
  return (
    <div className={styles.icon} style={{ backgroundColor: color }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.8564 14H12.9127C13.4473 14 13.8864 13.5864 13.95 13.0645L15 2.57727H11.8182V0H10.5645V2.57727H7.40182L7.59273 4.06636C8.68091 4.36545 9.69909 4.90636 10.31 5.50455C11.2264 6.40818 11.8564 7.34364 11.8564 8.87091V14ZM1 13.3636V12.7273H10.5645V13.3636C10.5645 13.7073 10.2782 14 9.90909 14H1.63636C1.28636 14 1 13.7073 1 13.3636ZM10.5645 8.90909C10.5645 3.81818 1 3.81818 1 8.90909H10.5645ZM1 10.1818H10.5455V11.4545H1V10.1818Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

export default Icon
