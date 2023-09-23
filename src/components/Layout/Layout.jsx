import React from 'react';
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';
import './Layout.scss'
import './../Sidebar/Sidebar.scss'
import './../Navbar/Navbar.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;