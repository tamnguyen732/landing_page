import { ChangeEvent, InputHTMLAttributes, ReactNode, useRef } from 'react';

import { bindClass } from '~/lib/classNames';

import styles from './FileUpload.module.scss';

const cx = bindClass(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ children, className, onChange, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div onClick={() => inputRef.current?.click()} className={cx('wrapper', className)}>
      <span>{children}</span>
      <input {...rest} ref={inputRef} className={cx('input')} type='file' onChange={onChange} />
    </div>
  );
};

export default FileUpload;
