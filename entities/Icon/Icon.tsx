import { Category } from '@/lib/features/categories/categoriesSlice'
import styles from './Icon.module.scss'

type Props = {
    category: Category | undefined
}

const Icon = ({ category }: Props) => {
    const Img = category?.image

    return (
        <div className={styles.icon} style={{ backgroundColor: category?.color }}>
            <Img />
        </div>
    )
}

export default Icon
