import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { convertUserData } from "./userUtils";

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (username: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const userData = convertUserData(response.data);
      return userData;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return rejectWithValue(axiosError.response.data);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);
