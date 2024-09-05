'use client'

import { RootState } from '@/lib/store'
import styles from './SelectCategory.module.scss'
import { useSelector } from 'react-redux'
import Icon from '@/entities/Icon/Icon'
import { useOutsideClick } from '@/hooks/useOutsideClick'

type Props = {
  currentCategory: string
  setCurrentCategory: (category: string) => void
  currentOperation: string
  closeCategories: () => void
}

const SelectCategory = ({ currentCategory, setCurrentCategory, currentOperation, closeCategories }: Props) => {
  const categories = useSelector((state: RootState) => state.categories)

  const ref = useOutsideClick(closeCategories)

  function chooseCategory(name: string) {
    setCurrentCategory(name)
    closeCategories()
  }

  return (
    <div className={styles.categories} ref={ref}>
      <h3>Выберите категорию</h3>
      <div className={styles.list}>
        {categories
          .filter((c) => (currentOperation === 'Расход' ? !c.income : c.income))
          .map((c) => (
            <div
              className={`${styles.item} ${currentCategory === c.name && styles.active}`}
              key={c.name}
              onClick={() => chooseCategory(c.name)}
            >
              <div className={styles.category}>
                <Icon color={c.color} />
                <h5 className={styles.name}>{c.name}</h5>
              </div>
              <div className={styles.check}>
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="0.5" width="28" height="28" rx="14" fill="#35CC5A" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.6827 10.8291C20.1058 11.2678 20.1058 11.9792 19.6827 12.418L13.171 19.1709C12.9678 19.3816 12.6923 19.5 12.4049 19.5C12.1176 19.5 11.842 19.3816 11.6389 19.1709L8.31732 15.7263C7.89423 15.2875 7.89423 14.5762 8.31732 14.1374C8.74041 13.6986 9.42638 13.6986 9.84947 14.1374L12.4049 16.7875L18.1505 10.8291C18.5736 10.3903 19.2596 10.3903 19.6827 10.8291Z"
                    fill="#DAFFE3"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
      <button className={styles.btn}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 5.78952C11.4111 5.78952 11.7444 6.12278 11.7444 6.53388V10.2556H15.4662C15.8773 10.2556 16.2105 10.5889 16.2105 11C16.2105 11.4111 15.8773 11.7443 15.4662 11.7443H11.7444V15.4662C11.7444 15.8773 11.4111 16.2105 11 16.2105C10.5889 16.2105 10.2557 15.8773 10.2557 15.4662V11.7443H6.53388C6.12278 11.7443 5.78952 11.4111 5.78952 11C5.78952 10.5889 6.12278 10.2556 6.53388 10.2556H10.2557L10.2557 6.53388C10.2557 6.12278 10.5889 5.78952 11 5.78952Z"
            fill="#DAE7FA"
          />
        </svg>
        <h4>Добавить категорию</h4>
      </button>
    </div>
  )
}

export default SelectCategory
