import { ReactNode } from 'react';

import './GlobalStyles.scss';

interface Props {
  children: ReactNode;
}

const GlobalStyles = ({ children }: Props) => {
  return <>{children}</>;
};

export default GlobalStyles;
