'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_location', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('user_location', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_user_location_user',
      references: {
        table: 'user',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('user_location', {
      fields: ['location_id'],
      type: 'foreign key',
      name: 'fk_user_location_location',
      references: {
        table: 'location',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_location');
  },
};