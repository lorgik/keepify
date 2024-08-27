import { Category } from '@/lib/features/categories/categoriesSlice'

export function getColor(categories: Category[], category: string) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].name === category) {
      return categories[i].color
    }
  }
}
