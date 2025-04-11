import multer from 'multer';
import path from 'path';
import fs from 'fs';
import models from "../models/index.js";


// Import models
const { Location, Feature, FeatureLocation } = models;

// Multer setup for image upload
const uploadDir = path.join(process.cwd(), 'uploads');

const { Location, FeatureLocation } = models;

const uploadDir = path.join(process.cwd(), 'Uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });


// Create a new location (café) with features
export const createLocation = async (req, res) => {
    const { name, description, place, address, city, country, lat, lon, openH, closeH, features } = req.body;
    const image = req.file ? req.file.filename : null; // If image is provided, store the filename

export const getLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createLocation = async (req, res) => {
  const { name, description, place, address, city, country, lat, lon, openH, closeH } = req.body;
  const images = req.files ? req.files.map(file => file.filename) : [];


  if (!name || !place || !address || !city || !country || !lat || !lon || !openH || !closeH) {
    return res.status(400).json({ error: "All fields are required." });
  }


    try {
        // Create the Location (Cafe)
        const location = await Location.create({
            name,
            description,
            place,
            address,
            city,
            country,
            lat,
            lon,
            openH,
            closeH,
            image
        });

        // Add features to the location if features are provided
        if (features && features.length > 0) {
            const featureLocations = features.map(featureId => ({
                feature_id: featureId,
                location_id: location.id
            }));

            // Create the relations between the cafe and the features
            await FeatureLocation.bulkCreate(featureLocations);
        }

        res.status(201).json(location);
    } catch (error) {
        console.error("Error creating location:", error.message);
        res.status(500).json({ error: "Error creating location." });
    }

  try {
    const location = await Location.create({
      name,
      description,
      place,
      address,
      city,
      country,
      lat,
      lon,
      openH,
      closeH,
      images
    });
    res.status(201).json(location);
  } catch (error) {
    console.error("Error creating location:", error.message);
    res.status(500).json({ error: "Error creating location." });
  }

};

// Update an existing location (café) and its features
export const updateLocation = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, description, place, address, city, country, lat, lon, openH, closeH, features } = req.body;
        const image = req.file ? req.file.filename : null;

        const existingLocation = await Location.findByPk(id);
        if (!existingLocation) {
            return res.status(404).json({ message: "Location not found." });
        }

        const updatedFields = { name, description, place, address, city, country, lat, lon, openH, closeH };
        if (image) updatedFields.image = image;

        const updatedLocation = await existingLocation.update(updatedFields);

        // Update features if they exist
        if (features && features.length > 0) {
            // Delete old feature-location relations
            await FeatureLocation.destroy({ where: { location_id: id } });

            // Create new feature-location relations
            const featureLocations = features.map(featureId => ({
                feature_id: featureId,
                location_id: updatedLocation.id
            }));

            await FeatureLocation.bulkCreate(featureLocations);
        }

        res.status(200).json(updatedLocation);
    } catch (error) {
        console.error("Error updating location:", error.message);
        res.status(500).json({ message: "Error updating location." });

  try {
    const { id } = req.params;
    const { name, description, place, address, city, country, lat, lon, openH, closeH } = req.body;
    const images = req.files ? req.files.map(file => file.filename) : undefined;

    const [updated] = await Location.update(
      { name, description, place, address, city, country, lat, lon, openH, closeH, ...(images && { images }) },
      { where: { id } }
    );

    if (updated) {
      const updatedLocation = await Location.findByPk(id);
      return res.status(200).json(updatedLocation);

    }
    return res.status(404).json({ message: 'Location not found' });
  } catch (error) {
    console.error("Error updating location:", error.message);
    res.status(500).json({ error: "Error updating location." });
  }
};


// Get all locations (cafés)
// controllers/locationController.js
export const getLocations = async (req, res) => {
    try {
      const locations = await Location.findAll({
        include: [{ model: Feature, through: { attributes: [] } }]  // Medtager features
      });
      res.json(locations);  // Send locations med features
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Get a location by its ID with its associated features
export const getLocationById = async (req, res) => {
    const { id } = req.params;
    try {
        const location = await Location.findByPk(id, {
            include: [{ model: Feature, through: { attributes: [] } }] // Include features through the relation table
        });
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        res.json(location);
    } catch (error) {
        res.status(500).json({ error: error.message });

export const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Location.destroy({ where: { id } });
    if (deleted) {
      return res.status(204).end();

    }
    return res.status(404).json({ message: 'Location not found' });
  } catch (error) {
    console.error("Error deleting location:", error.message);
    res.status(500).json({ error: "Error deleting location." });
  }
};


// Delete a location (café) and its associated features
export const deleteLocation = async (req, res) => {
    const { id } = req.params;
    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).json({ message: "Location not found." });
        }

        // Delete the relation between location and features
        await FeatureLocation.destroy({ where: { location_id: id } });

        // Delete the location
        await Location.destroy({ where: { id } });

        res.status(200).json({ message: `Location with id ${id} successfully deleted.` });
    } catch (error) {
        console.error("Error deleting location:", error.message);
        res.status(500).json({ error: "Error deleting location." });

export const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id);
    if (location) {
      return res.json(location);

    }
    return res.status(404).json({ message: 'Location not found' });
  } catch (error) {
    console.error("Error getting location:", error.message);
    res.status(500).json({ error: "Error getting location." });
  }
};

export const getFilteredLocations = async (req, res) => {
  try {
    const { featureIds } = req.query; // Ex. : featureIds=1,2

    if (!featureIds) {
      // Si aucun featureId n'est fourni, renvoyer toutes les locations
      const locations = await Location.findAll();
      return res.json(locations);
    }

    // Convertir featureIds en tableau d'entiers
    const featureIdArray = featureIds.split(',').map(id => parseInt(id, 10));

    // Trouver toutes les FeatureLocation correspondant aux featureIds
    const featureLocations = await FeatureLocation.findAll({
      where: {
        feature_id: featureIdArray,
      },
    });

    if (featureLocations.length === 0) {
      // Si aucune FeatureLocation ne correspond, renvoyer un tableau vide
      return res.json([]);
    }

    // Extraire les location_ids uniques qui ont au moins une des features
    const locationIds = [...new Set(featureLocations.map(fl => fl.location_id))];

    // Récupérer les locations correspondantes
    const locations = await Location.findAll({
      where: {
        id: locationIds,
      },
    });

    // Filtrer les locations pour ne garder que celles qui ont TOUTES les features demandées
    const filteredLocations = locations.filter(location => {
      const locationFeatureIds = featureLocations
        .filter(fl => fl.location_id === location.id)
        .map(fl => fl.feature_id);
      return featureIdArray.every(featureId => locationFeatureIds.includes(featureId));
    });

    res.json(filteredLocations);
  } catch (error) {
    console.error("Error getting filtered locations:", error.message);
    res.status(500).json({ error: "Error getting filtered locations." });
  }
};

export default upload;