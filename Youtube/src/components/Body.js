import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, transition: 'all 0.3s ease' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
