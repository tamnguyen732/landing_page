import { ReactNode } from 'react';

import { bindClass } from '~/lib/classNames';
import { useEmployeeSelector, useEmployerSelector } from '~/redux/selectors';

import { Button, Spinner } from '~/components';

import styles from './RegisterForm.module.scss';

const cx = bindClass(styles);

interface Props {
  title: string;
  children: ReactNode;
  onSubmit: (data: any) => Promise<void>;
}

const RegisterForm = ({ title, children, onSubmit }: Props) => {
  const { loadings: employerLoadings } = useEmployerSelector();
  const { loadings: employeeLoadings } = useEmployeeSelector();

  const isLoading =
    employeeLoadings.includes('registerEmployee') || employerLoadings.includes('registerEmployer');

  return (
    <div className={cx('container')}>
      <h2 className={cx('form-title')}>{title}</h2>
      <form onSubmit={onSubmit} className={cx('form')}>
        {children}

        <Button loading={isLoading} size='md' className={cx('submit-btn')} type='submit' primary>
          {isLoading ? <Spinner /> : 'Register'}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
