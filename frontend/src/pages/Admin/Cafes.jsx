import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import CafeForm from '../../components/admin/CafeForm';
import '../../styles/admin.css';

const Cafes = () => {
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
    images: [], // Fichiers uploadés
    imageUrls: '' // URLs JSON
  });
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { adminAuth } = useAuth();

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
      console.error('Error while loading cafes:', error);
      setError('Unable to load cafes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, images: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const requiredFields = ['name', 'address', 'city', 'country', 'lat', 'lon', 'openH', 'closeH'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setError(`The following fields are required: ${missingFields.join(', ')}`);
      return;
    }

    // Validation : au moins un fichier ou une URL doit être fourni
    const hasImages = formData.images && formData.images.length > 0;
    const hasImageUrls = formData.imageUrls && formData.imageUrls.trim() !== '';
    if (!hasImages && !hasImageUrls) {
      setError('You must provide at least one image (file upload) or one image URL.');
      return;
    }

    // Validation supplémentaire pour imageUrls : doit être un JSON valide
    if (hasImageUrls) {
      try {
        JSON.parse(formData.imageUrls); // Vérifie si c'est un JSON valide
      } catch (err) {
        setError('Image URLs must be a valid JSON array (e.g., ["url1", "url2"])');
        return;
      }
    }

    const formDataToSend = new FormData();

    // Ajoutez les champs texte
    Object.keys(formData).forEach(key => {
      if (key !== 'images' && key !== 'imageUrls' && formData[key] !== null && formData[key] !== undefined) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Ajoutez les fichiers images
    if (hasImages) {
      formData.images.forEach((image) => {
        formDataToSend.append('images', image);
      });
    }

    // Ajoutez les URLs d'images si elles existent
    if (hasImageUrls) {
      formDataToSend.append('imageUrls', formData.imageUrls);
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:3000/api/locations/${editingId}`, formDataToSend, {
          headers: {
            'Authorization': `Bearer ${adminAuth.token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        setError('');
        alert('Cafe updated successfully!');
      } else {
        await axios.post('http://localhost:3000/api/locations', formDataToSend, {
          headers: {
            'Authorization': `Bearer ${adminAuth.token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        setError('');
        alert('Cafe added successfully!');
      }
      fetchCafes();
      resetForm();
    } catch (error) {
      console.error('Error while submitting:', error);
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
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
      images: [],
      imageUrls: cafeToEdit.images ? JSON.stringify(cafeToEdit.images) : ''
    });
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this cafe?')) return;

    try {
      await axios.delete(`http://localhost:3000/api/locations/${id}`, {
        headers: { 'Authorization': `Bearer ${adminAuth.token}` }
      });
      fetchCafes();
      alert('Cafe deleted successfully!');
    } catch (error) {
      console.error('Error while deleting:', error);
      setError('Unable to delete this cafe. Please try again.');
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
      images: [],
      imageUrls: ''
    });
    setEditingId(null);
  };

  if (loading && cafes.length === 0) {
    return <div className="loading">Loading cafes...</div>;
  }

  return (
    <div className="cafes-manager">
      <h1>{editingId ? 'Edit cafe' : 'Add new cafe'}</h1>

      <CafeForm
        formData={formData}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        editingId={editingId}
        resetForm={resetForm}
        error={error}
      />

      <h2>List of cafes</h2>

      {cafes.length === 0 ? (
        <p>No cafes found</p>
      ) : (
        <div className="table-responsive">
          <table className="cafes-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Place</th>
                <th>Address</th>
                <th>City</th>
                <th>Hours</th>
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
                      Edit
                    </button>
                    <button onClick={() => handleDelete(cafe.id)} className="btn delete-btn">
                      Delete
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

export default Cafes;