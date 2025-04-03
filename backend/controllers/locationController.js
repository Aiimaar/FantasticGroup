import multer from 'multer';
import path from 'path';
import fs from 'fs';
import models from "../models/index.js";

const { Location } = models;

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
    const image = req.file ? req.file.filename : null;

    if (!name || !place || !address || !city || !country || !lat || !lon || !openH || !closeH) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const location = await Location.create({
            name, description, place, address, city, country, lat, lon, openH, closeH, image
        });
        res.status(201).json(location);
    } catch (error) {
        console.error("Error creating location:", error.message);
        res.status(500).json({ error: "Error creating location." });
    }
};

export const updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, place, address, city, country, lat, lon, openH, closeH } = req.body;
        const image = req.file ? req.file.filename : null;
        
        const existingLocation = await Location.findByPk(id);
        if (!existingLocation) {
            return res.status(404).json({ message: "Location not found." });
        }

        const updatedFields = { name, description, place, address, city, country, lat, lon, openH, closeH };
        if (image) updatedFields.image = image;
        
        const updatedLocation = await existingLocation.update(updatedFields);
        res.status(200).json(updatedLocation);
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

        // Eliminar la imagen asociada si existe
        if (location.image) {
            fs.unlinkSync(path.join(uploadDir, location.image));
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
    try {
        const location = await Location.findByPk(id);
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        res.json(location);
    } catch (error) {
        console.error("Error getting location:", error);
        res.status(500).json({ error: error.message });
    }
};

export default upload;
