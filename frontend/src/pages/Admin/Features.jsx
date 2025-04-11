import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/admin.css'; // Réutilisez les styles de votre admin

const Features = () => {
  const [formData, setFormData] = useState({
    name: '',
  });
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const { adminAuth } = useAuth();

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/features');
      setFeatures(response.data);
      setError('');
    } catch (error) {
      console.error('Error while loading features:', error);
      setError('Unable to load features. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name) {
      setError('The name field is required.');
      return;
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:3000/api/features/${editingId}`, formData, {
          headers: {
            'Authorization': `Bearer ${adminAuth.token}`,
          }
        });
        setError('');
        alert('Feature updated successfully!');
      } else {
        await axios.post('http://localhost:3000/api/features', formData, {
          headers: {
            'Authorization': `Bearer ${adminAuth.token}`,
          }
        });
        setError('');
        alert('Feature added successfully!');
      }
      fetchFeatures();
      resetForm();
    } catch (error) {
      console.error('Error while submitting:', error);
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  const handleEdit = (id) => {
    const featureToEdit = features.find(feature => feature.id === id);
    if (!featureToEdit) return;

    setFormData({
      name: featureToEdit.name || '',
    });
    setEditingId(id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this feature?')) return;

    try {
      await axios.delete(`http://localhost:3000/api/features/${id}`, {
        headers: { 'Authorization': `Bearer ${adminAuth.token}` }
      });
      fetchFeatures();
      alert('Feature deleted successfully!');
    } catch (error) {
      console.error('Error while deleting:', error);
      setError('Unable to delete this feature. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
    });
    setEditingId(null);
  };

  if (loading && features.length === 0) {
    return <div className="loading">Loading features...</div>;
  }

  return (
    <div className="features-manager">
      <h1>{editingId ? 'Edit Feature' : 'Add New Feature'}</h1>

      <form onSubmit={handleSubmit} className="feature-form">
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="name">Feature Name*</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn primary-btn">
            {editingId ? 'Update' : 'Add'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="btn secondary-btn">
              Cancel
            </button>
          )}
        </div>
      </form>

      <h2>List of Features</h2>

      {features.length === 0 ? (
        <p>No features found</p>
      ) : (
        <div className="table-responsive">
          <table className="features-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {features.map(feature => (
                <tr key={feature.id}>
                  <td>{feature.id}</td>
                  <td>{feature.name}</td>
                  <td className="actions">
                    <button onClick={() => handleEdit(feature.id)} className="btn edit-btn">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(feature.id)} className="btn delete-btn">
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

export default Features;