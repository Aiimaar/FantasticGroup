import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import http from 'http';
import routes from './routes/index.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Conf
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware pour logger les requêtes entrantes (débogage)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get("/api/status", (req, res) => {
  res.status(200).json({ message: "API funcionando" });
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));
dotenv.config();

// API routes conf
app.use('/api', routes);

// Error management
app.use((req, res) => {
  console.log(`[${new Date().toISOString()}] 404 - Route not found: ${req.method} ${req.url}`);
  res.status(404).send('Page not found');
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;