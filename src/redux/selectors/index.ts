import { useStoreSelector } from '../store';

export const useEmployeeSelector = () => useStoreSelector((state) => state.employee);

export const useEmployerSelector = () => useStoreSelector((state) => state.employer);

export const useModalSelector = () => useStoreSelector((state) => state.modal);
