import { ReactNode } from 'react';

import { Header, Footer } from '~/components';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
