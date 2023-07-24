import { createSlice } from "@reduxjs/toolkit";
import { fetchMasters } from "./masters-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "masters",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMasters.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchMasters.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchMasters.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default contactsSlice.reducer;
