import models from "../models/index.js";

const { UserLocation } = models;

export const getUserLocations = async (req, res) => {
    try {
        const userLocations = await UserLocation.findAll();
        res.json(userLocations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createUserLocation = async (req, res) => {
    const { user_id, location_id } = req.body;
    try {
        const userLocation = await UserLocation.create({ user_id, location_id });
        res.status(201).json(userLocation);
    } catch (error) {
        console.error("Error creating UserLocation:", error.message);
        res.status(500).json({ error: "Error creating UserLocation." });
    }
};

export const updateUserLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, location_id } = req.body;
        const [updated] = await UserLocation.update({ user_id, location_id }, { where: { id } });
        if (updated) {
            const updatedUserLocation = await UserLocation.findByPk(id);
            return res.status(200).json(updatedUserLocation);
        }
        return res.status(404).json({ message: 'UserLocation not found' });
    } catch (error) {
        console.error("Error updating UserLocation:", error.message);
        res.status(500).json({ error: "Error updating UserLocation." });
    }
};

export const deleteUserLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await UserLocation.destroy({ where: { id } });
        if (deleted) {
            return res.status(204).end();
        }
        return res.status(404).json({ message: 'UserLocation not found' });
    } catch (error) {
        console.error("Error deleting UserLocation:", error.message);
        res.status(500).json({ error: "Error deleting UserLocation." });
    }
};

export const getUserLocationById = async (req, res) => {
    try {
        const { id } = req.params;
        const userLocation = await UserLocation.findByPk(id);
        if (userLocation) {
            return res.json(userLocation);
        }
        return res.status(404).json({ message: 'UserLocation not found' });
    } catch (error) {
        console.error("Error getting UserLocation:", error.message);
        res.status(500).json({ error: "Error getting UserLocation." });
    }
};

export const getUserLocationByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
      const userLocations = await UserLocation.findAll({
        where: { user_id: userId },
      });
      res.json(userLocations);
    } catch (error) {
      console.error("Error getting UserLocations by UserId:", error.message);
      res.status(500).json({ error: "Error getting UserLocations by UserId." });
    }
  };
  
  export const getUserLocationByLocationId = async (req, res) => {
    try {
      const { locationId } = req.params;
      const userLocations = await UserLocation.findAll({
        where: { location_id: locationId },
      });
      res.json(userLocations);
    } catch (error) {
      console.error("Error getting UserLocations by LocationId:", error.message);
      res.status(500).json({ error: "Error getting UserLocations by LocationId." });
    }
  };