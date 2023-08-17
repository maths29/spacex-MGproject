import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/rockets';
export const displayRockets = createAsyncThunk('rockets', async () => {
  try {
    const retrievedRockets = await axios.get(baseURL);
    const rocketsDisplay = retrievedRockets.data.map((roc) => ({
      id: roc.id,
      name: roc.name,
      type: roc.type,
      flickr_images: roc.flickr_images,
    }));
    return rocketsDisplay;
  } catch (error) {
    throw Error(error);
  }
});
const initialState = {
  rockets: [],
  loading: 'idle',
};
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(displayRockets.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(displayRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.loading = 'Succeeded loading rockets';
      })
      .addCase(displayRockets.rejected, (state) => {
        state.loading = 'failed load missions';
      });
  },
});
export default rocketSlice.reducer;
