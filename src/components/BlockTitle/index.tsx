import { bindClass } from '~/lib/classNames';

import styles from './BlockTitle.module.scss';

const cx = bindClass(styles);

interface Props {
  title: string;
  desc: string;
  alignLeft?: boolean;
}

const BlockTitle = ({ title, desc, alignLeft }: Props) => {
  return (
    <div
      className={cx('container', {
        alignLeft,
      })}
    >
      <h2 className={cx('title')}>{title}</h2>
      <p className={cx('desc')}>{desc}</p>
    </div>
  );
};

export default BlockTitle;
