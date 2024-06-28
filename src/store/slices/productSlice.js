import { createSlice } from "@reduxjs/toolkit";
import {
  getArchiveProducts,
  getProducts,
  getSingleProductAction,
  updateProduct,
} from "../actions/product";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productList: [],
    productHistoryList: [],
    archiveProductList: [],
    productUpdated: false,
    singleProduct: {},
    error: false,
  },
  reducers: {},
  extraReducers(builder) {
    // for get product
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.productList = payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    // For get archive product
    builder.addCase(getArchiveProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getArchiveProducts.fulfilled, (state, { payload }) => {
      state.archiveProductList = payload;
      state.loading = false;
    });
    builder.addCase(getArchiveProducts.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    // for getting single product
    builder.addCase(getSingleProductAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSingleProductAction.fulfilled, (state, { payload }) => {
      state.singleProduct = payload;
      state.loading = false;
    });
    builder.addCase(getSingleProductAction.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });

    // for updating single product
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, { payload }) => {
      state.productUpdated = true;
      state.loading = false;
    });
    builder.addCase(updateProduct.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
