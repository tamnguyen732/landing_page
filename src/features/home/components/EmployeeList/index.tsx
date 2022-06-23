import { useEffect } from 'react';

import { ANCHORS, LIMITS } from '~/constants';
import { useEmployeeDispatch } from '~/redux/dispatches';
import { bindClass } from '~/lib/classNames';
import { useEmployeeSelector } from '~/redux/selectors';
import { usePaginate } from '~/hooks';

import { Container, BlockTitle, Image } from '~/components';
import Pagination from '../../common/Pagination';

import styles from './EmployeeList.module.scss';

const cx = bindClass(styles);

const EmployeeList = () => {
  const { fetchEmployeesDispatch } = useEmployeeDispatch();
  const { employees, loadings: employeeLoadings } = useEmployeeSelector();

  const isLoading = employeeLoadings.includes('fetchEmployees');

  const { disablePrev, disableNext, renderItems, moveToNextPage, moveToPrevPage } = usePaginate({
    items: employees,
    limit: LIMITS.EMPLOYEES,
  });

  useEffect(() => {
    fetchEmployeesDispatch();
  }, [fetchEmployeesDispatch]);

  return (
    <Container data-anchor={ANCHORS.employeeList} className={cx('container')}>
      <BlockTitle title='Our employees' desc='Check out here' />

      <ul className={cx('card-list')}>
        {renderItems().map(
          ({ id, avatar, firstName, lastName, occupation, position, experience }) => (
            <li key={id} className={cx('card')}>
              <Image className={cx('card-img')} src={avatar} alt='Company' />
              <div className={cx('card-info')}>
                <h3 className={cx('card-title')}>
                  {firstName} {lastName}
                </h3>
                <p>Occupation: {occupation}</p>
                <p>Position: {position}</p>
                {occupation === 'working' && experience && <p>Experience: {experience} years</p>}
              </div>
              {/* <a className={cx('card-resume')} href={resume} target='_blank' rel='noreferrer'>
                View resume
              </a> */}
            </li>
          ),
        )}
      </ul>

      <Pagination
        loading={isLoading}
        disablePrev={disablePrev || isLoading}
        disableNext={disableNext || isLoading}
        onPrevPage={moveToPrevPage}
        onNextPage={moveToNextPage}
      />
    </Container>
  );
};

export default EmployeeList;
