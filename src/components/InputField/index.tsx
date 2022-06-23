import { InputHTMLAttributes } from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

import { bindClass } from '~/lib/classNames';

import styles from './InputField.module.scss';

const cx = bindClass(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  errors: { [x: string]: any };
}

const InputField = ({ className, register, errors, type, ...rest }: Props) => {
  const errorMessage = errors[register.name]?.message;

  return (
    <div className={cx('wrapper', className)}>
      <input type={type ?? 'text'} {...register} className={cx('input')} {...rest} />
      {errorMessage && <p className={cx('error-msg')}>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
