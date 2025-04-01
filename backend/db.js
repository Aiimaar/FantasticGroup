import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('fantasticgroup', 'root', 'Aepppa20yseeuf', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('Success connecting to MySQL with Sequelize.'))
  .catch(error => console.error('Connection error:', error));

export default sequelize;