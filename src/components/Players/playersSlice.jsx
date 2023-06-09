import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.push(action.payload)
    },
    editPlayer: (state, action) => {
        const { id, firstPlayerName, secondPlayerName, playerCategory, playerGender } = action.payload;
        const foundPlayer = state.find((player) => player.id === id);
        if (foundPlayer) {
            foundPlayer.firstPlayerName = firstPlayerName;
            foundPlayer.secondPlayerName = secondPlayerName;
            foundPlayer.playerCategory = playerCategory;
            foundPlayer.playerGender = playerGender;
        }
      },
    deletePlayer: (state, action) => {
        const foundPlayer = state.find((player) => player.id === action.payload);
        if (foundPlayer) {
          state.splice(state.indexOf(foundPlayer), 1);
        }
    },
    updatePlayersList: (state, action) => {
      // clean state
      /* state.splice(0,state.length) */
      state.push(action.payload)
    },
  },
})

export const { addPlayer, deletePlayer, editPlayer, updatePlayersList } = playersSlice.actions

export default playersSlice.reducer