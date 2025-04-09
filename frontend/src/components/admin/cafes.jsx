import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { useAuth } from './AuthContext';


const CafesList = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    place: '',
    address: '',
    city: '',
    country: '',
    lat: '',
    lon: '',
    openH: '08:00',
    closeH: '20:00',
    image: null
  });
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { adminAuth } = useAuth();

  // Charger la liste des cafés au montage
  useEffect(() => {
    fetchCafes();
  }, []);

  const fetchCafes = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/locations');
      setCafes(response.data);
      setError('');
    } catch (error) {
      console.error('Erreur lors du chargement des cafés:', error);
      setError('Impossible de charger les cafés. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validation des champs obligatoires
    const requiredFields = ['name', 'address', 'city', 'country', 'lat', 'lon', 'openH', 'closeH'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setError(`Les champs suivants sont requis : ${missingFields.join(', ')}`);
      return;
    }

    // Création du FormData pour l'envoi
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== undefined) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      if (editingId) {
        // Mise à jour d'un café existant
        await axios.put(`http://localhost:3000/api/locations/${editingId}`, formDataToSend, {
          headers: {
            'Authorization': `Bearer ${adminAuth.token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        setError('');
        alert('Café mis à jour avec succès !');
      } else {
        // Création d'un nouveau café
        await axios.post('http://localhost:3000/api/locations', formDataToSend, {
          headers: {
            'Authorization': `Bearer ${adminAuth.token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        setError('');
        alert('Café ajouté avec succès !');
      }
      // Rafraîchir la liste et réinitialiser le formulaire
      fetchCafes();
      resetForm();
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setError(error.response?.data?.error || 'Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handleEdit = (id) => {
    const cafeToEdit = cafes.find(cafe => cafe.id === id);
    if (!cafeToEdit) return;
    
    setFormData({
      name: cafeToEdit.name || '',
      description: cafeToEdit.description || '',
      place: cafeToEdit.place || '',
      address: cafeToEdit.address || '',
      city: cafeToEdit.city || '',
      country: cafeToEdit.country || '',
      lat: cafeToEdit.lat || '',
      lon: cafeToEdit.lon || '',
      openH: cafeToEdit.openH || '08:00',
      closeH: cafeToEdit.closeH || '20:00',
      image: null // On ne peut pas récupérer l'image existante, juste permettre d'en télécharger une nouvelle
    });
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce café ?')) return;
    
    try {
      await axios.delete(`http://localhost:3000/api/locations/${id}`, {
        headers: { 'Authorization': `Bearer ${adminAuth.token}` }
      });
      fetchCafes();
      alert('Café supprimé avec succès !');
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      setError('Impossible de supprimer ce café. Veuillez réessayer.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      place: '',
      address: '',
      city: '',
      country: '',
      lat: '',
      lon: '',
      openH: '08:00',
      closeH: '20:00',
      image: null
    });
    setEditingId(null);
  };

  if (loading && cafes.length === 0) {
    return <div className="loading">Chargement des cafés...</div>;
  }

  return (
    <div className="cafes-manager">
      <h1>{editingId ? 'Modifier un café' : 'Ajouter un nouveau café'}</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="cafe-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nom*</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="place">Type de lieu</label>
            <input 
              type="text" 
              id="place" 
              name="place" 
              value={formData.place} 
              onChange={handleChange} 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea 
            id="description" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            rows="3"
          ></textarea>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address">Adresse*</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="city">Ville*</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="country">Pays*</label>
            <input 
              type="text" 
              id="country" 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="lat">Latitude*</label>
            <input 
              type="text" 
              id="lat" 
              name="lat" 
              value={formData.lat} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lon">Longitude*</label>
            <input 
              type="text" 
              id="lon" 
              name="lon" 
              value={formData.lon} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="openH">Heure d'ouverture*</label>
            <input 
              type="time" 
              id="openH" 
              name="openH" 
              value={formData.openH} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="closeH">Heure de fermeture*</label>
            <input 
              type="time" 
              id="closeH" 
              name="closeH" 
              value={formData.closeH} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            onChange={handleImageChange} 
            accept="image/*"
          />
          {editingId && <p className="help-text">Laissez vide pour conserver l'image actuelle</p>}
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn primary-btn">
            {editingId ? 'Mettre à jour' : 'Ajouter'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="btn secondary-btn">
              Annuler
            </button>
          )}
        </div>
      </form>

      <h2>Liste des cafés</h2>
      
      {cafes.length === 0 ? (
        <p>Aucun café trouvé</p>
      ) : (
        <div className="table-responsive">
          <table className="cafes-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Lieu</th>
                <th>Adresse</th>
                <th>Ville</th>
                <th>Heures</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cafes.map(cafe => (
                <tr key={cafe.id}>
                  <td>{cafe.id}</td>
                  <td>{cafe.name}</td>
                  <td>{cafe.place || '-'}</td>
                  <td>{cafe.address}</td>
                  <td>{cafe.city}</td>
                  <td>{cafe.openH} - {cafe.closeH}</td>
                  <td className="actions">
                    <button onClick={() => handleEdit(cafe.id)} className="btn edit-btn">
                      Modifier
                    </button>
                    <button onClick={() => handleDelete(cafe.id)} className="btn delete-btn">
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CafesList;