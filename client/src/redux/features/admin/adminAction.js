import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

export const getDonarList = createAsyncThunk(
  "/admin/donarlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/admin/donars-list");
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
export const getHospitalsList = createAsyncThunk(
  "/admin/hospitals-list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/admin/hospitals-list");
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
export const getOrganisationsList = createAsyncThunk(
  "/admin/organisations-list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/admin/organisations-list");
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
