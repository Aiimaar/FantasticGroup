import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import http from 'http';
import routes from './routes/index.js'; // Import routes
import { createRequire } from 'module';

// Import routes



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Conf
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.get("/api/status", (req, res) => {
  res.status(200).json({ message: "API funcionando" });
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')));
dotenv.config();

// API routes conf
app.use('/api', routes);


// Error management
app.use((req, res) => res.status(404).send('Page not found'));
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