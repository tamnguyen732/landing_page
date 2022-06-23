import { useState } from 'react';

import { ANCHORS } from '~/constants';
import { scrollTo } from '~/helpers';
import { bindClass } from '~/lib/classNames';

import Button from '../Button';
import Container from '../Container';

import { logo } from '~/assets/images';
import styles from './Header.module.scss';

const cx = bindClass(styles);

const Header = () => {
  const [items] = useState([
    {
      title: 'Register',
      ref: ANCHORS.register,
    },
    {
      title: 'Employers',
      ref: ANCHORS.employerList,
    },
    {
      title: 'Employees',
      ref: ANCHORS.employeeList,
    },
    {
      title: 'Join the fair',
      ref: ANCHORS.joinFair,
    },
  ]);

  return (
    <Container className={cx('header')}>
      <img className={cx('logo')} src={logo} alt='Logo' />
      <ul className={cx('item-list')}>
        {items.map((item) => (
          <li className={cx('item')} onClick={() => scrollTo(item.ref)} key={item.title}>
            {item.title}
          </li>
        ))}
      </ul>
      <Button onClick={() => scrollTo(ANCHORS.register)} dark size='md'>
        Join now
      </Button>
    </Container>
  );
};

export default Header;
