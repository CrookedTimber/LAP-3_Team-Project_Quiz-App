import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questionsArray: [], //holds api response data
    currentRoundNum: 0, //current round in game
    totalRounds: 10, //ammount of rounds being played
    roundTimeLimit: 10, //time limit in seconds for each round
    timeOut: false, // is true when time limit is reached and false on new round
    roundStart: false, // is true once answers appear and false upon transitioning to new question
}

const matchSlice = createSlice({
    name: 'match',
    initialState: initialState,
    reducers: {

      //populate array with data
      updateQuestionsArray(state, action) {
        state.questionsArray = action.payload;
      },

      //clear array of data
      clearQuestionsArray(state) {
        state.questionsArray = [];
      },

      //set value of timeOut
      declareTimeOut(state, action){
        state.timeOut = action.payload;
      },

      //set value of roundStart
      declareRoundStart(state, action){
        state.roundStart = action.payload;
      },

      //update current round number
      setCurrentRound(state, action){
        state.currentRoundNum = action.payload;
      },

      //set current round number back to its initial state
      resetCurrentRound(state){
        state.currentRoundNum = initialState.currentRoundNum;
      }

    },
  });
  
  export const matchActions = matchSlice.actions;
  export default matchSlice;