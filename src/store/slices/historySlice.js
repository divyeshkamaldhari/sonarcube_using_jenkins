import { createSlice } from "@reduxjs/toolkit";
import { getProductsHistory } from "../actions/history";

const historySlice = createSlice({
  name: "history",
  initialState: {
    loading: false,
    productHistoryList: [],
    error: false,
  },
  reducers: {},
  extraReducers(builder) {
    // For product history
    builder.addCase(getProductsHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductsHistory.fulfilled, (state, { payload }) => {
      state.productHistoryList = payload;
      state.loading = false;
    });
    builder.addCase(getProductsHistory.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export default historySlice.reducer;
