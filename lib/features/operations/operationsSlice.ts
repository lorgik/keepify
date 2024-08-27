import { createSlice } from '@reduxjs/toolkit'

export type Operation = {
  id: number
  category: string
  value: number
  date: string
}

const initialState: Operation[] = [
  {
    id: 1,
    category: 'Продукты',
    value: -38,
    date: 'new Date(2024, 7, 8)',
  },
  {
    id: 2,
    category: 'Одежда и обувь',
    value: -15460.5,
    date: 'new Date(2024, 7, 8)',
  },
  {
    id: 3,
    category: 'Кредит',
    value: -7750,
    date: 'new Date(2024, 7, 8)',
  },
  {
    id: 4,
    category: 'Зар. плата',
    value: 35082,
    date: 'new Date(2024, 7, 8)',
  },
  {
    id: 5,
    category: 'Транспорт',
    value: -38,
    date: 'new Date(2024, 7, 9)',
  },
  {
    id: 6,
    category: 'Жилье',
    value: -5460.21,
    date: 'new Date(2024, 7, 9)',
  },
  {
    id: 7,
    category: 'Продукты',
    value: -782,
    date: 'new Date(2024, 7, 9)',
  },
  {
    id: 8,
    category: 'Инвестиции',
    value: 15000,
    date: 'new Date(2024, 7, 9)',
  },
]

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    addOperation(state, action) {
      state.push({
        id: Math.round(Math.random() * 1000),
        category: action.payload.category,
        value: action.payload.value,
        date: new Date().toString(),
      })
    },
  },
})

export const { addOperation } = operationsSlice.actions
export default operationsSlice.reducer
