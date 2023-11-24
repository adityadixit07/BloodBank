import { createSlice } from "@reduxjs/toolkit";
import {
  getDonars,
  getHospitals,
  getInventoryRecords,
  getOrganisationRecords,
} from "./getRecordAction";

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
    // get inventory--blood record
    builder.addCase(getInventoryRecords.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getInventoryRecords.fulfilled, (state, action) => {
      state.loading = false;
      state.record_data = action.payload.inventory;
      state.message = action.payload.message;
    });
    builder.addCase(getInventoryRecords.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // get donars
    builder.addCase(getDonars.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getDonars.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.record_data = action.payload.donars;
      state.message = action.payload.message;
    });
    builder.addCase(getDonars.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // get hospitals
    builder.addCase(getHospitals.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getHospitals.fulfilled, (state, action) => {
      state.loading = false;
      state.record_data = action.payload.hospitals;
      state.message = action.payload.message;
    });
    builder.addCase(getHospitals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // get organisations
    builder.addCase(getOrganisationRecords.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getOrganisationRecords.fulfilled, (state, action) => {
      state.loading = false;
      state.record_data = action.payload.organisations;
      state.message = action.payload.message;
    });
    builder.addCase(getOrganisationRecords.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default donarSlice;

export const { clearMessage } = donarSlice.actions;
