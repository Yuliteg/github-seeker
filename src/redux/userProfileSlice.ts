import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile } from "../api/fetchProfile";
import { User } from "../model/profile";

interface GithubError {
  message: string;
  documentation_url: string;
}

interface ProfileState {
  user: User | null;
  isLoading: boolean;
  error: null | GithubError;
}

const initialState: ProfileState = {
  user: null,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as GithubError;
      });
  },
});

export default profileSlice.reducer;
