import { ButtonHTMLAttributes, ReactNode } from 'react';

import { bindClass } from '~/lib/classNames';

import styles from './Button.module.scss';

const cx = bindClass(styles);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  primary?: boolean;
  light?: boolean;
  dark?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  children,
  light,
  dark,
  className,
  primary,
  size,
  loading,
  disabled,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      onClick={(e) => {
        if (!loading && rest.onClick) rest.onClick(e);
      }}
      className={cx('btn', className, {
        light,
        dark,
        primary,
        small: size === 'sm',
        medium: size === 'md',
        disabled: loading || disabled,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
