// types
import { HideModalPayload, ModalType } from '~/redux/types/modal';

import { modalActions } from '~/redux/slices/modalSlice';
import { useStoreDispatch } from '~/redux/store';

const useModal = () => {
  const dispatch = useStoreDispatch();

  const showModal = (modalType: ModalType) => {
    dispatch(modalActions.openModal(modalType));
  };

  const hideModal = (payload: HideModalPayload) => {
    dispatch(modalActions.hideModal(payload));
  };

  return { showModal, hideModal };
};

export default useModal;
