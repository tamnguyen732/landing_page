import { Container, Image } from '~/components';

import { bindClass } from '~/lib/classNames';

import { bannerThumbImg } from '~/assets/images';
import styles from './Banner.module.scss';

const cx = bindClass(styles);

const Banner = () => {
  return (
    <Container className={cx('container')}>
      <div className={cx('left')}>
        <h3>Find The Career You Deserve</h3>
        <h1>Looking For A Job Match?</h1>
      </div>

      <div className={cx('right')}>
        <Image src={bannerThumbImg} alt='Banner' />
      </div>
    </Container>
  );
};

export default Banner;
