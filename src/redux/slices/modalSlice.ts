import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { HideModalPayload, ModalSliceState, ModalType } from '../types/modal';

export const MODAL_TYPES = {
  REGISTER_EMPLOYER: 'REGISTER_EMPLOYER',
  REGISTER_EMPLOYEE: 'REGISTER_EMPLOYEE',
} as const;

const initialState: ModalSliceState = {
  modalTypes: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<ModalType>) => {
      state.modalTypes.push(payload);
    },

    hideModal: (state, { payload }: PayloadAction<HideModalPayload>) => {
      if (Array.isArray(payload))
        state.modalTypes = state.modalTypes.filter((type) => !payload.includes(type));
      else state.modalTypes = state.modalTypes.filter((type) => type !== payload);
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
