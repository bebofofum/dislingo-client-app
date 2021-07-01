import { createSlice } from '@reduxjs/toolkit';

// this looks like its part of my reducer with the intital state defined
// this is really bad coding. confusing. jumbled. I hate this setup
// lets go back and clean this shit up later

export const userSlice = createSlice({
  name: "user",
  initialState: {
     user: null
  },
  reducers: {
    loginUser: (state,action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    }
  }
})

export const { loginUser, logoutUser } = userSlice.actions;


export const selectUser = (state) => state.user.user;

export default userSlice.reducer;



