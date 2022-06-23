// types
import { Employee } from '~/types/employee';

import { fetchEmployeesThunk, registerEmployeeThunk } from '../thunks';
import { useStoreDispatch } from '../store';
import { useCallback } from 'react';

const useEmployeeDispatch = () => {
  const dispatch = useStoreDispatch();

  const registerEmployeeDispatch = useCallback(
    (data: Employee) => dispatch(registerEmployeeThunk(data)),
    [dispatch],
  );

  const fetchEmployeesDispatch = useCallback(() => dispatch(fetchEmployeesThunk()), [dispatch]);

  return {
    registerEmployeeDispatch,
    fetchEmployeesDispatch,
  };
};

export default useEmployeeDispatch;
