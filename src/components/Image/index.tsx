import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import { bindClass } from '~/lib/classNames';

import styles from './Header.module.scss';

const cx = bindClass(styles);

type BaseImageProps = DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  ImgHTMLAttributes<HTMLImageElement>;

interface Props extends BaseImageProps {
  className?: string;
  objectFit?: 'cover' | 'contain';
}

const Image = ({ alt, objectFit = 'cover', className, ...rest }: Props) => {
  return (
    <div className={cx(className)}>
      <img
        className={cx({
          'object-fit-cover': objectFit === 'cover',
          'object-fit-contain': objectFit === 'contain',
        })}
        {...rest}
        loading='lazy'
        alt={alt}
        draggable={false}
      />
    </div>
  );
};

export default Image;
