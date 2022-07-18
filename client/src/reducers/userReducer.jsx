import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: localStorage.getItem('username') || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    resetUsername(state) {
      state.username = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
