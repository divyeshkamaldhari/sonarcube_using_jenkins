import { createSlice } from "@reduxjs/toolkit";
import { getAllBatchs } from "../actions/batch";

const batchSlice = createSlice({
  name: "batchSlice",
  initialState: {
    batchLoading: false,
    batchList: [],
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllBatchs.pending, (state) => {
      state.batchLoading = true;
    });
    builder.addCase(getAllBatchs.fulfilled, (state, { payload }) => {
      state.batchLoading = false;
      state.batchList = payload;
    });
    builder.addCase(getAllBatchs.rejected, (state, { payload }) => {
      state.batchLoading = false;
      state.error = payload;
    });
  },
});

export default batchSlice.reducer;
