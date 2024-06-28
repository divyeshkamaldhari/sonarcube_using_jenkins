import { configureStore } from "@reduxjs/toolkit";
import toggleStates from "./slices/toggleStates";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";
import authSlice from "./slices/authSlice";
import historySlice from "./slices/historySlice";
import batchSlice from "./slices/batchSlice";

export const Store = configureStore({
  reducer: {
    toggleStates: toggleStates,
    product: productSlice,
    user: userSlice,
    auth: authSlice,
    history: historySlice,
    batch: batchSlice,
  },
});
