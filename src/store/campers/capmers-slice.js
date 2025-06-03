import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './campers-actions.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    isLoading: false,
    isLoadingMore: false,
    error: null,
    pagination: {
      page: 1,
      limit: 4,
      hasMore: false,
    },
  },
  reducers: {
    resetCampers(state) {
      state.campers = [];
      state.pagination = {
        page: 1,
        limit: 4,
        hasMore: false,
      };
      state.isLoading = false;
      state.isLoadingMore = false;
      state.error = null;
    },
  },
  extraReducers({ addCase }) {
    addCase(getCampers.pending, (state, action) => {
      const { page = 1 } = action.meta.arg || {};
      state.isLoading = page === 1;
      state.isLoadingMore = page > 1;
      state.error = null;
    });
    addCase(getCampers.fulfilled, (state, action) => {
      const { page, campers, limit, total } = action.payload;
      if (page === 1) {
        state.campers = campers;
      } else {
        state.campers = [...state.campers, ...campers];
      }

      state.pagination.page = page;
      state.pagination.limit = limit;
      state.pagination.hasMore = page * limit < total;
      state.isLoading = false;
      state.isLoadingMore = false;
      state.error = null;
    });
    addCase(getCampers.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoadingMore = false;
      state.error = action.payload;
    });
  },
});

export const { resetCampers } = campersSlice.actions;

export default campersSlice.reducer;
