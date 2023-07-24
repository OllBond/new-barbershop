import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/mastersApi";

export const fetchMasters = createAsyncThunk(
  "masters/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllMasters();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
