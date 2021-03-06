import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username') || null,
  host: false,

  currentScore: 0,
  selectedAnswer: null,

  index: null,
  requestedRoom: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },

    increaseScore(state) {
      state.currentScore++;
    },
    selectedAnswer(state, action) {
      state.selectedAnswer = action.payload;
    },

    setHost(state) {
      state.host = true;
    },

    setIndex(state, action) {
      state.index = action.payload;
    },

    setRequestedRoom(state, action) {
      state.requestedRoom = action.payload;
    },

    resetUserMatchData(state) {
      state.currentScore = initialState.currentScore;
      state.selectedAnswer = initialState.selectedAnswer;

      state.host = initialState.host;
      state.index = initialState.index;
      state.requestedRoom = initialState.requestedRoom;
    },

    resetUser: () => initialState,
  },
});

export const userActions = userSlice.actions;

export default userSlice;
