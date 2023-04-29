import { configureStore } from '@reduxjs/toolkit'
import { playersSlice } from '../features/players/playersSlice'
import playersReducer from '../features/players/playersSlice'

export const store = configureStore({
  reducer: {
      players: playersReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch