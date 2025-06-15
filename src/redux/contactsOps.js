import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://684c6f8bed2578be881ecdad.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newTask) => {
    const response = await axios.post("/contacts/", newTask);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId) => {
    const response = await axios.delete(`/contacts/${taskId}`);
    return response.data;
  }
);
