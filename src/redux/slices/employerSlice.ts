import { createSlice } from '@reduxjs/toolkit';

// types
import { EmployerSliceState } from '../types/employer';

import { fetchEmployersThunk, registerEmployerThunk } from '../thunks';

const initialState: EmployerSliceState = {
  employers: [],
  loadings: [],
};

const employerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerEmployerThunk.pending, (state) => {
      state.loadings.push('registerEmployer');
    });
    builder.addCase(registerEmployerThunk.fulfilled, (state, { payload }) => {
      if (payload != null) state.employers.unshift(payload);

      state.loadings = state.loadings.filter((loading) => loading !== 'registerEmployer');
    });
    builder.addCase(registerEmployerThunk.rejected, (state) => {
      state.loadings = state.loadings.filter((loading) => loading !== 'registerEmployer');
    });

    builder.addCase(fetchEmployersThunk.pending, (state) => {
      state.loadings.push('fetchEmployers');
    });
    builder.addCase(fetchEmployersThunk.fulfilled, (state, { payload }) => {
      if (payload != null) state.employers = payload;

      state.loadings = state.loadings.filter((loading) => loading !== 'fetchEmployers');
    });
    builder.addCase(fetchEmployersThunk.rejected, (state) => {
      state.loadings = state.loadings.filter((loading) => loading !== 'fetchEmployers');
    });
  },
});

export default employerSlice.reducer;
