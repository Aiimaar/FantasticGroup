// Middleware d'authentification temporairement désactivé pour les tests
const auth = (req, res, next) => {
    // Simule un utilisateur connecté avec l'ID 1
    req.user = { id: 1, email: 'test@example.com' };
    // Passe directement à la fonction suivante sans vérifier l'authentification
    next();
  };
  
  export default auth;