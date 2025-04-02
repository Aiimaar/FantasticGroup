import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Feature = sequelize.define('Feature', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default Feature;