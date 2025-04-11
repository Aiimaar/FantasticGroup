import models from "../models/index.js";

const { FeatureLocation, Feature } = models;

export const getFeatureLocations = async (req, res) => {
  try {
    const featureLocations = await FeatureLocation.findAll();
    res.json(featureLocations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFeatureLocation = async (req, res) => {
  const { feature_id, location_id } = req.body;
  try {
    const featureLocation = await FeatureLocation.create({ feature_id, location_id });
    res.status(201).json(featureLocation);
  } catch (error) {
    console.error("Error creating FeatureLocation:", error.message);
    res.status(500).json({ error: "Error creating FeatureLocation." });
  }
};

export const updateFeatureLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { feature_id, location_id } = req.body;
    const [updated] = await FeatureLocation.update({ feature_id, location_id }, { where: { id } });
    if (updated) {
      const updatedFeatureLocation = await FeatureLocation.findByPk(id);
      return res.status(200).json(updatedFeatureLocation);
    }
    return res.status(404).json({ message: 'FeatureLocation not found' });
  } catch (error) {
    console.error("Error updating FeatureLocation:", error.message);
    res.status(500).json({ error: "Error updating FeatureLocation." });
  }
};

export const deleteFeatureLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await FeatureLocation.destroy({ where: { id } });
    if (deleted) {
      return res.status(204).end();
    }
    return res.status(404).json({ message: 'FeatureLocation not found' });
  } catch (error) {
    console.error("Error deleting FeatureLocation:", error.message);
    res.status(500).json({ error: "Error deleting FeatureLocation." });
  }
};

export const getFeatureLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const featureLocation = await FeatureLocation.findByPk(id);
    if (featureLocation) {
      return res.json(featureLocation);
    }
    return res.status(404).json({ message: 'FeatureLocation not found' });
  } catch (error) {
    console.error("Error getting FeatureLocation:", error.message);
    res.status(500).json({ error: "Error getting FeatureLocation." });
  }
};

export const getFeatureLocationByFeatureId = async (req, res) => {
  try {
    const { featureId } = req.params;
    const featureLocations = await FeatureLocation.findAll({
      where: { feature_id: featureId },
    });
    res.json(featureLocations);
  } catch (error) {
    console.error("Error getting FeatureLocations by FeatureId:", error.message);
    res.status(500).json({ error: "Error getting FeatureLocations by FeatureId." });
  }
};

export const getFeatureLocationByLocationId = async (req, res) => {
  try {
    const { locationId } = req.params;
    const featureLocations = await FeatureLocation.findAll({
      where: { location_id: locationId },
      include: [
        {
          model: Feature,
          attributes: ['id', 'name'],
        },
      ],
    });

    // Transformer les données pour retourner uniquement les features
    const features = featureLocations.map(fl => ({
      id: fl.Feature.id,
      name: fl.Feature.name,
    }));

    res.json(features);
  } catch (error) {
    console.error("Error getting FeatureLocations by LocationId:", error.message);
    res.status(500).json({ error: "Error getting FeatureLocations by LocationId." });
  }
};