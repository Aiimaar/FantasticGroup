import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/admin.css';

// Import des composants admin
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDasboard';
import CafeList from './pages/admin/CafeList';

// Page de connexion avec le design cozy
const Login = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#e8e3da'
    }}>
      <div style={{
        width: '350px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: '#ba9e7c', marginBottom: '5px' }}>FantasticGroup</h2>
          <p style={{ color: '#777' }}>Admin Espaces de travail</p>
        </div>
        
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
            <input 
              type="email" 
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #e0dcd3',
                borderRadius: '6px'
              }}
              placeholder="admin@example.com"
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Mot de passe</label>
            <input 
              type="password" 
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #e0dcd3',
                borderRadius: '6px'
              }}
              placeholder="••••••••"
            />
          </div>
          <button 
            type="button"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#ba9e7c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
            onClick={() => window.location.href = '/admin'}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

// Page utilisateurs (placeholder simple)
const UserList = () => (
  <div>
    <h1 className="page-title">Gestion des utilisateurs</h1>
    <div className="admin-card">
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>👥</div>
        <h2 style={{ marginBottom: '15px', fontWeight: '500' }}>Module en développement</h2>
        <p style={{ color: '#777', marginBottom: '25px' }}>
          La gestion des utilisateurs sera bientôt disponible.
        </p>
        <button className="btn btn-secondary">Retour au dashboard</button>
      </div>
    </div>
  </div>
);

// Page d'accueil publique avec le style cozy
const HomePage = () => (
  <div style={{
    padding: '50px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#e8e3da',
    minHeight: '100vh'
  }}>
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h1 style={{ color: '#3b3b3b', fontSize: '2.5rem', marginBottom: '10px' }}>FantasticGroup</h1>
      <p style={{ color: '#777', fontSize: '1.2rem' }}>Trouvez votre espace de travail idéal</p>
    </div>
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ fontSize: '50px', marginBottom: '15px' }}>☕</div>
        <h2 style={{ marginBottom: '10px', color: '#ba9e7c' }}>Découvrir</h2>
        <p style={{ color: '#777', marginBottom: '20px' }}>
          Explorez les meilleurs cafés pour travailler à distance.
        </p>
        <button style={{
          backgroundColor: '#ba9e7c',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '10px 20px',
          cursor: 'pointer'
        }}>Commencer</button>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ fontSize: '50px', marginBottom: '15px' }}>🔑</div>
        <h2 style={{ marginBottom: '10px', color: '#ba9e7c' }}>Admin</h2>
        <p style={{ color: '#777', marginBottom: '20px' }}>
          Connectez-vous à l'espace administrateur.
        </p>
        <a href="/admin" style={{
          backgroundColor: '#95a483',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '10px 20px',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-block'
        }}>Accéder</a>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil publique */}
        <Route path="/" element={<HomePage />} />
        
        {/* Page de connexion */}
        <Route path="/login" element={<Login />} />
        
        {/* Routes admin avec layout commun */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="cafes" element={<CafeList />} />
          <Route path="users" element={<UserList />} />
          {/* Routes supplémentaires */}
          <Route path="reviews" element={
            <div>
              <h1 className="page-title">Gestion des avis</h1>
              <div className="admin-card">
                <p>Module en développement</p>
              </div>
            </div>
          } />
          <Route path="promotions" element={
            <div>
              <h1 className="page-title">Gestion des promotions</h1>
              <div className="admin-card">
                <p>Module en développement</p>
              </div>
            </div>
          } />
        </Route>

        {/* Redirection pour les routes non trouvées */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;