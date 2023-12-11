import { createSlice } from "@reduxjs/toolkit";
import {
  getDonarList,
  getHospitalsList,
  getOrganisationsList,
} from "./adminAction";

const initialState = {
  admin: null,
  recordList: [],
  isLoading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = "";
    },
    clearRecordList: (state) => {
      state.recordList = [];
    },
  },
  extraReducers: (builder) => {
    // get donars list
    builder.addCase(getDonarList.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getDonarList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recordList = action.payload.donarsList;
    });
    builder.addCase(getDonarList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    // get hospitals list
    builder.addCase(getHospitalsList.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getHospitalsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recordList = action.payload.hospitalsList;
    });
    builder.addCase(getHospitalsList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //   get organisations list
    builder.addCase(getOrganisationsList.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getOrganisationsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recordList = action.payload.organisationsList;
    });
    builder.addCase(getOrganisationsList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { clearMessage, clearRecordList } = adminSlice.actions;
export default adminSlice;
