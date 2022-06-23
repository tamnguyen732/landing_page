import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

// types
import { AppDispatch, RootState } from '~/types/store';

import rootReducer from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useStoreDispatch = () => useDispatch<AppDispatch>();

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
