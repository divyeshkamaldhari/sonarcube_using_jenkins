import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userList: [],
    error: false,
  },
  reducers: {},
  extraReducers(builder) {
    //For get user
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.userList = payload;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
