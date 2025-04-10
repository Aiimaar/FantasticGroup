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
        
        // Fetch main statistics
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
          pendingApprovals: 0 // To be implemented if necessary
        });
        
        // Get the 5 most recent cafés
        setRecentCafes(cafesRes.data.slice(0, 5));
      } catch (error) {
        console.error('Error while fetching statistics:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, [adminAuth.token]);
  
  if (loading) {
    return <div className="loading">Loading statistics...</div>;
  }
  
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      
      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div className="value">{stats.totalCafes}</div>
          <div className="label">Registered Cafés</div>
        </div>
        
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="value">{stats.totalUsers}</div>
          <div className="label">Users</div>
        </div>
        
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div className="value">{stats.totalReviews}</div>
          <div className="label">Customer Reviews</div>
        </div>
        
        <div className="stat-card">
          <div className="icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="value">{stats.pendingApprovals}</div>
          <div className="label">Pending Approvals</div>
        </div>
      </div>
      
      {/* Recently Added Cafés */}
      <div className="admin-card">
        <h2>Recently Added Cafés</h2>
        
        {recentCafes.length > 0 ? (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Address</th>
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
          <p>No café registered at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
