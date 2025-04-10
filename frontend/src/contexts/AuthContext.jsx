import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminAuth, setAdminAuth] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });
  
  useEffect(() => {
    // Vérifier s'il y a un token dans localStorage
    const token = localStorage.getItem('adminToken');
    const user = localStorage.getItem('adminUser');
    
    if (token && user) {
      setAdminAuth({
        isAuthenticated: true,
        user: JSON.parse(user),
        token: token,
      });
    }
  }, []);
  
  const adminLogin = (token, user) => {
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminUser', JSON.stringify(user));
    
    setAdminAuth({
      isAuthenticated: true,
      user: user,
      token: token,
    });
  };
  
  const adminLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    
    setAdminAuth({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };
  
  return (
    <AuthContext.Provider value={{ adminAuth, adminLogin, adminLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);