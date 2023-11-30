import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

export const getBloodGroupData = createAsyncThunk(
  "/analytics/bloodgroup-data",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/analytics/bloodgroup-data");
      const { data } = response;
      if (data?.success) {
        return data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
