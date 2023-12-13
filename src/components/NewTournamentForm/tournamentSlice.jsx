import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tournamentName: '',
};

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTournamentData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setTournamentData } = tournamentSlice.actions;

export default tournamentSlice.reducer;
