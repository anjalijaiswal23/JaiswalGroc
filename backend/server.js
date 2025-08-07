require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./sequelize');
const authRoutes = require('./auth');
const protectedRoutes = require('./routes/protected');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);


sequelize.authenticate()
  .then(() => console.log('MySQL connected'))
  .catch((err) => console.error('MySQL connection error:', err));

// Make sequelize available to routes
app.set('sequelize', sequelize);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
