import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        playerName: "Albert",
        playerCategory: "C"
    },
    {
        id: "5",
        playerName: "Zakkka",
        playerCategory: "C+"
    },
    {
        id: "2",
        playerName: "Alba",
        playerCategory: "B"
    },
    {
        id: "3",
        playerName: "Pampli",
        playerCategory: "A"
    },
    {
        id: "4",
        playerName: "Nacho",
        playerCategory: "C-"
    }
]

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.push(action.payload)
    },
    editPlayer: (state, action) => {
        const { id, playerName, playerCategory } = action.payload;
        const foundPlayer = state.find((player) => player.id === id);
        if (foundPlayer) {
            console.log(foundPlayer.playerName)
            foundPlayer.playerName = playerName;
            foundPlayer.playerCategory = playerCategory;
        }
      },
    deletePlayer: (state, action) => {
        const foundPlayer = state.find((player) => player.id === action.payload);
        if (foundPlayer) {
          state.splice(state.indexOf(foundPlayer), 1);
        }
    },
  },
})

export const { addPlayer, deletePlayer, editPlayer } = playersSlice.actions

export default playersSlice.reducer