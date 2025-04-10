'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('feature_location', {
      feature_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    /*await queryInterface.addConstraint('feature_location', {
      fields: ['feature_id'],
      type: 'foreign key',
      name: 'fk_feature_location_feature',
      references: {
        table: 'feature',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('feature_location', {
      fields: ['location_id'],
      type: 'foreign key',
      name: 'fk_feature_location_location',
      references: {
        table: 'location',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });*/
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('feature_location');
  },
};  