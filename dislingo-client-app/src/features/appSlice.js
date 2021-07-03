import { createSlice } from '@reduxjs/toolkit';


// this looks like its part of my reducer with the intital state defined
// this is really bad coding. confusing. jumbled. I hate this setup
// lets go back and clean this shit up later

export const appSlice = createSlice({
  name: "app",
  initialState: {
     channelId: null,
     channelName: null
  },
  reducers: {
    setChannelDetails: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    }
  }
})

export const { setChannelDetails } = appSlice.actions;


export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;



