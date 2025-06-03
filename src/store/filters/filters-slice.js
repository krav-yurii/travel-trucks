import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: [],
  form: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
