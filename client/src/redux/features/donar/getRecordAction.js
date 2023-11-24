import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

// inventory record------> blood records
export const getInventoryRecords = createAsyncThunk(
  "/inventory/get-inventory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/inventory/get-inventory");
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

export const getDonars = createAsyncThunk(
  "/inventory/get-donars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/inventory/get-donars");
      const { data } = response;
      if (data?.success) {
        // console.log(data?.donars);
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

export const getHospitals = createAsyncThunk(
  "/inventory/get-hospitals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/inventory/get-hospitals");
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

export const getOrganisationRecords = createAsyncThunk(
  "/inventory/organisation",
  async (userRole, { rejectWithValue }) => {
    try {
      let endpoint = "";
      if (userRole === "donar") {
        endpoint = "/inventory/get-organisations";
      } else if (userRole === "hospital") {
        endpoint = "/inventory/get-org-for-hospital";
      }
      const response = await API.get(endpoint);
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

// for hospital get consumer records
export const getConsumerRecords = createAsyncThunk(
  "/inventory/get-inventory-hospital",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "out",
          hospital: userId,
        },
      });
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

export const getDonationRecords = createAsyncThunk(
  "/inventory/get-donation-record",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donar: userId,
        },
      });
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
