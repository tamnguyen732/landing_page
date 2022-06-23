import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { MODAL_TYPES } from '~/redux/slices/modalSlice';
import { useModalSelector } from '~/redux/selectors';

import ModalRegisterEmployee from './ModalRegisterEmployee';
import ModalRegisterEmployer from './ModalRegisterEmployer';

const RootModal = () => {
  const { modalTypes } = useModalSelector();

  const modals = {
    [MODAL_TYPES.REGISTER_EMPLOYEE]: <ModalRegisterEmployee key={MODAL_TYPES.REGISTER_EMPLOYEE} />,
    [MODAL_TYPES.REGISTER_EMPLOYER]: <ModalRegisterEmployer key={MODAL_TYPES.REGISTER_EMPLOYER} />,
  };

  return ReactDOM.createPortal(
    <Fragment>{modalTypes.map((type) => modals[type])}</Fragment>,
    document.getElementById('root')!,
  );
};

export default RootModal;
