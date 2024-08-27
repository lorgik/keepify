import { useState } from 'react'
import styles from './Switch.module.scss'

type Props = {
  isChecked: boolean
  handleToggle: () => void
}

const Switch = ({ isChecked, handleToggle }: Props) => {
  const [checked, setChecked] = useState(isChecked)

  function handleSwitch() {
    setChecked((prev) => !prev)
    handleToggle()
  }

  return (
    <label className={`${styles.switch} ${checked && styles.active}`}>
      <input type="checkbox" checked={checked} onChange={handleSwitch} />
      <div className={styles.dot} style={{ backgroundColor: '#ffffff' }}></div>
    </label>
  )
}

export default Switch
