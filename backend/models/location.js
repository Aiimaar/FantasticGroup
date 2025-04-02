import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Location = sequelize.define('Location', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  address : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lon : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  openH : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  closeH : {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default Location;