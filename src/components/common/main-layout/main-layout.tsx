import { Header, Footer } from '../common';
import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode
}

function MainLayout ({ children }: MainLayoutProps)  {
  return(
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}
export default MainLayout;
