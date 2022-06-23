import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faUserPen } from '@fortawesome/free-solid-svg-icons';

import { MODAL_TYPES } from '~/redux/slices/modalSlice';
import { ANCHORS } from '~/constants';
import { useModal } from '~/hooks';
import { bindClass } from '~/lib/classNames';

import { Button, Container } from '~/components';

import styles from './Register.module.scss';

const cx = bindClass(styles);

const Register = () => {
  const { showModal } = useModal();

  return (
    <Container data-anchor={ANCHORS.register} className={cx('container')}>
      <Button
        onClick={() => showModal(MODAL_TYPES.REGISTER_EMPLOYER)}
        light
        size='md'
        className={cx('search-btn')}
      >
        <FontAwesomeIcon icon={faUserPen} />
        <span>Register as Employer</span>
      </Button>
      <Button
        onClick={() => showModal(MODAL_TYPES.REGISTER_EMPLOYEE)}
        dark
        size='md'
        className={cx('search-btn')}
      >
        <FontAwesomeIcon icon={faFilePen} />
        Register as Employee
      </Button>
    </Container>
  );
};

export default Register;
