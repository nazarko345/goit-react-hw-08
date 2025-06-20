import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    const response = await axios.post("/contacts", newContact);
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
