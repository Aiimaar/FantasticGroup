import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Location = sequelize.define('Location', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  place: {
    type: DataTypes.STRING,
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
  images: { // Remplace "image" par "images"
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
}, {
  timestamps: false,
});

export default Location;