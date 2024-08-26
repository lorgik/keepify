import { configureStore } from '@reduxjs/toolkit'
import operationsReducer from './features/operations/operationsSlice'
import categoriesReducer from './features/categories/categoriesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      operations: operationsReducer,
      categories: categoriesReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
