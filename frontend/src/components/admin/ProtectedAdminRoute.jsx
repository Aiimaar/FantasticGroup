import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedAdminRoute = () => {
  const { adminAuth } = useAuth();
  
  if (!adminAuth.isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return <Outlet />;
};

export default ProtectedAdminRoute;