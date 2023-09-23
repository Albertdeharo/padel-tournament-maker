import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const courtsSlice = createSlice({
  name: 'courts',
  initialState,
  reducers: {
    addCourt: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addCourt } = courtsSlice.actions

export default courtsSlice.reducer