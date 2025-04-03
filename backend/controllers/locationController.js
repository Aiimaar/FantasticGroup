import models from "../models/index.js";

const { Location } = models;

export const getLocations = async (req, res) => {
    try {
      const locations = await Location.findAll({
        attributes: ['id', 'name', 'description', 'place', 'address', 'city', 'country', 'lat', 'lon', 'openH', 'closeH'],
      });
      res.json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const createLocation = async (req, res) => {
    const { name, description, place, address, city, country, lat, lon, openH, closeH } = req.body;
  
    if (!name || !place || !address || !city || !country || !lat || !lon || !openH || !closeH) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    try {
      const location = await Location.create({
        name, 
        description: description || null,
        place,
        address, 
        city, 
        country, 
        lat, 
        lon, 
        openH, 
        closeH,
      });
  
      res.status(201).json({
        id: location.id,
        name: location.name, 
        description: location.description,
        place: location.place,
        address: location.address, 
        city: location.city, 
        country: location.country, 
        lat: location.lat, 
        lon: location.lon, 
        openH: location.openH, 
        closeH: location.closeH,
      });
    } catch (error) {
      console.error("Error creating location:", error.message);
      res.status(500).json({ error: "Error creating location." });
    }
};

export const updateLocation = async (req, res) => {
    try {
      const locationId = req.location.id;
      const { name, description, place, address, city, country, lat, lon, openH, closeH } = req.body;
  
      if (name !== undefined && name.trim() === "") {
        return res.status(400).json({
          message: "name can't be empty.",
        });
      }
      if (place !== undefined && place.trim() === "") {
        return res.status(400).json({
          message: "place can't be empty.",
        });
      }
      if (address !== undefined && address.trim() === "") {
        return res.status(400).json({
          message: "address can't be empty.",
        });
      }
      if (city !== undefined && city.trim() === "") {
        return res.status(400).json({
          message: "city can't be empty.",
        });
      }
      if (country !== undefined && country.trim() === "") {
        return res.status(400).json({
          message: "country can't be empty.",
        });
      }
      if (lat !== undefined && lat.trim() === "") {
        return res.status(400).json({
          message: "lat can't be empty.",
        });
      }
      if (lon !== undefined && lon.trim() === "") {
        return res.status(400).json({
          message: "lon can't be empty.",
        });
      }
      if (openH !== undefined && openH.trim() === "") {
        return res.status(400).json({
          message: "open hour can't be empty.",
        });
      }
      if (closeH !== undefined && closeH.trim() === "") {
        return res.status(400).json({
          message: "close hour can't be empty.",
        });
      }
  
      const existingLocation = await Location.findByPk(locationId);
  
      if (!existingLocation) {
        return res.status(404).json({ message: "Location not found." });
      }
  
      const updatedFields = {};
      if (name !== undefined) updatedFields.name = name;
      if (description !== undefined) updatedFields.description = description;
      if (place !== undefined) updatedFields.place = place;
      if (address !== undefined) updatedFields.address = address;
      if (city !== undefined) updatedFields.city = city;
      if (country !== undefined) updatedFields.country = country;
      if (lat !== undefined) updatedFields.lat = lat;
      if (lon !== undefined) updatedFields.lon = lon;
      if (openH !== undefined) updatedFields.openH = openH;
      if (closeH !== undefined) updatedFields.closeH = closeH;
  
      const updatedLocation = await existingLocation.update(updatedFields);
  
      res.status(200).json({
        id: updatedLocation.id,
        name: updatedLocation.name, 
        description: updatedLocation.description, 
        place: updatedLocation.place,
        address: updatedLocation.address, 
        city: updatedLocation.city, 
        country: updatedLocation.country, 
        lat: updatedLocation.lat, 
        lon: updatedLocation.lon, 
        openH: updatedLocation.openH, 
        closeH: updatedLocation.closeH,
      });
    } catch (error) {
      console.error("Error updating location:", error.message);
      res.status(500).json({ message: "Error updating location." });
    }
};

export const deleteLocation = async (req, res) => {
    const { id } = req.params;
    try {
      const location = await Location.findByPk(id);
      if (!location) {
        return res.status(404).json({ message: "Location not found." });
      }
      await Location.destroy({ where: { id } });
  
      res.status(200).json({ message: `Location with id ${id} successfully deleted.` });
    } catch (error) {
      console.error("Error deleting location:", error.message);
      res.status(500).json({ error: "Error deleting location." });
    }
};

export const getLocationById = async (req, res) => {
    const { id } = req.params;
  
    console.log("ID received:", id);
  
    try {
      const location = await Location.findByPk(id, {
        attributes: ['id', 'name', 'description', 'place', 'address', 'city', 'country', 'lat', 'lon', 'openH', 'closeH'],
      });
  
      if (!location) {
        console.log("Location not found");
        return res.status(404).json({ message: "Location not found" });
      }
  
      console.log("Location not found:", location);
      
      res.json({
        id: location.id,
        name: location.name, 
        description: location.description, 
        place: location.place,
        address: location.address, 
        city: location.city, 
        country: location.country, 
        lat: location.lat, 
        lon: location.lon, 
        openH: location.openH, 
        closeH: location.closeH,
      });
    } catch (error) {
      console.error("Error getting location:", error);
      res.status(500).json({ error: error.message });
    }
  };