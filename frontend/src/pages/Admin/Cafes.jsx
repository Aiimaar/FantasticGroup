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
    image: null
  });
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { adminAuth } = useAuth();

  // Load cafes on mount
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
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Required fields validation
    const requiredFields = ['name', 'address', 'city', 'country', 'lat', 'lon', 'openH', 'closeH'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setError(`The following fields are required: ${missingFields.join(', ')}`);
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== undefined) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      if (editingId) {
        // Update existing cafe
        await axios.put(`http://localhost:3000/api/locations/${editingId}`, formDataToSend, {
          headers: {
            'Authorization': `Bearer ${adminAuth.token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        setError('');
        alert('Cafe updated successfully!');
      } else {
        // Create new cafe
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
      setError(error.response?.data?.error || 'An error occurred. Please try again.');
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
      image: null
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
      image: null
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
