import { bindClass } from '~/lib/classNames';

import styles from './BackgroundShape.module.scss';

const cx = bindClass(styles);

const Background = () => {
  return (
    <div className={cx('background')}>
      <div className={cx('background-inner')} />
    </div>
  );
};

export default Background;
