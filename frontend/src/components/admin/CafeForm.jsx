import React from 'react';

const CafeForm = ({ formData, handleChange, handleImageChange, handleSubmit, editingId, resetForm, error }) => {
  return (
    <form onSubmit={handleSubmit} className="cafe-form">
      {error && <div className="error-message">{error}</div>}
      
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
      
       {/* Champ pour uploader plusieurs images */}
<div className="form-group">
  <label htmlFor="images">Images (max 10)</label>
  <input 
    type="file" 
    id="images" 
    name="images" 
    onChange={handleImageChange} 
    accept="image/*" 
    multiple // Permet de sélectionner plusieurs fichiers
  />
  {editingId && <p className="help-text">Leave empty to keep the current images</p>}
</div>

{/* Affichage des images existantes en mode édition */}
{editingId && formData.imageUrls && (
  <div className="current-images">
    <h4>Current Images:</h4>
    {JSON.parse(formData.imageUrls).map((img, index) => (
      <div key={index} className="image-preview">
        <img src={img} alt={`Preview ${index}`} width="100" />
      </div>
    ))}
  </div>
)}

{/* Champ optionnel pour ajouter des URLs */}
<div className="form-group">
  <label htmlFor="imageUrls">Image URLs (JSON format, optional)</label>
  <textarea 
    id="imageUrls" 
    name="imageUrls" 
    value={formData.imageUrls || ''} 
    onChange={handleChange} 
    rows="3"
    placeholder='Ex: ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]'
  />
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
  );
};

export default CafeForm;