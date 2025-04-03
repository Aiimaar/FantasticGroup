import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'fantasticgroup',  // Nom de la base de données
  username: 'root',           // Utilisateur MySQL
  password: '',               // Mot de passe (vide dans votre cas)
  host: 'localhost',          // Hôte de la base de données
  dialect: 'mysql',           // Dialecte explicitement déclaré
  port: 3306,                 // Port explicite (standard MySQL)
  logging: false,             // Désactive les logs SQL
  define: {
    timestamps: false,        // Désactive les champs createdAt/updatedAt
    freezeTableName: true     // Empêche le pluriel automatique des noms de table
  },
  pool: {
    max: 5,                   // Connexions maximum
    min: 0,                   // Connexions minimum
    acquire: 30000,           // Temps d'attente avant erreur (ms)
    idle: 10000               // Temps avant libération connexion inutilisée
  }
});

// Test de connexion immédiat
sequelize.authenticate()
  .then(() => console.log('✅ Connexion with mysql successfull !'))
  .catch(err => {
    console.error('❌ Failed to connect to MySQL:', err.message);
    process.exit(1); // Quitte l'application si la connexion échoue
  });

export default sequelize;