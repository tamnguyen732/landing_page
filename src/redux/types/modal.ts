import { MODAL_TYPES } from '../slices/modalSlice';

export type ModalType = keyof typeof MODAL_TYPES;

export interface ModalSliceState {
  modalTypes: ModalType[];
}

export type HideModalPayload = ModalType | ModalType[];
