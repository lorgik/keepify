import styles from './Tag.module.css'

type Props = {
  children: React.ReactNode
  color: string
}

const Tag = ({ children, color }: Props) => {
  return (
    <h6 className={styles.tag} style={{ backgroundColor: color }}>
      {children}
    </h6>
  )
}
export default Tag
