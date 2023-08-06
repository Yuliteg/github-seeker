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
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
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

export const { clearUser } = profileSlice.actions;
export default profileSlice.reducer;
