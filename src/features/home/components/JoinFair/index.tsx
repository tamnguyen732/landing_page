import { Container, Image } from '~/components';

import { ANCHORS } from '~/constants';
import { bindClass } from '~/lib/classNames';

import { joinFairImg } from '~/assets/images';
import styles from './JoinFair.module.scss';

const cx = bindClass(styles);

const JoinFair = () => {
  return (
    <Container data-anchor={ANCHORS.joinFair} className={cx('container')}>
      <Image className={cx('img')} src={joinFairImg} alt='Join the fair' />
      <a className={cx('link')} href='https://forms.gle/fREr4WUTzSdeHYNV6' target='_blank'>
        Join The Fair
      </a>
    </Container>
  );
};

export default JoinFair;
