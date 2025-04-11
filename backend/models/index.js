import sequelize from '../db.js';

import User from './user.js';
import Location from './location.js';
import Feature from './feature.js';
import UserLocation from './userLocation.js';
import FeatureLocation from './featureLocation.js';
import Review from './review.js';

// Feature - Location relations
Location.belongsToMany(Feature, { through: FeatureLocation, foreignKey: 'location_id' });
Feature.belongsToMany(Location, { through: FeatureLocation, foreignKey: 'feature_id' });

FeatureLocation.belongsTo(Feature, { foreignKey: 'feature_id' });
Feature.hasMany(FeatureLocation, { foreignKey: 'feature_id' });
FeatureLocation.belongsTo(Location, { foreignKey: 'location_id' });
Location.hasMany(FeatureLocation, { foreignKey: 'location_id' });

// User - Location relations
User.belongsToMany(Location, { through: UserLocation, foreignKey: 'user_id' });
Location.belongsToMany(User, { through: UserLocation, foreignKey: 'location_id' });

// Review relations
User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

Location.hasMany(Review, { foreignKey: 'location_id' });
Review.belongsTo(Location, { foreignKey: 'location_id' });

const models = {
  sequelize,
  User,
  Location,
  Feature,
  UserLocation,
  FeatureLocation,
  Review,
};

export default models;