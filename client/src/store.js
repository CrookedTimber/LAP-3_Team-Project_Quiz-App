import userSlice from './reducers/userReducer';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: userSlice.reducer });

export default store;
