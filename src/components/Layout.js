// src/components/Layout.js
import React from 'react';
import '../components/Layout.css'; // Assuming you have CSS for your layout

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Layout;
