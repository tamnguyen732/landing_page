import { useState } from 'react';

import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// types
import { SelectOption } from '~/types/shared';

import { bindClass } from '~/lib/classNames';

import styles from './Select.module.scss';

const cx = bindClass(styles);

interface Props<TValue extends string> {
  value: TValue;
  options: SelectOption<TValue>[];
  onChange: (value: TValue) => void;
  className?: string;
}

const Select = <TValue extends string>({ className, value, options, onChange }: Props<TValue>) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [label, setLabel] = useState<string | null>(null);

  return (
    <div className={cx('container', className)}>
      <div onClick={() => setIsShow(!isShow)} className={cx('field')}>
        <span className={cx('selected')}>{label ?? value}</span>
        <FontAwesomeIcon className={cx('field-arrow')} icon={faAngleUp} />
      </div>

      {isShow && (
        <ul className={cx('list')}>
          {options.map((option) => (
            <li
              onClick={() => {
                onChange(option.value);
                setLabel(option.label);
                setIsShow(false);
              }}
              key={option.label}
              className={cx('item')}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
