import { useCallback } from 'react';

// types
import { Employer } from '~/types/employer';

import { fetchEmployersThunk, registerEmployerThunk } from '../thunks';
import { useStoreDispatch } from '../store';

const useEmployerDispatch = () => {
  const dispatch = useStoreDispatch();

  const registerEmployerDispatch = useCallback(
    (data: Employer) => dispatch(registerEmployerThunk(data)),
    [dispatch],
  );

  const fetchEmployersDispatch = useCallback(() => dispatch(fetchEmployersThunk()), [dispatch]);

  return {
    registerEmployerDispatch,
    fetchEmployersDispatch,
  };
};

export default useEmployerDispatch;
