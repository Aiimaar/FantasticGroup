import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCafes: 0,
    totalUsers: 0,
    totalReviews: 0
  });
  const [loading, setLoading] = useState(true);
  const { adminAuth } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Ces endpoints devront être implémentés côté backend
        const cafesPromise = axios.get('http://localhost:3000/api/locations', {
          headers: { Authorization: `Bearer ${adminAuth.token}` }
        });
        
        const usersPromise = axios.get('http://localhost:3000/api/users', {
          headers: { Authorization: `Bearer ${adminAuth.token}` }
        });
        
        const reviewsPromise = axios.get('http://localhost:3000/api/reviews', {
          headers: { Authorization: `Bearer ${adminAuth.token}` }
        });
        
        const [cafesRes, usersRes, reviewsRes] = await Promise.all([
          cafesPromise, usersPromise, reviewsPromise
        ]);
        
        setStats({
          totalCafes: cafesRes.data.length,
          totalUsers: usersRes.data.length,
          totalReviews: reviewsRes.data.length
        });
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
      <h1>Tableau de bord</h1>
      
      <div className="stats-container">
        <div className="stat-card">
          <h3>Cafés</h3>
          <p className="stat-number">{stats.totalCafes}</p>
        </div>
        
        <div className="stat-card">
          <h3>Utilisateurs</h3>
          <p className="stat-number">{stats.totalUsers}</p>
        </div>
        
        <div className="stat-card">
          <h3>Avis</h3>
          <p className="stat-number">{stats.totalReviews}</p>
        </div>
      </div>
      
      {/* Vous pouvez ajouter d'autres sections ici, comme les avis récents, etc. */}
    </div>
  );
};

export default Dashboard;