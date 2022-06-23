import { HTMLAttributes, ReactNode } from 'react';

import { bindClass } from '~/lib/classNames';

import styles from './Container.module.scss';

const cx = bindClass(styles);

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({ className, children, ...rest }: Props) => {
  return (
    <section {...rest} className={cx('container', className)}>
      {children}
    </section>
  );
};

export default Container;
