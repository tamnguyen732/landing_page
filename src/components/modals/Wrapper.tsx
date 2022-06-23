import { ReactNode } from 'react';
import { useModal } from '~/hooks';

import { bindClass } from '~/lib/classNames';
import { ModalType } from '~/redux/types/modal';

import styles from './Wrapper.module.scss';

const cx = bindClass(styles);

interface Props {
  children: ReactNode;
  modalType: ModalType;
  canClose?: boolean;
  className?: string;
  onClose?: () => void;
}

const Wrapper = ({ className, modalType, canClose = true, children, onClose }: Props) => {
  const { hideModal } = useModal();

  const handleHideModal = () => {
    if (onClose != null) onClose();

    if (canClose) hideModal(modalType);
  };

  return (
    <div className={cx('container')}>
      <div onClick={handleHideModal} className={cx('overlay')} />
      <div className={cx('inner', className)}>{children}</div>
    </div>
  );
};

export default Wrapper;
