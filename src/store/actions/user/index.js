import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../api/config";
import axios from "axios";

//for create user
export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.post(API_URL.user.create, payload, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for get user list
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.get(API_URL.user.get, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// for get user
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async ({ Token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API_URL.user.getUserDetails, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for delete user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.delete(API_URL.user.delete, {
        params: { id: id },
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for update user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(API_URL.user.update, payload?.formData, {
        params: { id: payload?.id },
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for update search
export const searchUsers = createAsyncThunk(
  "user/searchUsers",
  async (query, { rejectWithValue }) => {
    try {
      const Token = localStorage.getItem("access_token");
      const { data } = await axios.put(API_URL.user.search, "", {
        params: { search: query },
        headers: { Authorization: `Bearer ${Token}` },
      });
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//for user login
export const loggedInUser = createAsyncThunk(
  "user/loggedInUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(API_URL.user.login, payload);
      return data.token;
    } catch (error) {
      return { error: "failed", message: "Invalid Email And Password" };
    }
  }
);
