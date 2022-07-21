import { userSlice, matchSlice } from './reducers';

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

const store = configureStore({
  reducer: { user: userSlice.reducer, match: matchSlice.reducer },
});

export default store;
