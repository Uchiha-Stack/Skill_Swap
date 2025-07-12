// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  token: null,
  image: null, // <-- Add image field
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.image = action.payload.image || null;
    },
    logoutUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
      state.image = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
