import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_DATA = 'https://api.spacexdata.com/v3/missions';

export const displayMissions = createAsyncThunk('missions', async () => {
  try {
    const retrievedMissions = await axios.get(API_DATA);
    const missionsDisplay = retrievedMissions.data.map((mission, index) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      itemNumber: index + 1,
    }));
    return missionsDisplay;
  } catch (error) {
    throw Error(error);
  }
});

const initialState = {
  missions: [],
  loading: 'idle',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinButton: (state, action) => {
      const joinedMissionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === joinedMissionId
        ? { ...mission, reserved: true }
        : mission));
    },
    leaveButton: (state, action) => {
      const leftMissionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === leftMissionId
        ? { ...mission, reserved: false }
        : mission));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(displayMissions.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(displayMissions.fulfilled, (state, action) => {
        state.missions = action.payload.map((rocket) => ({
          ...rocket,
          reserved: false,
        }));
        state.loading = 'Succeeded';
      })
      .addCase(displayMissions.rejected, (state) => {
        state.loading = 'failed load missions';
      });
  },
});

export const { joinButton, leaveButton } = missionSlice.actions;

export default missionSlice.reducer;
