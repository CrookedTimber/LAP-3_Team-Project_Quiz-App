import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username') || null,
  host: false,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },

    setHost(state) {
      state.host = true;
    },

    setId(state, action) {
      state.id = action.payload;
    },

    resetUser: () => initialState,
  },
});

export const userActions = userSlice.actions;

export default userSlice;
