import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionsArray: [{}, {}], //holds api response data
  currentRoundNum: 0, //current round in game
  totalRounds: 10, //ammount of rounds being played
  roundTimeLimit: 10, //time limit in seconds for each round
  gameStart: false, //once lobby has been setup and game is ready to begin, gameStart is true through out every round
  timeout: false, // is true when time limit is reached and false on new round
  roundStart: false, // is true once answers appear and false upon transitioning to new question
};

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

    //set value of gameStart
    updateGameStart(state) {
      state.gameStart = true;
    },
    //set value of timeOut
    declareTimeout(state, action) {
      state.timeout = action.payload;
    },

    //set value of roundStart
    declareRoundStart(state, action) {
      state.roundStart = action.payload;
    },

    //add 1 to Round Number
    nextRound(state) {
      state.currentRoundNum++;
    },

    //subtract 1 to Round Number
    previousRound(state) {
      state.currentRoundNum--;
    },


    //set current round number back to its initial state
    resetCurrentRound(state) {
      state.currentRoundNum = initialState.currentRoundNum;
    },
    resetGame(state) {
      state = initialState;
    },
  },
});

export const matchActions = matchSlice.actions;
export default matchSlice;