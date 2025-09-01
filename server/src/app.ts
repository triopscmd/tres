import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173', // Adjust client URL as needed
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/groups', groupRoutes); // Placeholder for group routes
// app.use('/api/tasks', taskRoutes);   // Placeholder for task routes

// Basic test route
app.get('/api', (req, res) => {
  res.send('API is running...');
});

export default app;
