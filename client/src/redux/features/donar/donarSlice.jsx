import { createSlice } from "@reduxjs/toolkit";
import { getDonars } from "./donarAction";

const initialState = {
  donars: null,
  error: null,
};

const donarSlice = createSlice({
  name: "donars",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder.addCase(getDonars.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getDonars.fulfilled, (state, { payload }) => {
      state.donars = payload;
    });
    builder.addCase(getDonars.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

export default donarSlice;
