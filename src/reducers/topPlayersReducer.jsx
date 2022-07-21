import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topPlayers: [{}], 
};

const topPlayersSlice = createSlice({
    name: 'topPlayers',
    initialState,
  
    reducers: {
      setUsername(state, action) {
        state.topPlayers = state.topPlayers.push(action.payload);
      },
  
      modifyScore(state,action) {
   
      },
      selectedAnswer(state, action) {
        state.selectedAnswer = action.payload;
      },
  
      setHost(state) {
        state.host = true;
      },
  
      setId(state, action) {
        state.id = action.payload;
      },
  
      setRequestedRoom(state, action) {
        state.requestedRoom = action.payload;
      },
  
      resetUserMatchData(state) {
        state.currentScore = initialState.currentScore;
        state.selectedAnswer = initialState.selectedAnswer;
      },
  
      resetUser: () => initialState,
    },
  });
  
  export const topPlayersActions = topPlayersSlice.actions;
  
  export default topPlayersSlice;
  