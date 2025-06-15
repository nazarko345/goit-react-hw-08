import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice.js';
import filtersSlice from "./filtersSlice.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersSlice,
  },
});
