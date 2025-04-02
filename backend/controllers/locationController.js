import models from "../models";

const { Location } = models;

export const getLocations = async (req, res) => {
    try {
      const locations = await Location.findAll({
        attributes: ['id', 'name', 'description', 'address', 'city', 'country', 'lat', 'lon', 'openH', 'closeH'],
      });
      res.json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const createLocation = async (req, res) => {
    const { name, address, city, country, lat, lon, openH, closeH } = req.body;
  
    if (!name || !address || !city || !country || !lat || !lon || !openH || !closeH) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    try {
      const location = await Location.create({
        name, 
        description: description || null, 
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
      const { name, address, city, country, lat, lon, openH, closeH } = req.body;
  
      if (name !== undefined && name.trim() === "") {
        return res.status(400).json({
          message: "name can't be empty.",
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
  
      // Obtener el usuario existente usando el userId del token
      const existingLocation = await User.findByPk(userId);
  
      if (!existingUser) {
        return res.status(404).json({ message: "User not found." });
      }
  
      const updatedFields = {};
      if (user_name !== undefined) updatedFields.user_name = user_name;
      if (email !== undefined) updatedFields.email = email;
  
      const updatedUser = await existingUser.update(updatedFields);
  
      res.status(200).json({
        id: updatedUser.id,
        user_name: updatedUser.user_name,
        email: updatedUser.email,
      });
    } catch (error) {
      console.error("Error updating user:", error.message);
      res.status(500).json({ message: "Error updating user." });
    }
  };