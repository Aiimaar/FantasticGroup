import multer from 'multer';
import path from 'path';
import fs from 'fs';
import models from "../models/index.js";

// Import models
const { Location, Feature, FeatureLocation } = models;

// Multer setup for image upload
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
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
    }
};

export default upload;
