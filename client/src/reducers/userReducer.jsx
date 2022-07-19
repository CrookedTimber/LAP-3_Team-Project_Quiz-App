import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username') || null,
  host: false,

  currentScore: 0,
  currentAnswer: '',

  id: null,
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
    setCurrentAnswer(state, action) {
      state.username = action.payload;
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


    resetUser: () => initialState,
  },
});

export const userActions = userSlice.actions;

export default userSlice;
