import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "../actions/user";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    loading: false,
    loggedInUser: {},
    error: "",
  },
  // reducers : {
  //     setLoggedInUser : (state, action) => {
  //         state.loggedInUser = action.payload;
  //     }
  // }
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.loggedInUser = payload;
    });
    builder.addCase(getUserDetails.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setLoggedInUser } = authSlice.actions;

export default authSlice.reducer;
