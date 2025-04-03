import models from "../models/index.js";

const { Feature } = models;

export const getFeatures = async (req, res) => {
    try {
      const features = await Feature.findAll({
        attributes: ['id', 'name'],
      });
      res.json(features);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const createFeature = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  try {

    const feature = await Feature.create({
      name,
    });

    res.status(201).json({
      id: feature.id,
      name: feature.name,
    });
  } catch (error) {
    console.error("Error creating feature:", error.message);
    res.status(500).json({ error: "Error creating feature." });
  }
};

export const updateFeature = async (req, res) => {
    try {
      const featureId = req.feature.id;
      const { name } = req.body;
  
      if (name !== undefined && name.trim() === "") {
        return res.status(400).json({
          message: "name can't be empty.",
        });
      }
      const existingFeature = await Feature.findByPk(featureId);
  
      if (!existingFeature) {
        return res.status(404).json({ message: "Feature not found." });
      }
  
      const updatedField = {};
      if (name !== undefined) updatedField.name = name;
  
      const updatedFeature = await existingFeature.update(updatedField);
  
      res.status(200).json({
        id: updatedFeature.id,
        name: updatedFeature.name,
      });
    } catch (error) {
      console.error("Error updating feature:", error.message);
      res.status(500).json({ message: "Error updating feature." });
    }
};

export const deleteFeature = async (req, res) => {
    const { id } = req.params;
    try {
      const feature = await Feature.findByPk(id);
      if (!feature) {
        return res.status(404).json({ message: "Feature not found." });
      }
      await Feature.destroy({ where: { id } });
  
      res.status(200).json({ message: `Feature with id ${id} successfully deleted.` });
    } catch (error) {
      console.error("Error deleting feature:", error.message);
      res.status(500).json({ error: "Error deleting feature." });
    }
};

export const getFeatureById = async (req, res) => {
    const { id } = req.params;
  
    console.log("ID received:", id);
  
    try {
      const feature = await Feature.findByPk(id, {
        attributes: ['id', 'name'],
      });
  
      if (!feature) {
        console.log("Feature not found");
        return res.status(404).json({ message: "Feature not found" });
      }
  
      console.log("Feature not found:", feature);
      
      res.json({
        id: feature.id,
        name: feature.name,
        email: feature.email,
      });
    } catch (error) {
      console.error("Error getting feature:", error);
      res.status(500).json({ error: error.message });
    }
  };