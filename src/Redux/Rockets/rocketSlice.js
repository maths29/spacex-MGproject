import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v3/rockets';
export const displayRockets = createAsyncThunk('rockets', async () => {
  try {
    const retrievedRockets = await axios.get(baseURL);
    const rocketsDisplay = retrievedRockets.data.map((roc) => ({
      id: roc.id,
      name: roc.rocket_name,
      type: roc.rocket_type,
      description: roc.description,
      images: roc.flickr_images,
      reserved: false,
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
  reducers: {
    bookRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (rocket.id === rocketId
        ? { ...rocket, reserved: true }
        : rocket));
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocket) => (rocket.id === rocketId
        ? { ...rocket, reserved: false }
        : rocket));
    },
  },
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

export const { bookRocket, cancelRocket } = rocketSlice.actions;

export default rocketSlice.reducer;
