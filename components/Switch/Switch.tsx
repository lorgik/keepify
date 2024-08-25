import { useState } from 'react'
import styles from './Switch.module.scss'

const Switch = () => {
  const [checked, setChecked] = useState(false)

  return (
    <label className={`${styles.switch} ${checked && styles.active}`}>
      <input type="checkbox" checked={checked} onChange={() => setChecked((prev) => !prev)} />
      <div className={styles.dot}></div>
    </label>
  )
}

export default Switch
