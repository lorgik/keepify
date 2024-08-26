import { createSlice } from '@reduxjs/toolkit'

export type Operation = {
  id: number
  category: string
  value: number
  date: Date
}

const initialState: Operation[] = []

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    addOperation(state, action) {
      state.push({
        id: Math.round(Math.random() * 1000),
        category: action.payload.category,
        value: action.payload.value,
        date: new Date(),
      })
    },
  },
})

export const { addOperation } = operationsSlice.actions
export default operationsSlice.reducer
