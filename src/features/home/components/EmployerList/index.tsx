import { useEffect } from 'react';

import { ANCHORS, LIMITS } from '~/constants';
import { useEmployerDispatch } from '~/redux/dispatches';
import { bindClass } from '~/lib/classNames';
import { useEmployerSelector } from '~/redux/selectors';
import { usePaginate } from '~/hooks';

import { Container, BlockTitle, Image } from '~/components';
import Pagination from '../../common/Pagination';

import styles from './EmployerList.module.scss';

const cx = bindClass(styles);

const EmployerList = () => {
  const { fetchEmployersDispatch } = useEmployerDispatch();
  const { employers, loadings: employerLoadings } = useEmployerSelector();

  const isLoading = employerLoadings.includes('fetchEmployers');

  const { disablePrev, disableNext, renderItems, moveToNextPage, moveToPrevPage } = usePaginate({
    items: employers,
    limit: LIMITS.EMPLOYERS,
  });

  useEffect(() => {
    fetchEmployersDispatch();
  }, [fetchEmployersDispatch]);

  return (
    <Container data-anchor={ANCHORS.employerList} className={cx('container')}>
      <BlockTitle title='Our employers' desc='Check out here' />

      <ul className={cx('card-list')}>
        {renderItems().map(
          ({
            id,
            companyPhoto,
            companyName,
            contactName,
            contactEmail,
            description,
            industry,
            role,
          }) => (
            <li key={id} className={cx('card')}>
              <Image className={cx('card-img')} src={companyPhoto} alt='Company' />
              <div className={cx('card-info')}>
                <h3 className={cx('card-title')}>{companyName}</h3>
                <p>Name: {contactName}</p>
                <p>Mail: {contactEmail}</p>
                <p>Description: {description}</p>
                <p>Industry: {industry}</p>
                <p>Looking Role: {role}</p>
              </div>
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

export default EmployerList;
