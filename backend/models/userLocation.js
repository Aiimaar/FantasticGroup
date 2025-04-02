import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const UserLocation = sequelize.define('UserLocation', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User', 
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
  tableName: 'user_location', 
});

export default UserLocation;