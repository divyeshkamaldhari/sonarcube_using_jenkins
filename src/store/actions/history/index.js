import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../api/config";
import axios from "axios";

// For history of product
export const getProductsHistory = createAsyncThunk(
  "product/getProductsHistory",
  async (_, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.get(API_URL.history.productsHistory, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
