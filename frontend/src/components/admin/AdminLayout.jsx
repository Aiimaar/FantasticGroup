import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../../styles/admin.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;