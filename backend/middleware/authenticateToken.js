import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('Authorization Header:', authHeader);

  const token = authHeader && authHeader.split(' ')[1];
  console.log('Token:', token);

  if (!token) {
    return res.status(401).json({ message: 'No token or wrong' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Error authenticating token:", err);
    res.status(403).json({ message: 'No token or wrong' });
  }
};