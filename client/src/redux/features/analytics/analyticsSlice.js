import { createSlice } from "@reduxjs/toolkit";
import { getBloodGroupData } from "./analyticsAction";

const initialState = {
  analyticsData: [],
  error: null,
  loading: false,
  message: "",
};

const analyticSlice = createSlice({
  name: "analytics",
  initialState: initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // get analytics data
    builder.addCase(getBloodGroupData.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getBloodGroupData.fulfilled, (state, action) => {
      state.loading = false;
      state.analyticsData = action.payload.bloodGroupData;
      state.message = action.payload.message;
    });
    builder.addCase(getBloodGroupData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default analyticSlice;

export const { clearMessage } = analyticSlice.actions;
