import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faPlus, 
  faEdit, 
  faTrash, 
  faEye
} from '@fortawesome/free-solid-svg-icons';

const CafeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Données factices de cafés
  const cafes = [
    { id: 1, name: 'Café Digital', city: 'Paris', address: '12 Rue de la République', hasWifi: true, hasPowerOutlets: true, status: 'approved' },
    { id: 2, name: 'WorkSpace Café', city: 'Lyon', address: '45 Avenue Jean Jaurès', hasWifi: true, hasPowerOutlets: false, status: 'approved' },
    { id: 3, name: 'Remote Hub', city: 'Bordeaux', address: '8 Place de la Bourse', hasWifi: true, hasPowerOutlets: true, status: 'pending' },
    { id: 4, name: 'Code & Coffee', city: 'Paris', address: '22 Rue Saint-Martin', hasWifi: true, hasPowerOutlets: true, status: 'approved' },
    { id: 5, name: 'Le Connecté', city: 'Marseille', address: '14 La Canebière', hasWifi: true, hasPowerOutlets: true, status: 'pending' }
  ];
  
  // Filtrer les cafés
  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cafe.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cafe.address.toLowerCase().includes(searchTerm.toLowerCase());
                          
    const matchesStatus = statusFilter === 'all' || cafe.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 className="page-title">Gestion des cafés</h1>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px' }} />
          Ajouter un café
        </button>
      </div>
      
      <div className="admin-card">
        <div style={{ display: 'flex', marginBottom: '20px', gap: '10px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#777' }} />
            <input 
              type="text" 
              placeholder="Rechercher un café..." 
              className="search-input"
              style={{ paddingLeft: '36px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select 
            className="form-control" 
            style={{ width: 'auto' }}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="approved">Approuvés</option>
            <option value="pending">En attente</option>
          </select>
        </div>
        
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Ville</th>
              <th>Adresse</th>
              <th>WiFi</th>
              <th>Prises</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCafes.map(cafe => (
              <tr key={cafe.id}>
                <td>{cafe.name}</td>
                <td>{cafe.city}</td>
                <td>{cafe.address}</td>
                <td>{cafe.hasWifi ? '✅' : '❌'}</td>
                <td>{cafe.hasPowerOutlets ? '✅' : '❌'}</td>
                <td>
                  <span className={cafe.status === 'approved' ? 'badge badge-success' : 'badge badge-pending'}>
                    {cafe.status === 'approved' ? 'Approuvé' : 'En attente'}
                  </span>
                </td>
                <td>
                  <button className="action-btn" title="Voir">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="action-btn" title="Modifier">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="action-btn" title="Supprimer">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredCafes.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#777' }}>
            Aucun café trouvé pour cette recherche.
          </div>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button className="btn" style={{ backgroundColor: 'var(--light-gray)' }}>Précédent</button>
            <button className="btn btn-primary">1</button>
            <button className="btn" style={{ backgroundColor: 'var(--light-gray)' }}>2</button>
            <button className="btn" style={{ backgroundColor: 'var(--light-gray)' }}>3</button>
            <button className="btn" style={{ backgroundColor: 'var(--light-gray)' }}>Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeList;