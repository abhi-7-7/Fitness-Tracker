import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, onNavigate }) => {
  return (
    <div className="layout">
      <Navbar onNavigate={onNavigate} />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout; 