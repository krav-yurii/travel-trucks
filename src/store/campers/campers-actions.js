import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '@api/index.js';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async ({ page = 1, limit = 4, filters = {} }, { rejectWithValue }) => {
    try {
      const response = await api.campers.getCampers({ page, limit, ...filters });
      return { campers: response.data.items, total: response.data.total, page, limit };
    } catch (error) {
      return rejectWithValue(error.data);
    }
  },
);

export const getCamper = createAsyncThunk('campers/getCamper', async (id, { rejectWithValue }) => {
  try {
    const response = await api.campers.getCamper(id);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.data);
  }
});
