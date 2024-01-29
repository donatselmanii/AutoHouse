import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
