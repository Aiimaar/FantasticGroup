import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCoffee, 
  faUsers, 
  faComments,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  // Données factices pour le tableau de bord
  const stats = {
    totalCafes: 125,
    totalUsers: 856,
    totalReviews: 423,
    pendingApprovals: 12
  };
  
  // Données factices pour les cafés récents
  const recentCafes = [
    { id: 1, name: 'Café Digital', city: 'Paris', owner: 'Thomas', date: '29 Mar 2025' },
    { id: 2, name: 'WorkSpace Café', city: 'Lyon', owner: 'Sophie', date: '28 Mar 2025' },
    { id: 3, name: 'Remote Hub', city: 'Bordeaux', owner: 'Marc', date: '27 Mar 2025' },
    { id: 4, name: 'Le Connecté', city: 'Marseille', owner: 'Julie', date: '26 Mar 2025' }
  ];
  
  return (
    <div>
      <h1 className="page-title">Tableau de bord</h1>
      
      {/* Cartes de statistiques */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div className="value">{stats.totalCafes}</div>
          <div className="label">Cafés enregistrés</div>
        </div>
        
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="value">{stats.totalUsers}</div>
          <div className="label">Utilisateurs</div>
        </div>
        
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div className="value">{stats.totalReviews}</div>
          <div className="label">Avis clients</div>
        </div>
        
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="value">{stats.pendingApprovals}</div>
          <div className="label">En attente d'approbation</div>
        </div>
      </div>
      
      {/* Cafés récemment ajoutés */}
      <div className="admin-card">
        <h2 style={{ marginBottom: '20px', fontWeight: '500' }}>Cafés récemment ajoutés</h2>
        
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Ville</th>
              <th>Propriétaire</th>
              <th>Date d'ajout</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentCafes.map(cafe => (
              <tr key={cafe.id}>
                <td>{cafe.name}</td>
                <td>{cafe.city}</td>
                <td>{cafe.owner}</td>
                <td>{cafe.date}</td>
                <td>
                  <button className="action-btn">👁️</button>
                  <button className="action-btn">✏️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button className="btn btn-primary">Voir tous les cafés</button>
        </div>
      </div>
      
      {/* Activité récente */}
      <div className="admin-card">
        <h2 style={{ marginBottom: '20px', fontWeight: '500' }}>Activité récente</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', borderLeft: '3px solid var(--primary-color)' }}>
            <div style={{ marginRight: '15px', opacity: 0.7 }}>🔔</div>
            <div>
              <p style={{ margin: 0 }}><strong>Nouveau café ajouté</strong> par Sophie</p>
              <small style={{ color: '#777' }}>Il y a 2 heures</small>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', borderLeft: '3px solid var(--secondary-color)' }}>
            <div style={{ marginRight: '15px', opacity: 0.7 }}>💬</div>
            <div>
              <p style={{ margin: 0 }}><strong>5 nouveaux avis</strong> à modérer</p>
              <small style={{ color: '#777' }}>Il y a 3 heures</small>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', borderLeft: '3px solid var(--accent-color)' }}>
            <div style={{ marginRight: '15px', opacity: 0.7 }}>🎫</div>
            <div>
              <p style={{ margin: 0 }}><strong>Nouvelle promotion</strong> créée par Café Digital</p>
              <small style={{ color: '#777' }}>Il y a 5 heures</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;