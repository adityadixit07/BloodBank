import { createSlice } from "@reduxjs/toolkit";
import { getDonars } from "./donarAction";

const initialState = {
  record_data: [],
  error: null,
  loading: false,
  message: "",
};

const donarSlice = createSlice({
  name: "records",
  initialState: initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // get donars
    builder.addCase(getDonars.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getDonars.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.record_data = action.payload.donars;
      state.message = action.payload.message
    });
    builder.addCase(getDonars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default donarSlice;

export const { clearMessage } = donarSlice.actions;