import { createSlice } from '@reduxjs/toolkit'

export type User = {
  firstName: string
  lastName: string
  username: string
  imageUrl: string
}

const initialState: User = {
  firstName: 'Имя',
  lastName: 'Фамилия',
  username: 'username',
  imageUrl: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addInfo(state, action) {
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
        imageUrl: '',
      }
    },
  },
})

export const { addInfo } = userSlice.actions
export default userSlice.reducer
