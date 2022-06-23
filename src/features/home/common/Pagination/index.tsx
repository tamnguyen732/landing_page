import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { bindClass } from '~/lib/classNames';

import { Button, Spinner } from '~/components';

import styles from './Pagination.module.scss';

const cx = bindClass(styles);

interface Props {
  loading: boolean;
  disableNext?: boolean;
  disablePrev?: boolean;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination = ({ disablePrev, disableNext, loading, onPrevPage, onNextPage }: Props) => {
  return (
    <div className={cx('pagination')}>
      <Button
        disabled={disablePrev}
        onClick={() => {
          if (!loading) onPrevPage();
        }}
        className={cx('pagination-btn')}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <Button
        loading={loading}
        disabled={disableNext}
        onClick={() => {
          if (!loading) onNextPage();
        }}
        className={cx('pagination-btn')}
      >
        {loading ? <Spinner dark /> : <FontAwesomeIcon icon={faAngleRight} />}
      </Button>
    </div>
  );
};

export default Pagination;
