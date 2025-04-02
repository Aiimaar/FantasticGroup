import sequelize from '../db.js';

import User from './user.js';
import Location from './location.js';
import Feature from './feature.js';
import UserLocation from './userLocation.js';
import FeatureLocation from './featureLocation.js';

Location.belongsToMany(Feature, { through: FeatureLocation, foreignKey: 'location_id' });
Feature.belongsToMany(Location, { through: FeatureLocation, foreignKey: 'feature_id' });

User.belongsToMany(Location, { through: UserLocation, foreignKey: 'user_id' });
Location.belongsToMany(User, { through: UserLocation, foreignKey: 'location_id' });

const models = {
  sequelize,
  User,
  Location,
  Feature,
  UserLocation,
  FeatureLocation,
};

export default models;