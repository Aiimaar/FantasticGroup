import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Review = sequelize.define('Review', {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date : {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  star_num : {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  location_id : {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Location', 
      key: 'id',
    },
  },
  user_id : {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User', 
      key: 'id',
    },
  },
  is_active : {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'review',
});

export default Review;