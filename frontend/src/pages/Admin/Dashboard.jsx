import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCoffee, 
  faUsers, 
  faComments,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/admin.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCafes: 0,
    totalUsers: 0,
    totalReviews: 0,
    pendingApprovals: 0
  });
  const [recentCafes, setRecentCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { adminAuth } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const headers = { Authorization: `Bearer ${adminAuth.token}` };
        
        // Récupérer les statistiques principales
        const cafesPromise = axios.get('http://localhost:3000/api/locations', { headers });
        const usersPromise = axios.get('http://localhost:3000/api/users', { headers });
        const reviewsPromise = axios.get('http://localhost:3000/api/reviews', { headers });
        
        const [cafesRes, usersRes, reviewsRes] = await Promise.all([
          cafesPromise, usersPromise, reviewsPromise
        ]);
        
        setStats({
          totalCafes: cafesRes.data.length,
          totalUsers: usersRes.data.length,
          totalReviews: reviewsRes.data.length,
          pendingApprovals: 0 // À implémenter si nécessaire
        });
        
        // Récupérer les cafés récents (on prend les 5 derniers)
        setRecentCafes(cafesRes.data.slice(0, 5));
      } catch (error) {
        console.error('Erreur lors de la récupération des statistiques:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, [adminAuth.token]);
  
  if (loading) {
    return <div className="loading">Chargement des statistiques...</div>;
  }
  
  return (
    <div className="dashboard">
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
        <h2>Cafés récemment ajoutés</h2>
        
        {recentCafes.length > 0 ? (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Ville</th>
                <th>Adresse</th>
              </tr>
            </thead>
            <tbody>
              {recentCafes.map(cafe => (
                <tr key={cafe.id}>
                  <td>{cafe.name}</td>
                  <td>{cafe.city}</td>
                  <td>{cafe.address}</td>

                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Aucun café enregistré pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;