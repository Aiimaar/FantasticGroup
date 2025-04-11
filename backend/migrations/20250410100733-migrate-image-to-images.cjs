'use strict';

// On utilise require pour Sequelize, pas de déclaration const supplémentaire
const Sequelize = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    // 1. Ajouter le champ "images" (type JSON)
    await queryInterface.addColumn('Location', 'images', {
      type: Sequelize.DataTypes.JSON, // Utilisation correcte de Sequelize.DataTypes
      allowNull: true,
      defaultValue: [],
    });

    // 2. Migrer les données de "image" vers "images" (syntaxe MySQL)
    await queryInterface.sequelize.query(`
      UPDATE Location
      SET images = CASE 
        WHEN image IS NOT NULL THEN JSON_ARRAY(image)
        ELSE '[]'
      END
    `);

    // 3. Supprimer l'ancien champ "image"
    await queryInterface.removeColumn('Location', 'image');
  },

  down: async (queryInterface) => {
    // Rollback : Recréer "image"
    await queryInterface.addColumn('Location', 'image', {
      type: Sequelize.DataTypes.STRING, // Utilisation correcte de Sequelize.DataTypes
      allowNull: true,
    });

    // Restaurer les données depuis "images" (syntaxe MySQL)
    await queryInterface.sequelize.query(`
      UPDATE Location
      SET image = JSON_EXTRACT(images, '$[0]')
      WHERE images IS NOT NULL AND JSON_LENGTH(images) > 0
    `);

    // Supprimer "images"
    await queryInterface.removeColumn('Location', 'images');
  }
};