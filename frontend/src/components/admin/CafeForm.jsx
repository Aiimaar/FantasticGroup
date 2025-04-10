import React from 'react';

const CafeForm = ({ formData, handleChange, handleImageChange, handleSubmit, editingId, resetForm, error }) => {
  return (
    <form onSubmit={handleSubmit} className="cafe-form">
      {error && <div className="error-message">{error}</div>}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
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
          <label htmlFor="place">Place Type</label>
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
          <label htmlFor="address">Address*</label>
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
          <label htmlFor="city">City*</label>
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
          <label htmlFor="country">Country*</label>
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
          <label htmlFor="openH">Opening Hour*</label>
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
          <label htmlFor="closeH">Closing Hour*</label>
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
        {editingId && <p className="help-text">Leave empty to keep the current image</p>}
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
  );
};

export default CafeForm;
