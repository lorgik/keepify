import { createSlice } from '@reduxjs/toolkit'

export type Category = {
  id: number
  name: string
  color: string
  income: boolean
}

const initialState: Category[] = [
  {
    id: 0,
    name: 'Фастфуд',
    color: '#36C6C9',
    income: false,
  },
  {
    id: 1,
    name: 'Продукты',
    color: '#F48712',
    income: false,
  },
  {
    id: 2,
    name: 'Жилье',
    color: '#2C88EA',
    income: false,
  },
  {
    id: 3,
    name: 'Одежда и обувь',
    color: '#7951F5',
    income: false,
  },
  {
    id: 4,
    name: 'Транспорт',
    color: '#E23235',
    income: false,
  },
  {
    id: 5,
    name: 'Кредиты',
    color: '#3ADB7D',
    income: false,
  },
  {
    id: 6,
    name: 'Зар. плата',
    color: '#007AFF',
    income: true,
  },
  {
    id: 7,
    name: 'Бизнес',
    color: '#FF8400',
    income: true,
  },
  {
    id: 8,
    name: 'Инвестиции',
    color: '#35CC5A',
    income: true,
  },
]

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        color: action.payload.color,
        income: action.payload.income,
      })
    },
  },
})

export const { addCategory } = categoriesSlice.actions
export default categoriesSlice.reducer
