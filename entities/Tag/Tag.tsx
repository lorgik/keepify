import styles from './Tag.module.scss'

type Props = {
  children: React.ReactNode
  color: string | undefined
}

const Tag = ({ children, color }: Props) => {
  return (
    <h6 className={styles.tag} style={{ backgroundColor: color, color: '#ffffff' }}>
      {children}
    </h6>
  )
}
export default Tag
