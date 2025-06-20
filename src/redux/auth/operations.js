import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk("auth/register", async (values) => {
  const res = await axios.post("/users/signup", values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const logIn = createAsyncThunk("auth/login", async (values) => {
  const res = await axios.post("/users/login", values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk("auth/refresh", async () => {
  const res = await axios.get("/users/current");
  localStorage.setItem("token", res.data.token);
  return res.data;
});
