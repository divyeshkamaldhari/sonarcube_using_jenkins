import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../api/config";
import axios from "axios";

//for create product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.post(API_URL.product.create, payload, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for get product list
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.get(API_URL.product.get, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for getting single product
export const getSingleProductAction = createAsyncThunk(
  "product/getSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.get(API_URL.product.getSingleProduct, {
        headers: { Authorization: `Bearer ${Token}`, id: id },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for delete product
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.delete(API_URL.product.delete, {
        params: { id: id },
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for update product
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(
        API_URL.product.update,
        payload?.formData,
        {
          params: { id: payload?.id },
          headers: { Authorization: `Bearer ${Token}` },
        }
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// For scane Product
export const scaneProductAction = createAsyncThunk(
  "proudct/scaneProduct",
  async (
    { userId, productId, nextScane, lastScane, scanCount, isChecked },
    { rejectWithValue }
  ) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(
        `${API_URL.product.scaneProduct}?id=${productId}`,
        {
          userId,
          nextScane,
          lastScane,
          scanCount,
          isChecked,
        },
        { headers: { Authorization: `Bearer ${Token}` } }
      );

      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// For archive product
export const archiveProduct = createAsyncThunk(
  "product/archiveProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(API_URL.product.archive, payload, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// For unArchive product
export const unArchiveProduct = createAsyncThunk(
  "product/unArchiveProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(
        API_URL.product.unArchiveProduct,
        payload,
        {
          headers: { Authorization: `Bearer ${Token}` },
        }
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// For get archive products
export const getArchiveProducts = createAsyncThunk(
  "product/getArchiveProducts",
  async (_, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.get(API_URL.product.getArchiveProduct, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for update search
export const searchProduct = createAsyncThunk(
  "product/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(API_URL.product.search, "", {
        params: { search: query },
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// For search archive product
export const searchArchiveProduct = createAsyncThunk(
  "product/searchArchiveProduct",
  async (query, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(
        API_URL.product.searchArchiveProduct,
        "",
        {
          params: { search: query },
          headers: { Authorization: `Bearer ${Token}` },
        }
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
