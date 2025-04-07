import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'fantasticgroup',  
  username: 'root',           
  password: '',               
  host: 'localhost',          
  dialect: 'mysql',           
  port: 3306,                 
  logging: false,             
  define: {
    timestamps: false,        
    freezeTableName: true     
  },
  pool: {
    max: 5,                   
    min: 0,                   
    acquire: 30000,           
    idle: 10000               
  }
});

sequelize.authenticate()
  .then(() => console.log('Connected with MySQL!'))
  .catch(err => {
    console.error('Failed to connect to MySQL:', err.message);
    process.exit(1);e
  });

export default sequelize;