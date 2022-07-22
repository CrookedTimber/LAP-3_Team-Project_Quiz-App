import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questionsArray: [{}, {}], //holds api response data
  currentRoundNum: 0, //current round in game
  totalRounds: 10, //ammount of rounds being played
  roundTimeLimit: 10, //time limit in seconds for each round
  gameStart: false, //once lobby has been setup and game is ready to begin, gameStart is true through out every round
  timeout: false, // is true when time limit is reached and false on new round
  roundStart: false, // is true once answers appear and false upon transitioning to new question
  showAnswers: false,

  showResults: false, // becomes true once all rounds of the match have been played and the last answer has been displayed
  matchEnds: false, // becomes true on last question timeout

  results: [],
  playersInGame: [], // stores the names of the players in the game
  showJoinRoomModal: false, // Boolean value is toggled when pressing the Join Game Button
  roomNum: null, // Online Game Room Number
  difficulty: 0,
  roundAnswers: { answer0: [], answer1: [], answer2: [], answer3: [] },
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

    //track current room number
    setRoomNum(state, action) {
      state.roomNum = action.payload;
    },

    //refresh current room num
    clearRoomNum(state) {
      state.roomNum = initialState.roomNum;
    },

    //set value of gameStart
    updateGameStart(state) {
      state.gameStart = true;
    },

    //set  timeOut to true
    declareTimeout(state) {
      state.timeout = true;
    },

    clearTimeout(state) {
      state.timeout = false;
    },

    //set value of roundStart
    declareRoundStart(state, action) {
      state.roundStart = action.payload;
    },

    //add 1 to Round Number
    nextRound(state) {
      state.currentRoundNum++;
    },

    setUpNextRound(state) {
      state.showAnswers = initialState.showAnswers;
      state.timeout = initialState.timeout;
      state.roundAnswers = initialState.roundAnswers;
    },

    //subtract 1 to Round Number
    previousRound(state) {
      state.currentRoundNum--;
    },

    //set current round number back to its initial state
    resetCurrentRound(state) {
      state.currentRoundNum = initialState.currentRoundNum;
    },

    revealAnswers(state) {
      state.showAnswers = true;
    },

    hideAnswers(state) {
      state.showAnswers = false;
    },

    setShowResults(state) {
      state.showResults = true;
    },

    toggleShowJoinRoomModal(state) {
      state.showJoinRoomModal = !state.showJoinRoomModal;
    },

    //push player to array
    addPlayer(state, action) {
      state.playersInGame.push(action.payload);
    },

    //cut player from array
    removePlayers(state) {
      state.playersInGame = initialState.playersInGame;
    },

    updatePlayers(state, action) {
      state.playersInGame = action.payload.players;

      // action.payload.forEach(element => {
      //   state.playersInGame.push(element);
      // });
    },

    addToRoundAnswers(state, action) {
      if (
        !state.roundAnswers[action.payload.index].includes(action.payload.value)
      ) {
        state.roundAnswers[action.payload.index].push(action.payload.value);
      }
      // console.log(state.roundAnswers[action.payload.index]);
    },

    addToResults(state, action) {
      state.results.push(action.payload);
    },

    setResults(state, action) {
      state.results = action.payload;
    },

    setMatchEnd(state) {
      state.matchEnds = true;
    },

    resetMatch: () => initialState,
  },
});

export const matchActions = matchSlice.actions;
export default matchSlice;
