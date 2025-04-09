import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCoffee, 
  faUsers, 
  faComments, 
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { adminAuth, adminLogout } = useAuth();
  
  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => location.pathname.startsWith(path);
  
  // Fonction de déconnexion
  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };
  
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2>Fantastic Group</h2>
        <p>Espace d'administration</p>
      </div>
      
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/admin" className={isActive('/admin') && location.pathname === '/admin' ? 'active' : ''}>
              <FontAwesomeIcon icon={faHome} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/cafes" className={isActive('/admin/cafes') ? 'active' : ''}>
              <FontAwesomeIcon icon={faCoffee} />
              <span>Cafés</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className={isActive('/admin/users') ? 'active' : ''}>
              <FontAwesomeIcon icon={faUsers} />
              <span>Utilisateurs</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/reviews" className={isActive('/admin/reviews') ? 'active' : ''}>
              <FontAwesomeIcon icon={faComments} />
              <span>Avis</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Déconnexion</span>
        </button>
        {adminAuth.user && (
          <div className="user-info">
            <span>{adminAuth.user.username}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;