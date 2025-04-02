import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const FeatureLocation = sequelize.define('FeatureLocation', {
  feature_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Feature', 
      key: 'id',
    },
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Location', 
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'feature_location', 
});

export default FeatureLocation;