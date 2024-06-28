import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../api/config";
import axios from "axios";

// For create batch
export const createBatch = createAsyncThunk(
  "batch/createBatch",
  async ({ payloadObj }, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.post(API_URL.batch.create, payloadObj, {
        headers: { Authorization: `Bearer ${Token}` },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// For get all batchs
export const getAllBatchs = createAsyncThunk(
  "batch/getAllBatchs",
  async (_, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.get(API_URL.batch.getAllBatch, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//For get single batch
export const getSingleBatch = createAsyncThunk(
  "batch/getSingleBatch",
  async ({ id }, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.get(API_URL.batch.getSingleBatch, {
        params: { id: id },
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//For update batch
export const updateBatch = createAsyncThunk(
  "batch/updateBatch",
  async ({ payloadObjs, batchId }, { rejectWithValue }) => {
    const Token = localStorage.getItem("access_token");
    const data = await axios.put(API_URL.batch.update, payloadObjs, {
      params: { id: batchId },
      headers: { Authorization: `Bearer ${Token}` },
    });
    return data.data;
  }
);
//For scan Batch
export const scanBatchAction = createAsyncThunk(
  "/batch/scanBatch",
  async (
    { userId, batchId, nextScane, lastScane, scanCount, isChecked },
    { rejectWithValue }
  ) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(
        API_URL.batch.scan,
        {
          userId,
          batchId,
          nextScane,
          lastScane,
          scanCount,
          isChecked,
        },
        {
          params: { id: batchId },
          headers: { Authorization: `Bearer ${Token}` },
        }
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//For delete batch
export const deleteBatch = createAsyncThunk(
  "batch/deleteBatch",
  async ({ batchId }, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.delete(API_URL.batch.delete, {
        params: { id: batchId },
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
