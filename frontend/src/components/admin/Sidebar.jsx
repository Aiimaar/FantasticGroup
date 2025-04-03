import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faCoffee, 
  faUsers, 
  faComments, 
  faPercent, 
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const location = useLocation();
  
  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => location.pathname.startsWith(path);
  
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2>Fantastic Group</h2>
        <p>Espaces de travail</p>
      </div>
      
      <nav className="admin-nav">
        <ul>
          <li>
            <Link to="/admin" className={isActive('/admin') && !isActive('/admin/') ? 'active' : ''}>
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
          <li>
            <Link to="/admin/promotions" className={isActive('/admin/promotions') ? 'active' : ''}>
              <FontAwesomeIcon icon={faPercent} />
              <span>Promotions</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div style={{ marginTop: 'auto', padding: '20px' }}>
        <Link to="/logout" style={{ display: 'flex', alignItems: 'center', color: '#777' }}>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '10px' }} />
          <span>Déconnexion</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;