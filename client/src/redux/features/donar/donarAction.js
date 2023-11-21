import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

export const getDonars = createAsyncThunk(
  "/inventory/get-donars",
  async ({ rejectWithValue }) => {
    try {
      const response = await API.get("/inventory/get-donars");
      const { data } = response;
      if (data?.success) {
        console.log(data?.donars);
        return data?.donars;
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
