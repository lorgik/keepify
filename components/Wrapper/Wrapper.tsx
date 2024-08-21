import Footer from '../Footer/Footer'
import styles from './Wrapper.module.css'

type Props = {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Wrapper
