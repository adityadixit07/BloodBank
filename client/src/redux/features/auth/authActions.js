import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userRegister = createAsyncThunk(
  "/auth/register",
  async (
    {
      email,
      password,
      role,
      name,
      organisationName,
      hospitalName,
      website,
      address,
      phone,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.post("/auth/register", {
        email,
        password,
        role,
        name,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      });
      const { data } = response;
      if (data?.success) {
        toast.success(data.message);
        window.location.replace("/login");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "/auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/login", { role, email, password });
      const { data } = response;
      if (data?.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        // setTimeout(()=>{
        //   window.location.replace("/");
        // })
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// for current user
export const getCurrentUser = createAsyncThunk(
  "/auth/currentuser",
  async ({ rejectWithValue }) => {
    try {
      const response = await API.get("/auth/currentuser");
      if (response?.data) {
        return response?.data;
      }
    } catch (error) {
      // console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// getting donars
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
