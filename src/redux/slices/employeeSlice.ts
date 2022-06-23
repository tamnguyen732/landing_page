import { createSlice } from '@reduxjs/toolkit';

// types
import { EmployeeSliceState } from '../types/employee';

import { fetchEmployeesThunk, registerEmployeeThunk } from '../thunks';

const initialState: EmployeeSliceState = {
  employees: [],
  loadings: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerEmployeeThunk.pending, (state) => {
      state.loadings.push('registerEmployee');
    });
    builder.addCase(registerEmployeeThunk.fulfilled, (state, { payload }) => {
      if (payload != null) state.employees.unshift(payload);

      state.loadings = state.loadings.filter((loading) => loading !== 'registerEmployee');
    });
    builder.addCase(registerEmployeeThunk.rejected, (state) => {
      state.loadings = state.loadings.filter((loading) => loading !== 'registerEmployee');
    });

    builder.addCase(fetchEmployeesThunk.pending, (state) => {
      state.loadings.push('fetchEmployees');
    });
    builder.addCase(fetchEmployeesThunk.fulfilled, (state, { payload }) => {
      if (payload != null) state.employees = payload;

      state.loadings = state.loadings.filter((loading) => loading !== 'fetchEmployees');
    });
    builder.addCase(fetchEmployeesThunk.rejected, (state) => {
      state.loadings = state.loadings.filter((loading) => loading !== 'fetchEmployees');
    });
  },
});

export default employeeSlice.reducer;
