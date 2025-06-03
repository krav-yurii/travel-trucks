import React from 'react';
import Header from '@components/Layout/components/Header';

const Layout = ({ children }) => {
  return (
    <div style={{ width: '100%', height: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
