import { configureStore } from '@reduxjs/toolkit'
import playersReducer from '../components/Players/playersSlice'

export const store = configureStore({
  reducer: {
      players: playersReducer
  },
})