import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
export const selectUser = (state) => state.user;